import React, { Component } from 'react';
import Modal from 'js/components/modal/modal';
import { clearCategoryEditor } from 'js/actions/category/category-editor';
import { reset } from 'js/actions/category/category-modal';
import { clearCategoryState } from 'js/actions/category/clear-category-state';

const ViewCategoryModal = ({isOpen, dispatch, category}) => {
    const handleModalReset = () => {
        dispatch(clearCategoryState());
        dispatch(clearCategoryEditor());
        dispatch(reset());
    }

    return(
        <Modal
            isOpen={ isOpen }
            onRequestClose={ handleModalReset }
        >
            <article className="DeleteConfirmationModal-container modal-content">
                <header className="DeleteConfirmationModal-header modal-header">
                    <h4 className="DeleteConfirmationModal-heading">
                            View Category
                    </h4>
                    <button onClick={ handleModalReset } type="button" className="close" data-dismiss="modal">&times;</button>
                </header>
                <section className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="categoryTitle">CATEGORY TITLE:</label>
                            <div className="col-xs-10">
                                {category.categoryTitle}
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="categoryDescription">CATEGORY DESCRIPTION:</label>
                            <div className="col-xs-10">
                                {category.categoryDescription}
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="categoryIcon">CATEGORY ICON:</label>
                            <div className="col-xs-10">
                                <img className="standardImage" src={"icons/" + category.categoryIcon} />
                            </div>
                        </div>
                    </form>
                    
                </section>
            </article>
        </Modal>
    );
}

export default ViewCategoryModal;