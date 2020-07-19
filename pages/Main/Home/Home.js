import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import React, { useState } from "react";
import { getCurrencies } from "../../../APIs";
import { CurrencyList } from "./CurrencyList";
export const HomeScreen = () => {
  const [currencies, setCurrencies] = useState({});
  const [isCurrencyListVisible, setIsCurrencyListVisible] = useState(false);
  const [selectedCurr, setSelectedCurr] = useState([0]);
  const [fromCurrValue, setfromCurrValue] = useState(0);

  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD");

  const handleClick = (curr) => {
    setSelectedCurr(curr);
    setIsCurrencyListVisible(false);
  };

  const handleChangeCurr = (value) => {
    setfromCurrValue(value);
  };
  const visibleCurrList = (value) => {
    setIsCurrencyListVisible(true);
    getCurrencies().then((res) => {
      setCurrencies(res.data);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.currencyContainer}>
        <View style={styles.currency}>
          <Text>USD</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleChangeCurr}
          value={`${fromCurrValue}`}
        />
      </View>
      <View style={styles.currencyContainer}>
        <TouchableOpacity style={styles.currency} onPress={visibleCurrList}>
          <Text>{selectedCurr[0] ? selectedCurr[0] : "USD"}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          editable={false}
          value={`${
            selectedCurr[1] ? fromCurrValue * selectedCurr[1] : fromCurrValue
          }`}
        />
      </View>
      <Text style={{ color: "white" }}>
        1 USD =
        {selectedCurr[1] ? selectedCurr[1] + " " + selectedCurr[0] : "1 USD"} as
        of {date}
      </Text>
      {isCurrencyListVisible && (
        <CurrencyList
          handleClick={handleClick}
          selectedCurr={selectedCurr}
          currencies={currencies}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d5c6c",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "50%",
    backgroundColor: "white",
    padding: 10,
  },
  currencyContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    marginVertical: 10,
  },
  currency: {
    backgroundColor: "white",
    borderRightColor: "black",
    borderRightWidth: 1,
    justifyContent: "center",
    padding: 10,
    width: 50,
  },
});
