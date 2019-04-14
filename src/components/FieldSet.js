import React from 'react';

function FieldSet(props) {
    return (
        <fieldset>
            <legend>{props.name}</legend>
            <label className="amount">{props.name} <span>Amount</span><input type="text" value={props.amount||''} onChange={props.onChangeHandler}/></label>
            <label className="from">From Age<input type="text" value={props.from_age}  onChange={onChangeAge}/></label>
            <label className="to">To Age<input type="text" value={props.to_age} onChange={onChangeAge}/></label>
      </fieldset>
    )
}

function onChangeAge(){
    return true;
}

export default FieldSet;