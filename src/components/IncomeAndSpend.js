import React from 'react';
import '../css/IncomeAndSpend.css';
import FieldSet from './FieldSet';


function  IncomeAndSpend(props) {
  return (
    <section className="s income-and-spend">
      <header className="c income-and-spend">
        <h1>Your Income & Spend</h1>
      </header>
      <div className="c income-and-spend user">
        <form>
        <div>
            <h2>Annual</h2>
            {props.incomes.map(
                (income, index) => <FieldSet key={index} {...income} onChangeHandler={props.updateState('incomes')}/>
            )}
          </div>
          <div>
            <h2>Monthly spending</h2>
            {props.expenditures.map(
                (expenditure, index) => <FieldSet key={index} {...expenditure} onChangeHandler={props.updateState('expenditures')}/>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default IncomeAndSpend;
