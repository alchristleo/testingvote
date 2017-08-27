import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import S from 'shorti'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Col xs={12} sm={6}>
            <h1>Vote for Future</h1>
          </Col>
        </div>
        <div className="clearfix"></div>
        <div style={ S('pull-right mb-15') }>
          <a style={ { textDecoration: 'none' } } href="https://cosmicjs.com" target="_blank">
            <img style={ S('mr-10') } className="pull-left" src="https://cosmicjs.com/images/logo.svg" width="28" height="28" />
            <span style={ S('color-666 t-3 relative') }>Proudly powered by Cosmic JS</span>
          </a>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}
