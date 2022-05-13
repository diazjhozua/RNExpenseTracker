import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

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
    date: new Date('2022-01-19')
  },
  {
    id: 'e3',
    description: 'Coke',
    amount: 60.21,
    date: new Date('2021-09-1')
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
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})