import React from 'react';
import NestedStateless from './NestedStateless';

const StatelessExample = (props) => {
    return (
        <div>
            Hey from Stateless and {props.thisGuy} and <NestedStateless thisGuy={props.thisGuy}/>
        </div>
    );
};

export default StatelessExample;