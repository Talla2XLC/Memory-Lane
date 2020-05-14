import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

export default class UserRegistrationCompleting extends Component {

  state = {
    emailVerified: false
  };
  
  emailVerified = () => {
		const { location } = this.props;

		const query = new URLSearchParams(location.search);

		const email = query.get('email');
		const token = query.get('token');
		const key = query.get('memory');

		axios
			.post(
				'http://api.memory-lane.ru/check/auth-email',
				{ 
					'email': email,
					'token': token,
					'key': key
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(res => {
					if (res.data.result) {	// res.status === 200
						this.setState({ emailVerified: true });

					} else {	// res.status !== 200
						console.error(res.data.error);
						alert(`${res.data.error}`);
					}
				})
				.catch(error => console.error(error));
	};

	render() {
		const { emailVerified } = this.state;

		if (emailVerified) return <Redirect to='/auth'/>;

		return (
			<div className=''>
				<h1 className=''>Вы почти зарегистрировались, подтвердите email</h1>
				<input
					className=''
					type='submit'
					value='Подтвердить электронный адрес email'
					onClick={this.emailVerified}
				/>
			</div>
		)
	};
}
