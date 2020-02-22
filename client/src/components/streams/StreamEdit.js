import React from 'react';
import {connect} from "react-redux";

const StreamEdit = props => {
    console.log('props', props)
    return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)
    console.log('state', state)
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps)(StreamEdit);
