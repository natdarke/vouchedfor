import React from 'react';
import FieldSet from './FieldSet';
import { FinancialPlanContext } from './Contexts';
import '../css/IncomeAndSpend.css';

const IncomeAndSpend = (props) => {
  return (
    <FinancialPlanContext.Consumer>
    { 
      ( { expenditures = [], incomes, updateState } ) => 
        <section className="s income-and-spend">
          <header className="c income-and-spend">
            <h1>Your Income & Spend</h1>
          </header>
          <div className="c income-and-spend user">
            <form>
              <div>
                <h2>Annual</h2>
                {incomes && incomes.map(
                    (income, index) => <FieldSet key={index} {...income} onChangeHandler={updateState('incomes')}/>
                )}
              </div>
              <div>
                <h2>Monthly spending</h2>
                {expenditures && expenditures.map(
                    (expenditure, index) => <FieldSet key={index} {...expenditure} onChangeHandler={updateState('expenditures')}/>
                )}
              </div>
            </form>
          </div>
        </section>
    }
    </FinancialPlanContext.Consumer>
  );
}

export default IncomeAndSpend;
