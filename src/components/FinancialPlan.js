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
        saving: this.calculateSaving()
    }
  }

  setExpenditures = event => {
    const { value, name } = event.target;
    this.setState((state) => {
      let { expenditures } = {...state};
      expenditures = expenditures.map(
        (item) => {
          if(item.name.toUpperCase() === name.toUpperCase()) {
            item.amount = value;
          }
          return item;
        }
      )
      return {
        expenditures
      }
    });
    this.setState({
      saving : this.calculateSaving()
    })
  }
  calculateSaving(){
    return 0;
  }

  render() {
    return (
      <section className="s financial-plan">
        <header className="c financial-plan">
          <h1>Your Financial Plan</h1>
        </header>
        <IncomeAndSpend root={this}/>
        <SpendLess root={this}/>
      </section>
    );
  }
}

export default FinancialPlan;
