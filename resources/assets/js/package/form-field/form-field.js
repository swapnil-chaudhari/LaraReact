import PropTypes from 'prop-types';
import React, { Component, Children, isValidElement } from 'react';
import Help from '../help/help';
import uniqueId from 'lodash.uniqueid';
import cx from 'classnames';
import './form-field.scss';

/**
 * @description: FormField is used to wrap form components like text inputs, selects,
 * and radio groups with consistent labeling and styling
 **/
class FormField extends Component {
    static propTypes = {
        label: PropTypes.string,
        help: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        note: PropTypes.string,
        errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        className: PropTypes.string,
        id: PropTypes.string,
        isRequired: PropTypes.bool,
        children: PropTypes.node.isRequired,
        labelAppendix: PropTypes.node
    };

    componentWillMount() {
        this.componentId = uniqueId();
    }

    getChildOrSingleChild = () => {
        const { children } = this.props;
        return (Children.count(children) === 1 && Array.isArray(children)) ? children[0] : children;
    };

    renderHelp = (help, childId) => {
        if (!help)
            return;

        if (isValidElement(help))
            return help;
        return <Help message={ help } id={ `help-${childId}` } />;
    };

    renderRequired = () => {
        const { isRequired } = this.props;

        if (!isRequired)
            return;

        return <span className="FormField-required" role="tooltip" title="required">*</span>;
    };

    renderLabel = (childId, label, help) => (
        <label htmlFor={ childId } className="FormField-label">
            { label }
            { this.renderRequired() }
            { this.renderHelp(help, childId) }
        </label>
    );

    render() {
        const {
            className,
            errorMessage,
            help,
            id,
            label,
            note,
            labelAppendix
        } = this.props;

        const child = Children.only(this.getChildOrSingleChild());
        const childId = `${child.props.id || this.componentId}`;
        const containerClassName = cx(
            {
                'form-group': true,
                'FormField-group-has-error': errorMessage
            },
            className
        );

        return (
            <div id={ id } className={ containerClassName }>
                { labelAppendix
                    ? <div className="FormField-labelWrapper" >
                        { this.renderLabel(childId, label, help) }
                        <div className="FormField-labelAppendix" >
                            { labelAppendix }
                        </div>
                    </div>
                    : this.renderLabel(childId, label, help)
                }
                { React.cloneElement(child, {
                    id: childId,
                    className: cx(
                        'FormField-form-control',
                        child.props.className
                    )
                }) }
                <span className="FormField-note">{ note }</span>
                { errorMessage
                    ? <span className="FormField-errorMessage">
                        { errorMessage }
                    </span>
                    : null }
            </div>
        );
    }
}

export default FormField;