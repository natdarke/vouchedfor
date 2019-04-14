import React from 'react';
import '../css/SpendLess.css';
import Range from './Range.js';

function SpendLess(props) {
  return (
    <section className="s spend-less">
      <header className="c spend-less">
        <h1>Spend Less</h1>
      </header>
      <div className="c spend-less intro text">
        <p>Try reducing your monthly spend to see how your forecast could improve</p>
      </div>
      <div className="c spend-less user">
        <form>
          {props.expenditures.map(
                (expenditure, index) => <Range key={index} {...expenditure} min='0' max='1500' 
                changeHandler={props.updateState('expenditures')} />
            )} 
          <output>This means you're saving <span>£{props.saving}</span> per month</output>
        </form>
      </div>
      <div className="c spend-less link">
        <a href="http://www.google.com?q=find+ways+to+save" target="_blank" rel="noopener noreferrer">Find ways to save</a>
      </div>
      <div className="c spend-less feedback">
        <span className="question">Was this helpful?</span>
        <a href="/" className="answer yes"><span>Yes</span></a>
        <a href="/" className="answer no"><span>No</span></a>
      </div>
    </section>
  );
}

export default SpendLess;
