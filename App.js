import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ManageExpenseScreen from './screens/ManageExpenseScreen'
import RecentExpensesScreen from './screens/RecentExpensesScreen'
import AllExpensesScreen from './screens/AllExpensesScreen'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTab.Navigator>
    <BottomTab.Screen name="RecentExpenses" component={RecentExpensesScreen} />
    <BottomTab.Screen name="AllExpenses" component={AllExpensesScreen} />
  </BottomTab.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ExpensesOverview'>
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
