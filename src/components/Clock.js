import React from 'react';
import {connect} from 'react-redux';

const clock = (props) => <div>{props.time}</div>;

const mapStateToProps = (state) => {
    return {
        time: state.timeRedux
    };
};

export default connect(mapStateToProps)(clock);