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
            {props.root.state.incomes.map(
                (item, index) => <FieldSet {...item} key={index} onChangeHandler={props.root.setIncomes}/>
            )}
          </div>
          <div>
            <h2>Monthly spending</h2>
            {props.root.state.expenditures.map(
                (item, index) => <FieldSet {...item} key={index} onChangeHandler={props.root.setExpenditures}/>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default IncomeAndSpend;
