import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, modalIsVisible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalChangeInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalChangeInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={onCancel} color="#F05E81" />
          <Button title="Add Goal" onPress={addGoalHandler} color="#4E5E78" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFB3BF",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#C57E8A",
    backgroundColor: "#FFE3EB",
    color: "#4E5E78",
    width: "100%",
    marginBottom: 10,
    padding: 16,
    borderRadius: 6,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "blue",
    width: "100%",
    paddingHorizontal: 10,
    // marginRight: 10,
  },
});
