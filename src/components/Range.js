import React from 'react';

function Range(props) {
    return (
        <div className="range">
            <label htmlFor={`${props.name}__amount`}>{props.name}</label>
            <div>
                <span className="sliderValue" style={
                    sliderValueStyles(
                        props.amount,
                        props.min,
                        props.max,
                        1.6
                    )
                }>
                    £{props.amount}
                </span>
                <span>
                    <input type="range" min={props.min} max={props.max} id={`${props.name}__amount`} name={`${props.name}__amount`} value={props.amount} onChange={props.changeHandler}/>
                </span>
            </div>
        </div>
    )
}

function sliderValueStyles(currentValue, min = 0, max = 100, thumbWidth) {
    // works out the position of the slider value, so it is always above the 'thumb' indicator
    const currentPercent = (100 / (max - min)) * (currentValue - min);
    const adjustmentForThumb = (-Math.abs(currentPercent /100) + 1) * thumbWidth - (thumbWidth / 2);
    const sliderValueWidth = 5; // arbitrary width in rems. Enough room to fit a 4 digit number
    const adjustment = adjustmentForThumb - (sliderValueWidth / 2);
    return {
        position: 'absolute',
        textAlign: 'center',
        width: `${sliderValueWidth}rem`,
        left: `calc(${currentPercent}% + ${adjustment}rem)`,
        top: '-2rem'
    }
}

export default Range;