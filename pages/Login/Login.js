import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";

export const LogIn = ({ setLogin }) => {
  const [msgErorr, setMsgErorr] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };

  const handleLogin = () => {
    if (username != "admin" && password != "123456") {
      return Alert.alert("invalid username or password");
    }
    setLogin(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={handleUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={handlePassword}
        secureTextEntry
      />
      <Button title="LogIn" onPress={handleLogin} />
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
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
});
