import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Drafts from "../../components/Drafts";
import { AntDesign } from "@expo/vector-icons";
import SavedPlaces from "../../components/SavedPlaces";

const PlanScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Your Plans</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.subHeader}>Drafts</Text>
        <View style={styles.draftContainer}>
          <TouchableOpacity>
            <View
              style={[
                styles.cardContainer,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <AntDesign name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Drafts
            cityName={"Chicago"}
            imgLink={require("../../assets/images/Cities/Chicago.jpeg")}
          />
          <Drafts
            cityName={"Los Angeles"}
            imgLink={require("../../assets/images/Cities/LosAngeles.jpeg")}
          />
          <Drafts
            cityName={"New York"}
            imgLink={require("../../assets/images/Cities/NewYork.jpeg")}
          />
          <Drafts
            cityName={"Portland"}
            imgLink={require("../../assets/images/Cities/Portland.jpeg")}
          />
          <Drafts
            cityName={"Sacramento"}
            imgLink={require("../../assets/images/Cities/Sacramento.jpeg")}
          />
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.subHeader}>Saved Places</Text>
        <View style={styles.savedPlacesContainer}>
          <TouchableOpacity>
            <View
              style={[
                styles.cardContainer,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <AntDesign name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <SavedPlaces
            text={"Food"}
            imgLink={require("../../assets/images/Rectangle_17.png")}
          />
          <SavedPlaces
            text={"Christmas 2020"}
            imgLink={require("../../assets/images/Rectangle_18.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  draftContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  savedPlacesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  header: {
    fontSize: 20,
    marginLeft: 20,
    paddingVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    marginLeft: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    backgroundColor: "lightgrey",
    height: Dimensions.get("screen").width * 0.27,
    width: Dimensions.get("screen").width * 0.27,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
});
