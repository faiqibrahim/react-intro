import React from 'react';

class Stateful extends React.Component {

    rowCount = 0;

    state = {
        name: 'Ibraheem',
        age: 26,
        address: {
            street: '10',
            block: 'A',
            city: 'Lahore'
        },
        plots : [1,2,3,4,5]
    };

    handleChange = (e) => {
        let {value} = e.target;

        let address = {...this.state.address}; // Object.assign(this.state.address)
        address.street = '20';

        let plots = [...this.state.plots];
        plots.push(6);

        this.setState({name: value, address, plots}, () => {
            console.log('state', this.state);
        });
    };

    render() {
        let {props} = this;

        return (
            <div>
                <p>{this.state.name}</p>
                <hr/>
                <input value={this.state.name} type={'text'} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Stateful;