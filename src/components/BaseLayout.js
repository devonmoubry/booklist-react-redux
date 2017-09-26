import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
      </div>
    );
  }
}
