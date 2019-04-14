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
              value={this.props.root.state.expenditures[0].amount} min='0' max='1500' 
              changeHandler={this.props.root.setExpenditures} />
            <Range name='bills' label='Bills'
              value={this.props.root.state.expenditures[1].amount} min='0' max='1500' 
              changeHandler={this.props.root.setExpenditures} />
            <Range name='general spending' label='General Spending'
              value={this.props.root.state.expenditures[2].amount} min='0' max='1500' 
              changeHandler={this.props.root.setExpenditures} />
            <output>This means you're saving <span>£{this.props.root.state.saving}</span> per month</output>
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
}

export default SpendLess;
