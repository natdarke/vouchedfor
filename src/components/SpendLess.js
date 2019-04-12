import React, { Component } from 'react';
import '../css/SpendLess.css';
import Range from './Range.js';

class SpendLess extends Component {
  constructor(){
    super();
    this.state = {
      income: 10000,
      mortgage : 200,
      bills: 400,
      general: 300,
      saving: 0
    }
  }

  makeChangeHandler = key => event => {
    this.setState({
      [key] : event.target.value,
      saving : this.state.income - this.state.mortgage - this.state.bills - this.state.general
    });
  }

  render() {
    return (
      <section className="s spend-less">
        <header className="c spend-less">
          <h1>Spend Less</h1>
        </header>
        <div className="c spend-less intro text">
          <p>Try reducing your monthly spend to see how your forecast could improve</p>
        </div>
        <div className="c spend-less form">
          <form>
            <Range name='mortgage' label='Mortgage'
              value={this.state.mortgage} min='100' max='300' 
              changeHandler={this.makeChangeHandler('mortgage')} />
            <Range name='bills' label='Bills'
              value={this.state.bills} min='200' max='500' 
              changeHandler={this.makeChangeHandler('bills')} />
            <Range name='general' label='General Spending'
              value={this.state.general} min='0' max='1000' 
              changeHandler={this.makeChangeHandler('general')} />
            <output>This means you're saving <span>£{this.state.saving}</span> per month</output>
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
