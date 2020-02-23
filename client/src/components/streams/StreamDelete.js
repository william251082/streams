import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
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
                title="Delete Stream"
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

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
