import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, View, Platform } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText, ButtonGroup } from '@/components/ui/button';

export default function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Heading>Simple Counter</Heading>
        <Text>Count: {count}{Platform.OS == "android" && ' '}</Text>
        <ButtonGroup>
          <Button size="md" variant="solid" action="primary" onPress={() => setCount(count + 1)}>
            <ButtonText>Increase</ButtonText>
          </Button>
          <Button size="md" variant="solid" action="primary" onPress={() => setCount(count - 1)}>
            <ButtonText>Decrease</ButtonText>
          </Button>
        </ButtonGroup>
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
