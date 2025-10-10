import { Image,Pressable,ScrollView,Text,TouchableOpacity,View} from 'react-native'
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
            <Text  className="text-gray-400 text-xs">Location</Text>
            <Text className="text-lg font-semibold text-black">Sahakar Nagar, Bengaluru</Text>
          </View>

          <View className="flex-row gap-4 items-center ml-2">
            <MessageCircle size={20} stroke="#333"/>
            <Bell  size={20} stroke="#333"/>
            <Pressable>
               <Image 
                className="w-8 h-8 rounded-full"
                source={{uri : "https://lh3.googleusercontent.com/ogw/AF2bZyg_eDli_setSnqEQAjrwfx8fiTlOoXO_MBekbrymm-xsw=s64-c-mo"}}/>
            </Pressable>
          </View>
        </View>

        <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
          <View className="bg-[#F4F4F5] rounded-2xl p-4 mt-4 flex-row items-center justify-between">
            <View className="">
              <Text className="text-lg font-semibold">Set your Weekly Fit Goal🔥</Text>
              <Text className="text-sm text-gray-500 mt-1">KEEP YOURSELF FIT!</Text>
            </View>
            <Text className="text-3xl">➡️</Text>
          </View>

          <View>
            <Text>START PLAYING!</Text>
            <View>
              <Text>
                Create Game
              </Text>
              <Text>
                No upcoming games in your calendar
              </Text>
            </View>
            <TouchableOpacity>
              <Text>
                Create
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>
              View My Calendar
            </Text>
          </TouchableOpacity>
        </ScrollView>
     </SafeAreaView>
  )
}

export default HomeScreen

