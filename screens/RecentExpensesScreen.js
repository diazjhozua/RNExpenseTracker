import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpensesScreen = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod='Last 7 Days' />
    </View>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({})