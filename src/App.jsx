import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.scss';
import 'antd/dist/antd.css';


import Navbar from './components/Navbar'
import Views from './views/Views'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Views />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
