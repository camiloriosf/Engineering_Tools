import React, { Component } from 'react';
import Link from 'next/link'

export default class Footer extends Component { 
  render() {
    return (
      <footer>
        <Link prefetch href='/'>
          <a className={this.props.pathname === '/' && 'is-active'}>Home</a>          
        </Link>
        <style jsx>{`
      footer {
        margin-top: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
      </footer>
    )
  }
}