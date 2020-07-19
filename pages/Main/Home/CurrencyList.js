import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export const CurrencyList = ({ currencies, selectedCurr, handleClick }) => {
  return (
    <View style={styles.currencyListContainer}>
      <View style={styles.listContainer}>
        <ScrollView>
          {currencies &&
            Object.entries(currencies).map((curr, index) => (
              <TouchableOpacity
                key={index}
                style={styles.currencyListItme(selectedCurr[0], curr[0])}
                onPress={() => handleClick(curr)}
              >
                <Text>{curr[0]}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: "75%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  currencyListItme: (a, b) => {
    return {
      justifyContent: "center",
      alignItems: "center",
      height: 44,
      borderColor: "black",
      borderWidth: 1,
      borderTopWidth: 0,
      backgroundColor: a === b ? "rgb(113, 172, 112)" : "white",
    };
  },
  currencyListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
