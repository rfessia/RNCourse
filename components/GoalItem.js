import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ title, onRemoveGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onRemoveGoal.bind(this, title)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.textGoalItem}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#FFE3EB",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  textGoalItem: {
    color: "#4E5E78",
    padding: 16,
    fontSize: 20,
  },
  textGoalItemPressed: {
    color: "#4E5E78",
    padding: 16,
    fontSize: 20,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#BEA5A8",
    borderRadius: 5,
    color: "#BEA5A8",
  },
});
