import React from 'react';

const component = (props) => {
    console.log('props', props);
    return (
        <div>
            <span style={{fontWeight: 'bold', marginRight: '24px'}}>
                {props.children && props.children}
            </span>
        </div>
    );
};

export default component;