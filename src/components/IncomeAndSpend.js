import React, { Component } from 'react';
import '../css/IncomeAndSpend.css';
import FieldSet from './FieldSet';

class IncomeAndSpend extends Component {

  constructor(){
    super();
    this.state = {
      userData: {
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
        ]
      }
    }
  }
  render() {
    return (
      <section className="s income-and-spend">
        <header className="c income-and-spend">
          <h1>Your Income & Spend</h1>
        </header>
        <div className="c income-and-spend user">
          <form>
            <div>
              <h2>Annual income</h2>
              {this.state.userData.incomes.map(
                  item => <FieldSet {...item}/>
              )}
            </div>
            <div>
              <h2>Monthly spending</h2>
              {this.state.userData.expenditures.map(
                  item => <FieldSet {...item}/>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default IncomeAndSpend;
