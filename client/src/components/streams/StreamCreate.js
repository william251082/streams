import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from "../../actions";

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // make renderInput an arrow function so renderError can be used
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input } autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    // // call back function that will passed to component should be bind, make this an arrow function
    // onSubmit(formValues) {
    //     this.props.createStream(formValues);
    // }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />

                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors;
};

// // this works too
// export default connect()(reduxForm({
//         form: 'streamCreate',
//         validate
//     })(StreamCreate)
// );

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
}) (StreamCreate);

export default connect(null, { createStream })(formWrapped);
