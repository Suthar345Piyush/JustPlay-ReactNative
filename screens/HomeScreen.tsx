import { Image,Pressable,ScrollView,Text,TouchableOpacity,View} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageCircle , Bell } from 'lucide-react-native';

const spotlightData = [
  {
    id: "10",
    image:
      "https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png",
    text: "Learn Tennis",
    description: "Know more",
  },
  {
    id: "11",
    image:
      "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png",
    text: "Up Your Game",
    description: "Find a coach",
  },
  {
    id: "12",
    image:
      "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png",
    text: "Hacks to win",
    description: "Yes, Please!",
  },
  {
    id: "13",
    image:
      "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png",
    text: "Spotify Playlist",
    description: "Show more",
  },
];





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

          {/* creating game card  */}

          <View className="bg-white border border-gray-200 rounded-2xl p-4 mt-4 shadow-sm relative">
            <Text className="font-semibold text-sm text-gray-400">START PLAYING!</Text>


            <View className="flex-row items-center justify-between">
              <View>
              <Text className="text-xl font-semibold mt-2">Create Game</Text>
              <Text className="text-base text-gray-500 mt-1">No upcoming games in your calendar</Text>
            </View>

            <TouchableOpacity className="bg-white px-4 py-2 border border-gray-300 rounded-md ">
              <Text className="text-base font-semibold">Create</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity className="mt-3 self-center">
            <Text className="text-[#222] font-semibold underline text-base">View My Calendar</Text>
          </TouchableOpacity>
        </View>

        {/* groups & grouptime activities  */}

         <View className="bg-[#F9FAFB] mt-5 rounded-2xl p-4 space-y-4">
          <TouchableOpacity className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="bg-green-100 p-2 rounded-full">
                 <Text className="text-2xl">👥</Text>
                 </View>

                 <View>
                  <Text className="font-semibold text-lg text-gray-800">Groups</Text>
                  <Text className="text-sm text-gray-500">Connect, Compete and Discuss</Text>
              </View>
            </View>
            <Text className="text-xl text-gray-400">➡️</Text>
          </TouchableOpacity>


          <TouchableOpacity className="flex-row items-center justify-between mt-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-yellow-100 p-2 rounded-full">
                 <Text className="text-xl">💡</Text>
                 </View>

                 <View>
                  <Text className="font-semibold text-gray-800 text-lg">Game Time Activities</Text>
                  <Text className="text-sm text-gray-500">410 justPlay hosted games</Text>
                 </View>
              </View>
              <Text className="text-xl text-gray-400">➡️</Text>
          </TouchableOpacity>
         </View>


         {/* bookings and playpals  */}

         <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="w-[48%] bg-white rounded-2xl border border-gray-200 p-4">
             <Text className="font-semibold text-base text-black">Bookings</Text>
             <Text className='text-sm text-gray-500'>Game History</Text>
          </TouchableOpacity>


          <TouchableOpacity className='w-[48%] bg-white rounded-2xl border border-gray-200 p-4'>
            <Text className="font-semibold text-base text-black">PlayPals</Text>
            <Text className="text-sm text-gray-500">Manage Players</Text>
          </TouchableOpacity>
         </View>


         {/* spotlight  */}


         <Text className="text-xl font-bold mt-6 mb-2">SpotLight</Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              spotlightData.map((item , index) => (
                <TouchableOpacity key={item.id} className="mr-4 bg-white rounded-xl w-48 overflow-hidden shadow-sm ">
                  <Image source={{uri : item.image }} className="w-full h-56" resizeMode="cover"/>
                  <View className='p-3'>
                    <Text className='font-bold text-gray-800 text-base'>
                      {item?.text}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {item?.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            }
        </ScrollView>
        


        </ScrollView>
     </SafeAreaView>
  )
}

export default HomeScreen

