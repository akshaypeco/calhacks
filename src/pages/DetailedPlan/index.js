import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import PlanCard from "../../components/PlanCard";

const DetailedPlan = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.mapContainer}>
        <MapView
          paddingAdjustmentBehavior="automatic"
          showsUserLocation={true}
          style={styles.map}
        />
      </View>
      <View>
        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 18 }}>
          <Text style={{ fontWeight: "bold" }}>5 hour</Text> itinerary
        </Text>
        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 16.5 }}>
          San Francisco
        </Text>
      </View>
      <View style={styles.itineraryStepContainer}>
        <PlanCard />
      </View>
    </View>
  );
};

export default DetailedPlan;

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  map: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.3,
    borderRadius: 15,
  },
  itineraryStepContainer: {
    backgroundColor: "#F8F8F8",
    margin: 20,
    borderRadius: 5,
  },
});
