import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({ input }) {
        return (
            <input {...input } />
        );
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }

    // without destructuring
    // renderInput(formProps) {
    //     return (
    //         <input {...formProps.input} />
    //     );
    // }

    // renderInput(formProps) {
    //     console.log(formProps)
    //     return (
    //         <input
    //             onChange={formProps.input.onChange}
    //             value={formProps.input.value}
    //         />
    //     );
    // }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
