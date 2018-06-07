import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { FormattedMessage } from 'react-intl';

export default class ImageUpload extends Component {
    render() {
        return(
            <div className="image-upload">
                <input
                    type="file"
                    className="form-control"
                    onChange={ this.props.onChange }
                    style={{"display" : "none"}}
                    ref="fileUpload"
                />

                <Button
                    type="button"
                    className="btn btn-success"
                    id="image-upload-button"
                    onClick={ () => { this.refs.fileUpload.click() } }
                >
                    <FormattedMessage
                        id="image-upload-button-message"
                        defaultMessage="SELECT FILE"
                    />
                </Button>
            </div>
        );
    }
}