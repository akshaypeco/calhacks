import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const PlanCard = ({ opacity, total_duration, upvotes, username, firstLoc }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.root, { opacity: opacity }]}
      onPress={() => {
        navigation.navigate("DetailedPlan");
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.time}>{total_duration}</Text>
          <Text style={styles.overview} numberOfLines={2}>
            Begins at {firstLoc}
          </Text>
        </View>
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather
            name="arrow-up-circle"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.upvotes}>{upvotes}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#2DB493",
    padding: 15,
    borderRadius: 2,
  },
  time: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  overview: {
    paddingTop: 6,
    fontSize: 17,
    width: Dimensions.get("screen").width * 0.6,
    color: "white",
  },
  upvotes: {
    color: "white",
    fontSize: 17,
  },
});
