import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';

const customStyles = {
    overlay: {
        zIndex: 3,
        backgroundColor: 'rgba(75, 75, 75, 0.74902)'
    }
};

ReactModal.setAppElement('#app');

const Modal = (
    { className, children, isOpen = true, onRequestClose, shouldCloseOnOverlayClick = true }
) => (
    <ReactModal
        className={ cx(className, 'react-modal-class') }
        isOpen={ isOpen }
        style={ customStyles }
        onRequestClose={ onRequestClose }
        contentLabel="Modal"
        shouldCloseOnOverlayClick={ shouldCloseOnOverlayClick }
    >
        { children }
    </ReactModal>
);

Modal.displayName = 'Modal';
Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    shouldCloseOnOverlayClick: PropTypes.bool
};
export default Modal;
