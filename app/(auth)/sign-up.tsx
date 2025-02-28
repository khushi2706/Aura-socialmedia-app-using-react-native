import { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';

import { images } from '../../constants';
import { CustomButton, FormField } from '../../components/index';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const SignIn = () => {
 const { setUser, setIsLogged } = useGlobalContext();
 const [isSubmitting, setSubmitting] = useState(false);
 const [form, setForm] = useState({
  email: '',
  password: '',
  username: '',
 });

 const submit = async () => {
  if (form.username === '' || form.email === '' || form.password === '') {
   Alert.alert('Error', 'Please fill in all fields');
  }

  setSubmitting(true);
  try {
   const result = await createUser(form.email, form.password, form.username);
   setUser(result);
   setIsLogged(true);

   router.replace('/home');
  } catch (error: any) {
   Alert.alert('Error', error.message);
  } finally {
   setSubmitting(false);
  }
 };

 return (
  <SafeAreaView className='bg-primary h-full'>
   <ScrollView>
    <View
     className='w-full flex justify-center h-full px-4 my-6'
     style={{
      minHeight: Dimensions.get('window').height - 100,
     }}
    >
     <Image
      source={images.logo}
      resizeMode='contain'
      className='w-[115px] h-[34px]'
     />

     <Text className='text-2xl font-semibold text-white mt-10 font-psemibold'>
      Log in to Aora
     </Text>

     <FormField
      title='Email'
      value={form.email}
      handleChangeText={(e: any) => setForm({ ...form, email: e })}
      otherStyles='mt-7'
      keyboardType='email-address'
     />

     <FormField
      title='Password'
      value={form.password}
      handleChangeText={(e: any) => setForm({ ...form, password: e })}
      otherStyles='mt-7'
     />

     <FormField
      title='Username'
      value={form.username}
      handleChangeText={(e: any) => setForm({ ...form, username: e })}
      otherStyles='mt-7'
      keyboardType='username'
     />

     <CustomButton
      title='Sign Up'
      handlePress={submit}
      containerStyles='mt-7'
      isLoading={isSubmitting}
     />

     <View className='flex justify-center pt-5 flex-row gap-2'>
      <Text className='text-lg text-gray-100 font-pregular'>
       already have account?{' '}
      </Text>
      <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>
       Sign In
      </Link>
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 );
};

export default SignIn;
