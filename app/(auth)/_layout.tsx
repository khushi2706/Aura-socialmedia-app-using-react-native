import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import GlobalProvider from '@/context/GlobalProvider';

const AuthLayout = () => {
 return (
  <>
   <Stack>
    <Stack.Screen
     name='sign-in'
     options={{
      headerShown: false,
     }}
    />
    <Stack.Screen
     name='sign-up'
     options={{
      headerShown: false,
     }}
    />
   </Stack>

   {/* <Loader isLoading={loading} /> */}
   <StatusBar backgroundColor='#161622' style='light' />
  </>
 );
};

export default AuthLayout;
