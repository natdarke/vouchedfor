import React from 'react';
import '../css/IncomeAndSpend.css';

const IncomeAndSpend = (props) => {
  return (
    <section className="s income-and-spend">
      <header className="c income-and-spend">
        <h1>Your Income & Spend</h1>
      </header>
      <div className="c income-and-spend user">
        <form>
          {props.children}
        </form>
      </div>
    </section>
  );
}

export default IncomeAndSpend;
