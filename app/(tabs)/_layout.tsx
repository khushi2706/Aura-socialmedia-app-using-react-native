import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { findFocusedRoute } from '@react-navigation/native';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }: AnyType) => {
 return (
  <View className='items-center justify-center gap-2'>
   <Image
    source={icon}
    resizeMode='contain'
    tintColor={color}
    className='w-6 h-6'
   />
   <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
    {name}
   </Text>
  </View>
 );
};

const TabLayout = () => {
 return (
  <>
   <Tabs
    screenOptions={{
     tabBarActiveTintColor: '#FFA001',
     tabBarInactiveTintColor: '#CDCDE0',
     tabBarShowLabel: false,
     tabBarStyle: {
      backgroundColor: '#161622',
      borderTopWidth: 1,
      borderTopColor: '#232533',
      height: 84,
     },
    }}
   >
    <Tabs.Screen
     name='home'
     options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
       <TabIcon
        icon={icons.home}
        color={color}
        focused={focused}
        name={'home'}
       />
      ),
     }}
    />
    <Tabs.Screen
     name='bookmark'
     options={{
      title: 'Bookmark',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
       <TabIcon
        icon={icons.bookmark}
        color={color}
        focused={focused}
        name={'Bookmark'}
       />
      ),
     }}
    />
    <Tabs.Screen
     name='create'
     options={{
      title: 'Create',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
       <TabIcon
        icon={icons.plus}
        color={color}
        focused={focused}
        name={'create'}
       />
      ),
     }}
    />
    <Tabs.Screen
     name='profile'
     options={{
      title: 'Profile',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
       <TabIcon
        icon={icons.profile}
        color={color}
        focused={focused}
        name={'Profile'}
       />
      ),
     }}
    />
   </Tabs>
  </>
 );
};

export default TabLayout;
