import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>Count: {count}{Platform.OS == "android" && ' '}</Text>
        <Button title="Increase Count" onPress={() => setCount(count + 1)}/>
        <Button title="Decrease Count" onPress={() => setCount(count - 1)}/>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
