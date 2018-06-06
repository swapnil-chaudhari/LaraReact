import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Content extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modified: "still blank"
        };
    }

    getInitialProps() {
    return {
      myProp: "blank"
    };
  }

    componentWillReceiveProps(nextProps) {
        this.setState({
          modified: "IsSoModified"
        });
      }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Demos
                        <small>List</small>
                    </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Demos</li>
                </ol>
                </section>

                <section className="content">
                    <div className="box">
                        <div className="displayed">{this.state.modified}</div>
                      </div>

                    </section>
            </div>
        );
    }
}

export default Content;
