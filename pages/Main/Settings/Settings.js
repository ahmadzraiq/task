import { AuthContext } from "../../../context";
import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";

export const SettingsScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => signOut()} />
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
});
