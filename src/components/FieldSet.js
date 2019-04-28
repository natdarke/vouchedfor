import React from 'react';

function FieldSet(props) {
    return (
            <fieldset>
                <legend>{props.name}</legend>
                <label className="amount">{props.name} <span>Amount</span><input type="text" name={`${props.name}__amount`} value={props.amount||''} onChange={props.onChangeHandler}/></label>
                <label className="from">From Age<input type="text" value={props.from_age} name={`${props.name}__from_age`} onChange={props.onChangeHandler}/></label>
                <label className="to">To Age<input type="text" value={props.to_age} name={`${props.name}__to_age`} onChange={props.onChangeHandler}/></label>
            </fieldset>
    )
}

export default FieldSet;