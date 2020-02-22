import React from 'react';
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        console.log('propsCdm', this.props)
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit  = formValues => {
        console.log('formValues', formValues)
    }

    render() {
        console.log('props', this.props)
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
