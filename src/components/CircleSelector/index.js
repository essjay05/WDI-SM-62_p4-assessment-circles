import React from 'react';
import './CircleSelector.css';
const CircleSelector = props => React.createElement('div', null, props.CircleSelector)


export default ({ }) => {
   
    return (
        <div className="CircleSelector">
            <button className="CircleSelector">Circle 1 Selected</button>
            {/* <div className={<conditional selected> ? 'Circle 1 Selected' : ''}/></conditional> */}
            {/* <button ClassName="CircleSelector">Select Circle 1</button> */}
            {/* <button className="CircleSelector">Circle 2 Selected</button> */}
            <button ClassName="CircleSelector">Select Circle 2</button>
            {/* <button className="CircleSelector">Circle 3 Selected</button> */}
            <button ClassName="CircleSelector">Select Circle 3</button>
            {/* <button className="CircleSelector">Circle 4 Selected</button> */}
            <button ClassName="CircleSelector">Select Circle 4</button>
        </div>
    )
}