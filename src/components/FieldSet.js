import React from 'react';

function FieldSet(props) {
    return (
        <fieldset>
            <legend>{props.name}</legend>
            <label className="amount">{props.name} <span>Amount</span><input type="text" value={props.amount}/></label>
            <label className="from">From Age<input type="text" value={props.from_age}/></label>
            <label className="to">To Age<input type="text" value={props.to_age}/></label>
      </fieldset>
    )
}

export default FieldSet;