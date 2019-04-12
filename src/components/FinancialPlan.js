import React, { Component } from 'react';
import '../css/FinancialPlan.css';
import IncomeAndSpend from './IncomeAndSpend.js';
import SpendLess from './SpendLess.js';

class FinancialPlan extends Component {

  constructor(){
    super();
    this.state = {
        incomes: [
          {
            amount: 45300,
            from_age: 30,
            to_age: 67,
            frequency: 'annual',
            name: 'Annual salary'
          }
        ],
        expenditures: [
          {
            amount: 1199,
            from_age: 30,
            to_age: 65,
            frequency: 'monthly',
            name: 'Mortgage'
          },
          {
            amount: 1199,
            from_age: 30,
            to_age: 65,
            frequency: 'monthly',
            name: 'Bills'
          },
          {
            amount: 1199,
            from_age: 30,
            to_age: 65,
            frequency: 'monthly',
            name: 'General spending'
          }
        ],
        income: 45300,
        mortgage : 1199,
        bills: 1199,
        general: 1199,
        saving: 0
    }
  }
  makeChangeHandler = key => event => {
    this.setState({
      [key] : event.target.value,
      saving : this.state.incomes[0].amount - this.state.mortgage - this.state.bills - this.state.general
    });
  }
  render() {
    return (
      <section className="s financial-plan">
        <header className="c financial-plan">
          <h1>Your Financial Plan</h1>
        </header>
        <IncomeAndSpend {...this.state}/>
        <SpendLess {...this.state} makeChangeHandler={this.makeChangeHandler}/>
      </section>
    );
  }
}

export default FinancialPlan;
