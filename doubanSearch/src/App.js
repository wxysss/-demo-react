import React, { Component } from 'react'
import Search from './components/search/index.jsx'
import Show from './components/show/index.jsx'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Show></Show>
      </div>
    )
  }
}
