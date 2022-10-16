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

const DetailedPlanCard = ({ opacity, duration, upvotes, num, loc }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.root, { opacity: opacity }]}
      onPress={() => {
        navigation.navigate("DetailedPlan");
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 19, paddingLeft: 10 }}>{num}.</Text>
          <Text style={styles.overview} numberOfLines={2}>
            {loc}
          </Text>
          <Text style={styles.time}>{duration} hours</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailedPlanCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F8F8F8",
    margin: 20,
    borderRadius: 5,
    padding: 10,
    paddingVertical: 20,
  },
  time: {
    fontSize: 19,
    fontWeight: "bold",
    marginRight: 10,
  },
  overview: {
    fontSize: 20,
    width: Dimensions.get("screen").width * 0.5,
  },
  upvotes: {
    fontSize: 17,
  },
});
