import { Image,Pressable,Text,View} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageCircle , Bell } from 'lucide-react-native';

const HomeScreen = () => {
   const navigation = useNavigation();

  return (
     <SafeAreaView className='flex-1 bg-white'>
        <View className="px-4 py-3 bg-white flex-row justify-between items-center border-b border-gray-200">
          <View className="flex-1">
            <Text>Location</Text>
            <Text>Shakar Nagar, Bengaluru</Text>
          </View>

          <View className="flex-row gap-4 items-center ml-2">
            <MessageCircle size={20} stroke="#333"/>
            <Bell  size={20} stroke="#333"/>
            <Pressable>
               <Image source={{uri : "https://lh3.googleusercontent.com/ogw/AF2bZyg_eDli_setSnqEQAjrwfx8fiTlOoXO_MBekbrymm-xsw=s64-c-mo"}}/>
            </Pressable>
          </View>
        </View>
     </SafeAreaView>
  )
}

export default HomeScreen

