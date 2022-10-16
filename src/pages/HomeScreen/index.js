import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Collections from "../../components/Collections";
import NextDestination from "../../components/NextDestination";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.greeting}>Hello, Brenda!</Text>
        <View style={styles.SearchBarContainer}>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              navigation.navigate("Search", { cityName: search });
            }}
          >
            <EvilIcons
              name="search"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search City"
            style={styles.SearchBar}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.header}>Find your next destination</Text>
          <View style={styles.nextDestinationContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <NextDestination
                text={"Portland"}
                imgLink={require("../../assets/images/Cities/Portland.jpeg")}
              />
              <NextDestination
                text={"Sacramento"}
                imgLink={require("../../assets/images/Cities/Sacramento.jpeg")}
              />
              <NextDestination
                text={"San Jose"}
                imgLink={require("../../assets/images/Cities/Sanjose.jpeg")}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={[styles.header, { marginBottom: 15 }]}>Collections</Text>
          <View style={styles.collectionContainer}>
            <Collections
              text={"Nature Lover"}
              imgLink={require("../../assets/images/Rectangle_11.png")}
            />
            <Collections
              text={"Foodie"}
              imgLink={require("../../assets/images/Rectangle_12.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    marginLeft: 20,
    paddingVertical: 10,
  },
  header: {
    fontSize: 16.5,
    marginLeft: 20,
  },
  SearchBarContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    marginHorizontal: 20,
  },
  SearchBar: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  collectionContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nextDestinationContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
