import React from 'react';

const para = (text) => <p style={{color: 'red'}}>{text}</p>;

const test = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {para(props.body)}
            <hr />
            <h2>Second Heading</h2>
            {para(props.body)}
        </div>
    );
};

export default test;
