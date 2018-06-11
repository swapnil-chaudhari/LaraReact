import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'js/components/modal/modal';
import LoadingButton from 'js/components/loading-button/loading-button';
import Button from 'js/package/button/button';
import Close from 'js/package/icons/close';

/* eslint-disable max-len */
const DeleteConfirmationModal =
    ({ isOpen, onCancel, onConfirmation, deleteInProgress, messages }) => (
        <Modal
            className="DeleteConfirmationModal"
            isOpen={ isOpen }
            onRequestClose={ onCancel }
        >
            <article className="DeleteConfirmationModal-container modal-content">
                <header className="DeleteConfirmationModal-header modal-header">
                    <h4 className="DeleteConfirmationModal-heading">
                            { messages.header.defaultMessage }
                    </h4>
                    <button onClick={ onCancel } type="button" className="close" data-dismiss="modal">&times;</button>
                </header>
                <section className="modal-body">
                    <p className="DeleteConfirmationModal-content">
                        { messages.main.defaultMessage}
                    </p>
                    <div className="DeleteConfirmationModal-button-wrapper">
                        <Button
                            type="button"
                            className="btn btn-info"
                            id="cancel-submit"
                            onClick={ onCancel }
                        >
                            <FormattedMessage
                                id="delete-modal.cancel"
                                defaultMessage="CANCEL"
                            />
                        </Button>
                        <LoadingButton
                            type="button"
                            id="confirm-submit"
                            onClick={ onConfirmation }
                            isLoading={ deleteInProgress || false }
                            dangerStyle
                        >
                            <span className="LoadingButton-hide">
                                <FormattedMessage
                                    id="delete-modal.delete"
                                    defaultMessage="DELETE"
                                />
                            </span>
                        </LoadingButton>
                    </div>
                </section>
            </article>
        </Modal>);

/* eslint-enable max-len */

DeleteConfirmationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirmation: PropTypes.func.isRequired,
    deleteInProgress: PropTypes.bool,
    messages: PropTypes.shape({
        header: PropTypes.object,
        main: PropTypes.object,
    }).isRequired,
};

export default DeleteConfirmationModal;
