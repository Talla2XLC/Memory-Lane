import React, {Component} from 'react';
// import { ReactComponent as Search_icon }	from './svg/search_icon.svg';
import axios from 'axios';
import {connect} from 'react-redux';

import Loader from './loader.gif';

import './Search.css';
import PageNavigation from './PageNavigation';
// import SearchResult from './people.json';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.state = {
            query: '',
            openResult: false,
            // results: SearchResult,
            results: '',
            loading: false,
            message: '',
            totalResults: 0, 
            totalPages: 0,
            curentPageNo: 0
        };
        
        this.cancel = '';
    }

    // getTermFilter = (filter) => {
        // if (filter.type === "any") {
        //     return {
        //       bool: {
        //         should: [
        //           filter.values.map(filterValue => ({
        //             term: getTermFilterValue(filter.field, filterValue)
        //           }))
        //         ],
        //         minimum_should_match: 1
        //       }
        //     };
        //   } else if (filter.type === "all") {
        //     return {
        //       bool: {
        //         filter: [
        //           filter.values.map(filterValue => ({
        //             term: getTermFilterValue(filter.field, filterValue)
        //           }))
        //         ]
        //       }
        //     };
        //   }

    // }

    /**
	 * Get the Total Pages count.
	 *
	//  * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};

    /**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
    fetchSearchResults = (updatedPageNo = '', query ) => {
        let { results } = this.state;
        const { token } = this.props;
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        // By default the limit of results is 20
        // const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
        const searchUrl = `http://api.memory-lane.ru/search`;
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        // axios
        //     .get(searchUrl, {
        //         cancelToken: this.cancel.token,
        //     })
            axios.post(
                searchUrl, 
                {
                    // 'query': query,
                    // 'result': this.state.results
                    search: query
                },
                // {
                //     cancelToken: this.cancel.token,
                // },
                {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `${token}`
                    // cancelToken: this.cancel.token
                }}
            // 
            )
            .then((res) => {
                console.log(res);
                console.warn(res.data);
				const total = res.data.total;
				const totalPagesCount = this.getPageCount( total, 20 );
                const resultNotFoundMsg = !res.data.content.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    // results: res.data.hits,
                    results: 5,
                    message: resultNotFoundMsg,
                    // totalResults: total,
                    // totalPages: totalPagesCount,
                    // currentPageNo: updatedPageNo,
                    loading: false
                });
                console.log();
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results. Please check network',
                    });
                }
            });
    };

    renderSearchResults = () => {
        const {results} = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map((result) => {
                        return (
                            <a key={result.id} href={result.previewURL} className="result-items">
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={`${result.user}`}/>
                                </div>
                            </a>
                        );
                    })}
                </div>
            );
        }
    };

    handleOnInputChange = (e) => {
        const query = e.target.value;
        if ( ! query ) {
            this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }
    };

    /**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */

    handlePageClick = ( type ) => {
		// e.preventDefault();
		const updatePageNo = 'prev' === type
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};

	render() {
        const { query, loading, message, currentPageNo, totalPages } = this.state;

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value={ query }
						id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
					/>
					<button onClick={() => this.setState({openResult: true})}>
                        <i className="fa fa-search search-icon" aria-hidden="true"/>
                    </button>
				</label>
                {/*Error Message*/}
                {message && <p className='message'>{ message }</p>}
				{/*Loader*/}
                <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt='loader'/>

                {/*Navigation*/}
                <PageNavigation
                    loading={ loading }
                    showPrevLink={ showPrevLink }
                    showNextLink={ showNextLink }
                    handlePrevClick={ () => this.handlePageClick('prev')}
                    handleNextClick={ () => this.handlePageClick('next')}
                />

                {/*	Result*/}
                { this.renderSearchResults() }

                {/*Navigation*/}
                <PageNavigation
                    loading={ loading }
                    showPrevLink={ showPrevLink }
                    showNextLink={ showNextLink }
                    handlePrevClick={ () => this.handlePageClick('prev')}
                    handleNextClick={ () => this.handlePageClick('next')}
                />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Search);