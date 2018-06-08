import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteCategory } from '../../actions/delete-category';
import DeleteConfirmationModal from '../delete-confirmation-modal/delete-confirmation-modal';
import { deleteConfirmationMessages } from './i18n';
import { opened } from '../../actions/category-modal';
import { categoryUpdated } from '../../actions/save-category';
import isEmpty from 'lodash.isempty';
import Pagination from '../../package/pagination/pagination';

class Categories extends Component {
    static propTypes = {
        header: PropTypes.array,
        rows: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        dispatch: PropTypes.func,
    };

    state = {
        categoryToDelete: 0,
        showConfirmationModal: false,
        deleteCategoryInProgress: false,
        pageOfItems: []
    }

    handleCancelDeleteCategory = () => {
        this.setState({ showConfirmationModal: false });
        return null;
    };

    handleDeleteCategory = () => {
        const { dispatch } = this.props;
        const { categoryToDelete } = this.state;
        this.setState({showConfirmationModal: false });
        return dispatch(deleteCategory(categoryToDelete));
    };

    handleDeleteCategoryConfirm = id => {
        this.setState({ categoryToDelete: id });
        this.setState({showConfirmationModal: true });
        return null;
    };

    handleUpdateCategory = category => {
        const { dispatch } = this.props;
        dispatch(categoryUpdated(category));
        dispatch(opened());
    }

    onChangePage = pageOfItems =>
        this.setState({ pageOfItems });

    render() {
        const {
            header,
            rows,
            dispatch
        } = this.props;
        const {
            showConfirmationModal,
            deleteCategoryInProgress,
            pageOfItems
         } = this.state;

        return (
            <div className="box-body">
                <form className="CategoryForm">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {
                                    header.map((col) =>
                                        <th key={ col }>{ col }</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                typeof rows.error != "undefined" || rows.error != null
                                ?
                                    <tr>
                                        <td colSpan={5}>{ rows.error }.</td>
                                    </tr>
                                    :
                                    pageOfItems.map((row, index) =>
                                        <tr
                                            key={ row.id }
                                        >
                                            <td key= { row.id }>{ row.id }</td>
                                            <td key= { row.categoryTitle }>{ row.categoryTitle }</td>
                                            <td key= { row.categoryDescription }>{ row.categoryDescription }</td>
                                            <td key= { row.categoryIcon }>
                                                <img
                                                    width="50"
                                                    height="50"
                                                    src={"icons/" + row.categoryIcon}
                                                />
                                            </td>
                                            <td>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="btn btn-purple btn-formatter btn-xs btn-actions glyphicon glyphicon-eye-open btn-icon"
                                                    onClick={ this.handleUpdateCategory.bind(this, row) }
                                                    title="VIEW"
                                                >
                                                </a>

                                                <a
                                                    href="javascript:void(0)"
                                                    className="btn btn-warning btn-formatter btn-xs btn-actions glyphicon glyphicon-pencil btn-icon"
                                                    onClick={ this.handleUpdateCategory.bind(this, row) }
                                                    title="EDIT"
                                                >
                                                </a>

                                                <a
                                                    href="javascript:void(0)"
                                                    className="btn btn-danger btn-formatter btn-xs btn-actions glyphicon glyphicon-trash btn-icon"
                                                    onClick={ this.handleDeleteCategoryConfirm.bind(this, row.id) }
                                                    title="DELETE"
                                                >
                                                </a>
                                            </td>

                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    {
                        !rows.error
                        ?
                            <Pagination items={rows} onChangePage={this.onChangePage} />
                        : ''
                    }
                   { showConfirmationModal &&
                        <DeleteConfirmationModal
                            isOpen={ showConfirmationModal }
                            onCancel={ this.handleCancelDeleteCategory }
                            onConfirmation={ this.handleDeleteCategory }
                            deleteInProgress={ deleteCategoryInProgress }
                            messages={ {
                                header: { ...deleteConfirmationMessages.header },
                                main: deleteConfirmationMessages.main
                            } }
                        />
                }
                </form>
            </div>
        );
    }
}

export default Categories;
