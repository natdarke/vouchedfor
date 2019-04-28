import React, { Component } from 'react';
import '../css/FinancialPlan.css';
import IncomeAndSpend from './IncomeAndSpend';
import SpendLess from './SpendLess';
import FinancialPlanProvider from './FinancialPlanProvider';

class FinancialPlan extends Component {

  render() {
    return (
      <FinancialPlanProvider>
        <section className="s financial-plan">
          <header className="c financial-plan">
            <h1>Your Financial Plan</h1>
          </header>
          <IncomeAndSpend/>
          <SpendLess/>
        </section>
      </FinancialPlanProvider>
    );
  }
}

export default FinancialPlan;
