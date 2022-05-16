import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDate } from '../utils/date'
import { fetchExpenses } from '../utils/http'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import ErrorOverlay from '../components/UI/ErrorOverlay'

const RecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()


  const expensesCtx = useContext(ExpensesContext)


  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses)
      } catch (error) {
        setError('Cound not fetch expenses');
      }
      setIsFetching(false)
    }

    getExpenses();
  }, [])

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDate(today, 7);
    return (expense.date >= date7DaysAgo);
    // return (expense.date >= date7DaysAgo && expense.date <= today);
  })

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if (isFetching) {
    return <LoadingOverlay />
  }
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