import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { data } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            className="w-full h-72 rounded-xl"
            source={{
              uri: data?.photo?.images?.large?.url,
            }}
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              className="w-10 h-10 rounded-md opacity-75 items-center justify-center bg-white"
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={24} color="#48D1CC" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 opacity-80 rounded-md items-center justify-center bg-[#48D1CC]">
              <Ionicons name="heart-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className="absolute inset-x-0 bottom-5 flex-row justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-gray-100 font-bold text-[14px]">
                {data?.price_level}
              </Text>
              <Text className="text-gray-100 font-bold text-[24px]">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100 items-center justify-center">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-cyan-400 text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="mt-2 flex-row items-center space-x-2">
            <FontAwesome name="map-marker" size={24} color="#48D1CC" />
            <Text className="text-gray-300 text-base font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="mt-6 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-14 h-14 items-center justify-center bg-red-200 rounded-full">
                <FontAwesome name="star" size={24} color="#fa5252" />
              </View>
              <View className="space-y-1">
                <Text className="text-[#495057] font-bold">{data?.rating}</Text>
                <Text className="text-[#495057]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-14 h-14 items-center justify-center bg-red-200 rounded-full">
                <FontAwesome name="dollar" size={24} color="#495057" />
              </View>
              <View className="space-y-1">
                <Text className="text-[#495057] font-bold">
                  {data?.price_level}
                </Text>
                <Text className="text-[#495057]">Price Level</Text>
              </View>
            </View>
          )}
          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-14 h-14 items-center justify-center bg-red-200 rounded-full">
                <FontAwesome5 name="map-signs" size={24} color="#495057" />
              </View>
              <View className="space-y-1">
                <Text className="text-[#495057] font-bold">
                  {data?.bearing}
                </Text>
                <Text className="text-[#495057]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        {data?.description && (
          <Text className="mt-6 text-gray-300 tracking-wide text-base font-bold">
            {data?.description}
          </Text>
        )}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map(item => {
              return (
                <TouchableOpacity
                  key={item.key}
                  className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <View className="space-y-2  mt-4 bg-gray-50 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6 mb-2">
              <FontAwesome name="phone" size={24} color="#545057" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6 mb-2">
              <FontAwesome name="envelope" size={24} color="#545057" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6 mb-2">
              <FontAwesome name="map-pin" size={24} color="#545057" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}
          <View className="mt-4 py-2 rounded-lg bg-[#48D1CC] items-center justify-center mb-12">
            <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { Detail };
