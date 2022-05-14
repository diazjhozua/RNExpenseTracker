import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDate } from '../utils/date'

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDate(today, 7);
    return (expense.date >= date7DaysAgo);
    // return (expense.date >= date7DaysAgo && expense.date <= today);
  })

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallbackText="No expenses registered for the last 7 days" />
    </View>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})