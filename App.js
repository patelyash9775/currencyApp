import React, {useState} from 'react';

import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.01346,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000004
};

const App = () => {

  const [inputValue,setInputValue] = useState(0);

  const [resultValue,setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: "#EA7773",
        textColor: "#000000"
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];

    setResultValue(result.toFixed(2));
  };

  return(

    <>
    <ScrollView backgroundColor="#E5D68A"
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}> 
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Value in Rs."
          placeholderTextColor="#c1c1c1"
          value={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          ></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
            onPress={() => buttonPressed(currency)}
            key={currency}
            style={styles.converterButton}
            >
              <Text style={styles.convertButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  );

};

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E5D68A"
  },

  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "#758283"
  },

  resultValue: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold"
  },

  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    backgroundColor: "#758283"
  },

  input: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF"
  },

  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop:10
  },
  
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "30.5%",
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#120E43"
  },

  convertButtonText: {
    color: "#FFF",
    fontSize: 20
  }
});