import React, { Component } from 'react';
import '../css/FinancialPlan.css';
import IncomeAndSpend from './IncomeAndSpend.js';
import SpendLess from './SpendLess.js';

class FinancialPlan extends Component {
  render() {
    return (
      <section className="s financial-plan">
        <header className="c financial-plan">
          <h1>Your Financial Plan</h1>
        </header>
        <IncomeAndSpend></IncomeAndSpend>
        <SpendLess></SpendLess>
      </section>
    );
  }
}

export default FinancialPlan;
