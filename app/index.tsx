import { Link } from 'expo-router';
import { Image, View, Text  } from 'react-native';



export default function HomeScreen() {
  return (
  
  <View className="items-center">
     <Text className="font-pblack text-3xl">Khushi</Text>
     <Link href='/home'>Go to Home</Link>
  </View>
  );
}

