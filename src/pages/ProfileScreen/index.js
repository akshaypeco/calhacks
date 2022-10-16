import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.profileName}>Hello, Brenda!</Text>
      <Text style={styles.statistics}>Your Statistics</Text>
      <Text style={styles.statisticsInfo}>27 Plans Made</Text>
      <Text style={styles.statisticsInfo}>250 Liked Playlists</Text>
      <Text style={styles.preferences}>Preferences</Text>
      <Text style={styles.preference}>Food {"&"} Drinks</Text>
      <Text style={styles.preference}>Things to Do</Text>
      <Text style={styles.preference}>Shopping</Text>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "#2DB493",
          paddingVertical: 15,
          paddingHorizontal: 75,
          borderRadius: 5,
          marginTop: 200,
        }}
      >
        <Text style={{ fontSize: 17, color: "white" }}>Explore</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileName: {
    marginLeft: 25,
    marginTop: 15,
    fontSize: 19,
  },
  statistics: {
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 18,
    marginLeft: 25,
  },
  statisticsInfo: {
    marginLeft: 25,
    marginTop: 15,
  },
  preferences: {
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 18,
    marginLeft: 25,
  },
  preference: {
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 30,
    fontSize: 15,
  },
});
