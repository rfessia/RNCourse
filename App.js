import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal === "") return;

    const newGoal = enteredGoal;
    setCourseGoals((currentGoals) => [...currentGoals, newGoal]);
    closeModalHandler();
  };

  const removeGoalHandler = (title) => {
    console.log(title);
    setCourseGoals((currentGoals) =>
      currentGoals.filter((currentGoal) => currentGoal !== title)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#4E5E78"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          modalIsVisible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={closeModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem title={item} onRemoveGoal={removeGoalHandler} />
            )}
            keyExtractor={(item) => item}
            scrollEnabled={true}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    width: "100%",
  },
  goalsContainer: {
    flex: 5,
    marginBottom: 24,
    // backgroundColor: "blue",
  },
});
