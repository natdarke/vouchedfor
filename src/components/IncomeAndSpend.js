import React, { Component } from 'react';
import '../css/IncomeAndSpend.css';
import FieldSet from './FieldSet';

class IncomeAndSpend extends Component {
  render() {
    return (
      <section className="s income-and-spend">
        <header className="c income-and-spend">
          <h1>Your Income & Spend</h1>
        </header>
        <div className="c income-and-spend user">
          <form>
            <div>
              <h2>Monthly spending</h2>
              {this.props.root.state.expenditures.map(
                  (item, index) => <FieldSet {...item} key={index} onChangeHandler={this.props.root.setExpenditures}/>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default IncomeAndSpend;
