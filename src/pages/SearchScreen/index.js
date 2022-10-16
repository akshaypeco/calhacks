import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import MapView from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import PlanCard from "../../components/PlanCard";

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { cityName } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <AntDesign
          name="back"
          size={24}
          color="black"
          style={{ marginLeft: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {cityName}
        </Text>
        <View style={styles.mapContainer}>
          <MapView
            paddingAdjustmentBehavior="automatic"
            showsUserLocation={true}
            style={styles.map}
          />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 25,
              marginTop: 20,
              fontSize: 16,
              marginBottom: -10,
              fontWeight: "bold",
            }}
          >
            4 possible itineraries
          </Text>
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

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
});
