import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import TodoList from './components/screens/TodoList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoDetails from './components/screens/TodoDetails.js';

const {Navigator, Screen} = createNativeStackNavigator()

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name='Ma to do list' component={TodoList} />
          <Screen name='Détail' component={TodoDetails} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
