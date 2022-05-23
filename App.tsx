import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
export default function App() {
  const Name:string = 'me';
  const Age:number = 456;
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Je m'appelle {Name} et j'ai {Age} ans </Text>      
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});