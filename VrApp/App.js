import React from 'react';
import { StyleSheet, Text, View, WebView, TouchableWithoutFeedback } from 'react-native';
//import Orientation from 'react-native-orientation';

export default class App extends React.Component {
  //  componentWillMount() {
  //   // The getOrientation method is async. It happens sometimes that
  //   // you need the orientation at the moment the JS runtime starts running on device.
  //   // `getInitialOrientation` returns directly because its a constant set at the
  //   // beginning of the JS runtime.
 
  //   const initial = Orientation.getInitialOrientation();
  //   if (initial === 'PORTRAIT') {
  //     console.log(`portrait`);
  //   } else {
  //     console.log(`landscape`);
  //     // do something else
  //   }
  // }
  
  render() {
    return (
      <TouchableWithoutFeedback>
        <WebView
          source={{ uri: 'http://172.20.10.3:8080/' }}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
