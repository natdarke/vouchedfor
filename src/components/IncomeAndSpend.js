import React, { Component } from 'react';
import '../css/IncomeAndSpend.css';

class IncomeAndSpend extends Component {
  render() {
    return (
      <section className="s income-and-spend">
        <header className="c income-and-spend">
          <h1>Your Income & Spend</h1>
        </header>
        <div className="c income-and-spend form">
          <form>
            <div>
              <h2>Annual income</h2>
              <fieldset>
                <legend>Annual Salary</legend>
                <label className="amount">Annual Salary <span>Amount</span><input type="text"/></label>
                <label className="from">From Age<input type="text"/></label>
                <label className="to">To Age<input type="text"/></label>
              </fieldset>
            </div>
            <div>
              <h2>Monthly spending</h2>
              <fieldset>
                <legend>Mortgage</legend>
                <label className="amount">Mortgage <span>Amount</span><input type="text"/></label>
                <label className="from">From Age<input type="text"/></label>
                <label className="to">To Age<input type="text"/></label>
              </fieldset>
              <fieldset>
                <legend>Bills</legend>
                <label className="amount">Bills Amount<input type="text"/></label>
                <label className="from">From Age<input type="text"/></label>
                <label className="to">To Age<input type="text"/></label>
              </fieldset>
              <fieldset>
                <legend>General spending</legend>
                <label className="amount">General spending <span>Amount</span><input type="text"/></label>
                <label className="from">From Age<input type="text"/></label>
                <label className="to">To Age<input type="text"/></label>
              </fieldset>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default IncomeAndSpend;
