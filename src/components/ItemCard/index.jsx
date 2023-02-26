import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ItemCard = ({title,imgSrc,location,data}) => {
const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} className="w-[180px] rounded-md border border-white shadow-md px-3 py-2 my-4 space-y-2 bg-white "
        onPress={() => navigation.navigate('Detail',{data})}
    >
      <Image
        source={{
            uri: imgSrc,
        }}
       className="w-full h-40 rounded-md object-cover my-2" />
      <Text className="text-cyan-800 text-base">
        {title?.length > 14 ? title.slice(0, 14) + '...' : title}
      </Text>
      <View className="flex-row space-x-2 items-center">
        <Ionicons name="ios-location-outline" size={24} color="gray" />
        <Text className="text-cyan-800 text-base">
            {location?.length > 14 ? location.slice(0, 14) + '...' : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ItemCard