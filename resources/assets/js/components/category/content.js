import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCategories from 'js/actions/category/get-categories';
import { opened } from 'js/actions/category/category-modal';
import { connect } from 'react-redux';
import Categories from './categories';
import CategoryModal from './category-modal';
import ViewCategoryModal from './view-category-modal';
import { RECENT_CATEGORIES_HEADER } from 'js/constants';
import LoadingIndicator from 'js/package/loading-indicator/loading-indicator';
import { intlShape, FormattedMessage } from 'react-intl';
import Button from 'js/package/button/button';

class Content extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        isOpen: PropTypes.bool,
        category: PropTypes.object,
        loadingState: PropTypes.bool.isRequired
    };

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCategories());
    }

    render() {
        const {
            categories,
            isOpen,
            category,
            loadingState,
            dispatch,
         } = this.props;
        let headers = RECENT_CATEGORIES_HEADER;

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Categories
                        <small>List</small>
                    </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Categories</li>
                </ol>
                </section>

                <section className="content">
                    <div className="box">
                        <CategoryModal
                            isOpen={ isOpen }
                            dispatch= { dispatch }
                            category= { category }
                        />

                        {
                            category.action === 'view'
                            ?
                                <ViewCategoryModal
                                    isOpen={ category.isOpen }
                                    dispatch= { dispatch }
                                    category= { category }
                                />
                            :
                                ''
                        }

                        {
                            category.action === 'view'
                            ?
                                <ViewCategoryModal
                                    isOpen={ isOpen }
                                    dispatch= { dispatch }
                                    category= { category }
                                />
                            :
                                ''
                        }

                        <Button
                            type="button"
                            className="btn btn-info btn-sm pull-right btn-single"
                            id="cancel-submit"
                            onClick={ () => dispatch(opened()) }
                        >
                        <div className="glyphicon glyphicon-plus btn-icon">
                            <FormattedMessage
                                id="add-category"
                                defaultMessage="ADD"
                            />
                        </div>
                        </Button>

                        {
                            loadingState
                            ?
                                <div className="box-body-loader">
                                    <LoadingIndicator />
                                </div>
                            :
                                <Categories
                                    header={ headers }
                                    rows={ categories }
                                    dispatch= { dispatch }
                                />
                         }
                      </div>

                    </section>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    categories: store.categories,
    isOpen: store.modal.isOpen,
    category:store.category,
    loadingState: store.loadingState
});

export default connect(mapStateToProps)(Content);
