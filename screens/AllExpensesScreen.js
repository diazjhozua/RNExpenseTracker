import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <View style={styles.container}>

      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText="No expenses registered found" />
    </View>
  )
}

export default AllExpensesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})