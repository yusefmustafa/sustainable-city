import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MapView from 'react-native-maps';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen.js'
import DiscussionScreen from './DiscussionScreen.js'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App () {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-earth'
                  : 'ios-earth-outline';
              } else if (route.name === 'Community Discussion') {
                iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={MapScreen} />
          <Tab.Screen name="Community Discussion" component={DiscussionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
