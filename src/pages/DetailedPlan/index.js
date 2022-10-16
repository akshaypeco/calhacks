import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";
import DetailedPlanCard from "../../components/DetailedPlanCard";
import Navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";

const DetailedPlan = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.mapContainer}>
        <MapView
          paddingAdjustmentBehavior="automatic"
          showsUserLocation={true}
          style={styles.map}
          region={{
            latitude: 37.77439,
            longitude: -122.4862,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
        />
      </View>
      <View>
        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 18 }}>
          <Text style={{ fontWeight: "bold" }}>6 hour</Text> itinerary
        </Text>
        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 16.5 }}>
          San Francisco
        </Text>
      </View>
      <View>
        <DetailedPlanCard duration={3} num={1} loc={"Golden Gate Park"} />
        <View
          style={{
            backgroundColor: "black",
            marginLeft: 40,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginVertical: 6,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "black",
            marginLeft: 40,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginVertical: 6,
          }}
        ></View>
        <DetailedPlanCard duration={1} num={2} loc={"Lands End"} />
        <View
          style={{
            backgroundColor: "black",
            marginLeft: 40,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginVertical: 6,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "black",
            marginLeft: 40,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginVertical: 6,
          }}
        ></View>
        <DetailedPlanCard duration={2} num={3} loc={"Presidio"} />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "black",
          borderRadius: 5,
          padding: 7,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: "white", fontSize: 15 }}>Go Back</Text>
      </TouchableOpacity>
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
