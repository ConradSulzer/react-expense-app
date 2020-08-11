import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense, removeExpense, editExpense } from './actions/expenses.actions';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters.actions';
import getVisibleExpenses from './selectors/expenses.selectors';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

store.dispatch(addExpense({description: 'water bill', amount: 150}));
store.dispatch(addExpense({description: 'gas bill', amount: 10, createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 1095}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))