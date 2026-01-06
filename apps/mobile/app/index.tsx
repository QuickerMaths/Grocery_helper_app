import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/* This is the welcome message you requested */}
      <Text style={styles.welcomeText}>Welcome to the Grocery helper app</Text>

      <StatusBar style="auto" />
    </View>
  )
}

// Basic styling to center the text and make it look good
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    alignItems: 'center', // Horizontally center
    justifyContent: 'center', // Vertically center
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
})
