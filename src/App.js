import React, {Component} from 'react';
import './App.css';
import Clock from './components/Clock';
import {connect} from 'react-redux';
import {updateTime} from './store/clock/clock-actions';

class App extends Component {

    componentDidMount() {
        this.props.updateTime();
    }

    // updateTime = () => {
    //     this.props.updateTime();
    //
    //     axios.get('http://localhost:3001/time',
    //         {headers : {'Authorization' : 'TOKEN'}})
    //         .then((response) => {
    //             console.log('response', response);
    //             let {data} = response;
    //             this.props.updateTime(data.time);
    //         })
    //         .catch(err => {
    //             let {response} = err;
    //             console.error(err, response);
    //         });
    // };

    render() {
        return (
            <div className="App">
                <Clock/>
                <button onClick={this.props.updateTime}>Update Time</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTime: (newTime) => dispatch(updateTime())
    };
};

export default connect(null, mapDispatchToProps)(App);
