import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesCount } from '../../actions/get-categories';
import LoadingIndicator from '../../package/loading-indicator/loading-indicator';

class Content extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCategoriesCount());
    }
    render() {
        const { categoriesCount, loadingState } = this.props;
        return(
            <div className="content-wrapper">
                {
                    loadingState
                    ?
                        <div className="box-body-loader">
                            <LoadingIndicator />
                        </div>
                    :
                        <div className="dashboard-container">
                            <section className="content-header">
                                <h1>
                                    Dashboard
                                    <small>List</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>
                            </section>
                            <section className="content">
                                <div className="row">
                                    <div className="col-lg-3 col-xs-6">
                                        <div className="small-box bg-aqua">
                                            <div className="inner">
                                                <h3>{categoriesCount}</h3>
                                                <p>Categories</p>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-tags"></i>
                                            </div>
                                            <a href="#categories" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <div className="small-box bg-green">
                                            <div className="inner">
                                                <h3>150</h3>
                                                <p>Test Data</p>
                                            </div>
                                            <div className="icon">
                                                <i className="ion ion-stats-bars"></i>
                                            </div>
                                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <div className="small-box bg-yellow">
                                            <div className="inner">
                                                <h3>150</h3>
                                                <p>Test Data</p>
                                            </div>
                                            <div className="icon">
                                                <i className="ion ion-person-add"></i>
                                            </div>
                                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <div className="small-box bg-red">
                                            <div className="inner">
                                                <h3>150</h3>
                                                <p>Test Data</p>
                                            </div>
                                            <div className="icon">
                                                <i className="ion ion-pie-graph"></i>
                                            </div>
                                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                 }
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    loadingState: store.loadingState,
    categoriesCount: store.category.categoriesCount
});

export default connect(mapStateToProps)(Content);
