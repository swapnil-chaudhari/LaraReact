import PropTypes from 'prop-types';
import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';
import cx from 'classnames';
import './checkbox.scss';

class Checkbox extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        checked: PropTypes.bool,
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        isIndeterminate: PropTypes.bool
    };

    componentWillMount() {
        this.id = uniqueId();
    }

    setIndeterminate(element, isIndeterminate) {
        if (isIndeterminate)
            element.setAttribute('data-indeterminate', '');
        else
            element.removeAttribute('data-indeterminate');
    }

    render() {
        const {
            children,
            className,
            checked,
            disabled,
            readOnly,
            onChange,
            isIndeterminate
        } = this.props;

        return (
            <div className={ cx(className, 'checkbox') }>
                <input
                    id={ this.id }
                    type="checkbox"
                    checked={ checked }
                    readOnly={ readOnly }
                    onChange={ onChange }
                    disabled={ disabled }
                    className={ cx('checkbox-input', { disabled }) }
                    ref={ elem => elem && this.setIndeterminate(elem, isIndeterminate) }
                />
                <label htmlFor={ this.id }>{ children }</label>
            </div>
        );
    }
}

export default Checkbox;