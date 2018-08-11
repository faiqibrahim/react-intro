import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import BoldKeyValue from './components/BoldKeyValue/BoldKeyValue';
import {connect} from 'react-redux';
import {UPDATE_TIME} from "./store/clock/clock-types";

// GET -> Get User data => User_name = 'Usman'

// Response <- JSON

/*
    {
        name : 'Usman',
        age : 26,
        address : 'Lahore'
    }
*/

const arrayData = [{name: 'Usman'}, {name: 'Khadija'}, {name: 'Maham'}];

let jsx = arrayData.map((data, index) => {
    return <BoldKeyValue key={data.id} heading='Name' value={data.name}/>
});

class App extends Component {

    componentDidMount() {
        setInterval(() => {
            this.props.updateTime();
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTime: () => dispatch({
            type: UPDATE_TIME,
            payload: {newTime: new Date().toLocaleTimeString()}
        })
    };
};

export default connect(null, mapDispatchToProps)(App);
