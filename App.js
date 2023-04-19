import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/utils/store';
import AppContainer from './src/screens/AppContainer';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    )
  }
}
export default App;