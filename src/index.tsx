import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Top } from './pages/top'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`
  
const Main = (
  <>
    <GlobalStyle />
    <Router>
        <Route exact path="/top">
          <Top />
        </Route>
        <Route exact path="/sub">
          <h1>Sub</h1>
        </Route>
        <Redirect to="/top" path="*" />
      </Router>
  </>
)

render(Main, document.getElementById('app'))
