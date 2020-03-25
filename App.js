import React, { useState } from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import Input from './Components/Input';
import TipButton from './Components/button';
import ResetButton from './Components/reset';

const App = () => {
  const [val, setVal] = useState('');
  const [conversion, setConversion] = useState('');
  const [show, setShow] = useState(false);

  const setValue = e => {
    setVal(e);
  }

  const convert = percent => {
    switch (percent) {
      case '10%':
        Keyboard.dismiss();
        setShow(true);
        return setConversion((val * .1).toFixed(1));
      case '15%':
        Keyboard.dismiss();
        setShow(true);
        return setConversion((val * .15).toFixed(1));
      case '20%':
        Keyboard.dismiss();
        setShow(true);
        return setConversion((val * .20).toFixed(1));
      case '25%':
        Keyboard.dismiss();
        setShow(true);
        return setConversion((val * .25).toFixed(1));
      default:
        return;
    }
  }

  const reset = () => {
    setVal('');
    setConversion('');
    setShow(false);
  }

  const finalPrice = (Number(conversion) + Number(val)).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <Text style={styles.instructions}>Input your Bill amount, click the tip % and viola!</Text>
      <Input val={val} setVal={setValue} />
      <View style={styles.buttonRow}>
        <TipButton title='10%' onPress={convert} />
        <TipButton title='15%' onPress={convert} />
        <TipButton title='20%' onPress={convert} />
        <TipButton title='25%' onPress={convert} />
      </View>
      {show ?
        <>
          <View style={styles.tipView}>
            <Text style={styles.valuesColor}>Leave a tip of: ${conversion}</Text>
          </View>
          <View>
            <Text style={styles.valuesColor}>Your bill total is: ${finalPrice}</Text>
          </View>
        </> : null
      }
      <ResetButton title='Reset' onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6497b1',
    height: '100%',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    width: 250,
    fontFamily: 'Savoye LET',
    color: '#f4f4f8',
    marginTop: '65%',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFEEAD',
    marginBottom: 5,
    width: '90%',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  tipView: {
    marginTop: 20,
  },
  valuesColor: {
    color: '#FFEEAD',
    marginBottom: 5,
  }
});

export default App;