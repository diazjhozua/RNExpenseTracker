import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 34.21,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of tshirts',
    amount: 22.21,
    date: new Date('2022-05-14')
  },
  {
    id: 'e3',
    description: 'Coke',
    amount: 60.21,
    date: new Date('2021-09-01')
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 14.99,
    date: new Date('2022-02-19')
  },
  {
    id: 'e5',
    description: 'Laptop',
    amount: 300.99,
    date: new Date('2022-03-18')
  }, {
    id: 'e6',
    description: 'A pair of tshirts',
    amount: 22.21,
    date: new Date('2022-01-19')
  },
  {
    id: 'e7',
    description: 'Coke',
    amount: 60.21,
    date: new Date('2021-09-01')
  },
  {
    id: 'e8',
    description: 'Book',
    amount: 14.99,
    date: new Date('2022-02-19')
  },
  {
    id: 'e9',
    description: 'Laptop',
    amount: 300.99,
    date: new Date('2022-03-18')
  },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id == action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem
      console.log(updatedExpenses)
      return updatedExpenses;
    case 'DELETE':
      console.log(action.payload);
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData })
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider