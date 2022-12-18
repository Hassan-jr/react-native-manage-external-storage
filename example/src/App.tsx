import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ManageExternalStorage  from 'react-native-manage-external-storage';

export default function App() {
   const [result, setResult] = React.useState<boolean>(false);

  // function start 

  React.useEffect(() => {
   async function fun() {
    await ManageExternalStorage.checkAndGrantPermission(
           err => { 
             setResult(false)
          },
          res => {
           setResult(true)
          },
        )
   }
  
   fun()
     
  }, []);

   console.log("From outside", result);
  
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
