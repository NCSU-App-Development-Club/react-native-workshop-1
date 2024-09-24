import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, View, Platform } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText, ButtonGroup } from '@/components/ui/button';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { InfoIcon } from '@/components/ui/icon';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [tooLow, setTooLow] = useState<boolean>(false);
  const [tooHigh, setTooHigh] = useState<boolean>(false);

  const increment = () => {
    setTooLow(false);
    if (count < 20) {
      setCount(count + 1);
    } else {
      setTooHigh(true);
    }
  }

  const decrement = () => {
    setTooHigh(false);
    if (count > 0) {
      setCount(count - 1);
    } else {
      setTooLow(true);
    }
  }

  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Heading size="3xl">Simple Counter</Heading>
        <Text size="5xl" style={styles.number}>{" "}{count}{" "}</Text>
        <ButtonGroup>
          <Button size="md" variant="solid" action="primary" onPress={decrement}>
            <ButtonText>Decrement</ButtonText>
          </Button>
          <Button size="md" variant="solid" action="primary" onPress={increment}>
            <ButtonText>Increment</ButtonText>
          </Button>
        </ButtonGroup>
        {
          (tooHigh || tooLow) &&
          <Alert action="error" style={styles.alert}>
            <AlertIcon as={InfoIcon}/>
            <AlertText>
              { tooHigh && "Counter only goes up to 20  "}
              { tooLow && "Counter can't go below 0  "}
            </AlertText>
          </Alert>
        }
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 16,
    borderColor: '#777',
    height: Platform.OS == "android" ? Dimensions.get('window').height : Dimensions.get('window').height - Constants.statusBarHeight,
    width: Dimensions.get('window').width
  },
  number: {
    margin: 12
  },
  alert: {
    position: "absolute",
    top: "60%",
    margin: 12,
    height: 40,
    borderRadius: 8,
    maxWidth: "70%"
  }
});
