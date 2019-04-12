import React, { Component } from 'react';
import '../css/SpendLess.css';
import Range from './Range.js';

class SpendLess extends Component {
  render() {
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
            <Range name='mortgage' label='Mortgage'
              value={this.props.mortgage} min='0' max='1500' 
              changeHandler={this.props.makeChangeHandler('mortgage')} />
            <Range name='bills' label='Bills'
              value={this.props.bills} min='0' max='1500' 
              changeHandler={this.props.makeChangeHandler('bills')} />
            <Range name='general' label='General Spending'
              value={this.props.general} min='0' max='1500' 
              changeHandler={this.props.makeChangeHandler('general')} />
            <output>This means you're saving <span>£{this.props.saving}</span> per month</output>
          </form>
        </div>
        <div className="c spend-less link">
          <a href="http://www.google.com?q=find+ways+to+save" target="_blank" rel="noopener noreferrer">Find ways to save</a>
        </div>
        <div className="c spend-less feedback">
          <span class="question">Was this helpful?</span>
          <a href="/" class="answer yes"><span>Yes</span></a>
          <a href="/" class="answer no"><span>No</span></a>
        </div>
      </section>
    );
  }
}

export default SpendLess;
