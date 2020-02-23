import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {fetchStream} from "../../actions";
import {connect} from "react-redux";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </>
        );
    }

    renderContent() {
        if (!this.props.streams) {
            return 'Are you sure you want to delete the stream?'
        }

        return `Are you sure you want to delete the stream with title: ${this.props.streams.title}`;
    }

    render() {
        return (
            <Modal
                title={this.props.streams.title}
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {streams: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchStream})(StreamDelete);
