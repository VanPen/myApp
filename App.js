import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./components/Home";
import Profile from "./components/Profile";
import Feed from "./components/Feed";


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();


function A() {
    return <View>
        <Image
        source={{uri:'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'}}
        style= { styles.container }
        />
        <Text>Anis Je suis en train de faire du react</Text>
    </View>;
}

function B() {
  return <View />;
}

function C() {
  return <View />;
}

function HomeStackScreen() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Search" component={Profile} />
        </SettingsStack.Navigator>
    );
}

function SettingsStackScreen() {
  return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Setting" component={Feed} />
      </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{ tabBarLabel: 'Home' }}
          />
            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
          <Tab.Screen
              name="Settings"
              component={SettingsStackScreen}
              options={{ tabBarLabel: 'Feed' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 60,
        margin: 50,
    },
});
