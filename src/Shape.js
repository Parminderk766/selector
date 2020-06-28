import React from 'react';

const Shape = (props) => {
    const shape = props.shape;
    const selectedShape = props.selectedShape;
    return (
        <div className={shape} onClick = {() => 
            selectedShape(shape)} ></div>
    )
}

export default Shape;