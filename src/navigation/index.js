import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../pages/HomeScreen";
import PlanScreen from "../pages/PlanScreen";
import SearchScreen from "../pages/SearchScreen";
import ProfileScreen from "../pages/ProfileScreen";
import DetailedPlan from "../pages/DetailedPlan";

// import { STYLES } from "../assets/colors";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: STYLES.background,
          borderTopWidth: 0,
          paddingTop: 5,
        },
        // tabBarActiveTintColor: STYLES.grayText,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="stacked-line-chart"
              size={size}
              color={color}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Plans"
        component={PlanScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
        <Stack.Screen
          name="DetailedPlan"
          component={DetailedPlan}
          options={{ gestureEnabled: false, presentation: "modal" }}
        />
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
