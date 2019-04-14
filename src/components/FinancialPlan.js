import React, { Component } from 'react';
import '../css/FinancialPlan.css';
import IncomeAndSpend from './IncomeAndSpend.js';
import SpendLess from './SpendLess.js';

class FinancialPlan extends Component {

  constructor(){
    super();
    const initialState = {
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
    if (
      typeof(Storage) !== "undefined"
      && typeof(sessionStorage.financialPlanState) !== "undefined"
    ) {
      this.state = JSON.parse(sessionStorage.financialPlanState);
    }
    else {
      this.state = initialState;
    }
  }

  setExpenditures = event => {
    this.updateState('expenditures', event);
  }

  setIncomes = event => {
    this.updateState('incomes', event);
  }

  updateState = (stateKey, event) => {
    const { value: fieldValue, name: fieldName } = event.target;
    this.setState(
      (state) => {
        let stateValue = [...state[stateKey]];
        stateValue = stateValue.map(
          (item) => {
            const fieldSetName = fieldName.split('__')[0];
            const inputName = fieldName.split('__')[1];
            if(item.name.toUpperCase() === fieldSetName.toUpperCase()) {
              item[inputName] = fieldValue;
            }
            return item;
          }
        )
        return {
          [stateKey] : stateValue,
          saving : this.calculateSaving()
        }
      },
      () => {
        sessionStorage.setItem("financialPlanState", JSON.stringify(this.state));
        // change to use DOM onBeforeUnload event, not setState
      }
    );
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
        <IncomeAndSpend root={this} />
        <SpendLess root={this}/>
      </section>
    );
  }
}

export default FinancialPlan;
