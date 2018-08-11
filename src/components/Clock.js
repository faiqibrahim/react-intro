import React from 'react';
import {connect} from 'react-redux';
import {UPDATE_TIME} from './../store/clock/clock-types';

const clock = (props) => <div>{props.time}</div>;

const mapStateToProps = (state) => {
    return {
        time: state.timeRedux
    };
};

export default connect(mapStateToProps)(clock);