import React, { Fragment } from 'react'
import './App.scss';

import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Views from './views/Views'

const App = ({user}) => {
  return (
      <Fragment>
        <BrowserRouter>
          <Views/>
        </BrowserRouter>  
      </Fragment> 
  )
}

export default App;
