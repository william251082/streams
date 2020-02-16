import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input } />

            </div>
        );
    }

    onSubmit(formValues) {
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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
        // only ran if user did not enter a title
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        // only ran if user did not enter a description
        errors.description = 'You must enter a description'
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
