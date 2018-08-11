import React from 'react';

import './BoldHeading.css';
//
// class BoldHeading extends React.Component {
//
//     render() {
//         let {name} = this.props;
//         return (
//             <p style={{fontWeight: 'bold', fontSize: '36px'}}>
//                 {name + ' ' + this.props.text}
//             </p>
//         );
//     }
// }

const boldHeading = (props) => {
    return (
        <p style={{fontWeight: 'bold', fontSize: '36px'}}>
            {props.name + ' ' + props.text}
        </p>
    );
};

export default boldHeading;