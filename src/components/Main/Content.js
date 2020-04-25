import React from 'react';
import './Content.sass';
import Router from '../../Router';
import PerfectScrollbar from 'react-perfect-scrollbar';


export default function Content() {
  return (
    <div className='Content'>
      <PerfectScrollbar component='div'>
        <Router />
      </PerfectScrollbar>
    </div>
  );
}
