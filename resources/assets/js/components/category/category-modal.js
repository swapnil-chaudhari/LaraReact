import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/modal/modal';
import { updateCategoryField, clearCategoryEditor } from '../../actions/category-editor';
import { validateAndSaveCategory } from '../../actions/validate-and-save-category';
import { reset } from '../../actions/category-modal';
import { clearCategoryState } from '../../actions/clear-category-state';
import { connect } from 'react-redux';
import CategoryTitle from './category-title/category-title.js';
import CategoryDescription from './category-description/category-description.js';
import CategoryIcon from './category-icon/category-icon.js';
import isEmpty from 'lodash.isempty';
import LoadingButton from '../../components/loading-button/loading-button';
import { intlShape, FormattedMessage } from 'react-intl';
import Button from '../../package/button/button';
import Close from '../../package/icons/close';
import { fieldErrorMessages } from './i18n';
import { getMessagesForErrors } from '../../utils/error-handling';



class CategoryModal extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        isOpen: PropTypes.bool,
        categoryEdits: PropTypes.object,
        category: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: ''
        };
    }

    handleSaveCategory = () => {
        const { dispatch } = this.props;
        return dispatch(validateAndSaveCategory());
    };

    handleFieldChange = (field, event) => {
        const { dispatch } = this.props;

        let fieldValue = event.target.value;
        if (event.target.files) {
            fieldValue = event.target.files[0];

            let reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    imagePreviewUrl: reader.result
                });
            }

            reader.readAsDataURL(fieldValue)
        }
        return dispatch(updateCategoryField(field, fieldValue));
    }

    handleModalReset = () => {
        const { dispatch } = this.props;
        dispatch(clearCategoryState());
        dispatch(clearCategoryEditor());
        dispatch(reset());

        this.setState({
            imagePreviewUrl: ''
        });
    }

    render() {
        const {
            categoryEditor = {},
            isOpen,
            dispatch,
            category
        } = this.props;
        const { fieldErrors, categoryEdits } = categoryEditor;
        const errorMessages = getMessagesForErrors(fieldErrors, fieldErrorMessages);
        const categoryDetails = {
            ...category,
            ...categoryEdits
        };

        const {
            categoryTitle = '',
            categoryDescription = '',
            categoryIcon = '',
        } = categoryDetails;

        const {imagePreviewUrl} = this.state;

        console.log('state ', this.state);

        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img className="imagePreview" src={imagePreviewUrl} />);
        }

        return (
            <Modal
                className="DeleteConfirmationModal"
                isOpen={ isOpen }
                onRequestClose={ this.handleModalReset.bind(this) }
            >
                <article className="DeleteConfirmationModal-container modal-content">
                    <header className="DeleteConfirmationModal-header modal-header">
                        <h4 className="DeleteConfirmationModal-heading">
                                { !isEmpty(categoryDetails.id) ? 'Edit' : 'Add' } Category
                        </h4>
                        <button onClick={ this.handleModalReset.bind(this) } type="button" className="close" data-dismiss="modal">&times;</button>
                    </header>
                    <section className="modal-body">
                        <form role="form">
                            <CategoryTitle
                                categoryTitle={ categoryTitle }
                                onChange ={ this.handleFieldChange.bind(this, 'categoryTitle') }
                                errorMessage={ errorMessages.categoryTitle }
                            />

                            <CategoryDescription
                                categoryDescription = { categoryDescription }
                                onChange ={ this.handleFieldChange.bind(this, 'categoryDescription') }
                                errorMessage={ errorMessages.categoryDescription }
                            />
                            <CategoryIcon
                                categoryIcon = { categoryIcon ? categoryIcon.name : '' }
                                onChange ={ this.handleFieldChange.bind(this, 'categoryIcon') }
                                errorMessage={ errorMessages.categoryIcon }
                            />
                            { imagePreview }
                        </form>
                        <div className="DeleteConfirmationModal-button-wrapper">
                            <Button
                                type="button"
                                className="DeleteConfirmationModal-button"
                                id="cancel-submit"
                                onClick={ this.handleModalReset.bind(this) }
                            >
                                <FormattedMessage
                                    id="delete-modal.cancel"
                                    defaultMessage="CANCEL"
                                />
                            </Button>
                            <LoadingButton
                                type="button"
                                id="confirm-submit"
                                onClick={ this.handleSaveCategory.bind(this) }
                            >
                                <span className="LoadingButton-hide">
                                    <FormattedMessage
                                        id="delete-modal.delete"
                                        defaultMessage='SAVE'
                                    />
                                </span>
                            </LoadingButton>
                        </div>
                    </section>
                </article>
            </Modal>
        );
    }
}

const mapStateToProps = (store) => ({
    categoryEditor: store.categoryEditor
});

export default connect(mapStateToProps)(CategoryModal);
