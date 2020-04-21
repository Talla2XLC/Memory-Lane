import React from 'react';
import Search from './Header/Search.jsx';
import Notice from './Header/Notice.jsx';
import SetingsMenu from './Header/Settings_menu.jsx';
import AddSection from './Header/Add_section.jsx';

import styled from 'styled-components';

export default function Header() {
    return (
            <HeaderhWrapper>
                <div className='setingsMenuPosition'>
                    <SetingsMenu/>
                </div>
                <div className='noticePosition'>
                    <Notice />
                </div> 
                <div className='searchPosition'>
                    <Search/>
                </div>
                <div className='addSectionPosition'>
                    <AddSection/>
                </div>
            </HeaderhWrapper>
    );
  }  

const HeaderhWrapper = styled.div`
display: grid;
grid-template-columns: 736px 529px 36px 30px 48px 68px;
grid-template-rows: 28px 42px 26px 48px 37px;
width: 1440px;

.searchPosition {
  grid-column: 2/span 2;
  grid-row: 4/span 1;
}

.noticePosition {
  grid-column: 3/span 1;
  grid-row: 2/span 1;
}

.setingsMenuPosition {
  grid-column: 5/span 1;
  grid-row: 2/span 1;
  margin: -3px auto;
}

.addSectionPosition {
  grid-column: 5/span 1;
  grid-row: 4/span 1;  
  margin: 4px auto;
}

`;