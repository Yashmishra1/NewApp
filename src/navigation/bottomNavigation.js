import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mvs} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/AntDesign';
import TripIcon from 'react-native-vector-icons/MaterialIcons';
import MessageIcon from 'react-native-vector-icons/Feather';

import {Explore, Inbox, Profile, Trips, WishList} from '@screens';
import {COLORS} from '@theme/colors';
import ExplorerHeader from '@components/exploreHeader';

const Tab = createBottomTabNavigator();

const TabItem = ({icon}) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" style={styles.tabIcon} />
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.red,
      }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="search1"
              size={size}
              color={focused ? COLORS.red : COLORS.Hof}
            />
          ),
          // header: ({}) => {
          //   return <ExplorerHeader onCategoriesChanged={} />;
          // },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="hearto"
              size={size}
              color={focused ? COLORS.red : COLORS.Hof}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TripIcon
              name="travel-explore"
              size={size}
              color={focused ? COLORS.red : COLORS.Hof}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MessageIcon
              name="message-circle"
              size={size}
              color={focused ? COLORS.red : COLORS.Hof}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.tabIcon}
              tintColor={focused ? COLORS.red : COLORS.Hof}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    height: mvs(56),
    width: mvs(56),
  },
});
export default BottomNavigation;
