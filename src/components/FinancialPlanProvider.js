import React, { Component } from 'react';
import { FinancialPlanContext } from './Contexts';

class FinancialPlanProvider extends Component {
    constructor() {
        super();
        this.state = {};
        if (
            typeof(Storage) !== "undefined"
            && typeof(sessionStorage.financialPlanState) !== "undefined"
        ) {
            this.state = JSON.parse(sessionStorage.financialPlanState);
            this.state.storedInLocal = true;
        }
        this.state.saving = 0;
        this.state.updateState = stateKey => event => {
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
                    // change to use DOM onBeforeUnload event, not setState,
                }
            );
        };
    }
    componentDidMount(){
        if (!this.state.storedInLocal) {
            this.setStateFromDB('expenditures');
            this.setStateFromDB('incomes');
        }
    }
    
    async setStateFromDB(path){
        const response = await fetch(
            `http://localhost:3001/${path}`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin':'*'
                }
            }
        );
        const data = await response.json();
        this.setState({
            [path] : data,
            ['initial' + path] : data.map(a => ({...a}))
        });
        return data;
    }

    calculateSaving(){
        const initialExp = addExpenditures(this.state.initialexpenditures);
        const exp = addExpenditures(this.state.expenditures);
        return initialExp - exp;
    }

    render() {
        return (
            <FinancialPlanContext.Provider value={this.state}>
                {this.props.children}
            </FinancialPlanContext.Provider>
        )
    }
}
function addExpenditures(arr) {
    return arr.map(item => parseInt(item.amount)).reduce((total, current) => total + current);
}

export default FinancialPlanProvider;