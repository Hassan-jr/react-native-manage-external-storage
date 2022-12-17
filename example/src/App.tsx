import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import  manageExternalStorage  from 'react-native-manage-external-storage';

export default function App() {
  // const [result, setResult] = React.useState<string | undefined>();

  // function start 

  React.useEffect(() => {
    manageExternalStorage()
     
  }, []);

  // console.log(res);
  
  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
