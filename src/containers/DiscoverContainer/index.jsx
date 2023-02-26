import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Avatar, NotFound } from '../../../assets';
import { FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../../components/MenuContainer';
import { dataDiscover } from '../../containers/DiscoverContainer/constants';
import { getData } from '../../api';
import ItemCard from '../../components/ItemCard';
const DiscoverContainer = () => {
  const [type, setType] = useState('restaurants');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bl_lat,setBl_lat] = useState(null)
  const [bl_lng,setBl_lng] = useState(null)
  const [tr_lng,setTr_lng] = useState(null)
  const [tr_lat,setTr_lat] = useState(null)


  useEffect(() => {
    getData(type,
      bl_lat,
      bl_lng,
      tr_lat,
      tr_lng
      ).then(res => {
      setData(res);
      setInterval(() => {
        setLoading(false);
      }, 1000);
    });
  }, [type,
    bl_lat,
    bl_lng,
    tr_lat,
    tr_lng
  ]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-cyan-400 font-bold">Discover</Text>
          <Text className="text-[24px] text-cyan-300">
            the beauty of the world
          </Text>
        </View>
        <View className="w-12 h-12 rounded-md items-center justify-center">
          <Image
            className="w-full h-full rounded-md object-cover"
            source={Avatar}
          />
        </View>
      </View>
      <View className="flex-row items-center mx-4 my-2 bg-white rounded-xl py-1 px-4 shadow-md">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{
            fields: 'geometry',
          }}
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat)
            setBl_lng(details?.geometry?.viewport?.southwest?.lng)
            setTr_lat(details?.geometry?.viewport?.northeast?.lat)
            setTr_lng(details?.geometry?.viewport?.northeast?.lng)
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyCQ17f2DorDDlA_HNZ2B66Ll2ohDnNDxNw',
            language: 'en',
          }}
        />
      </View>

      <View className="px-8 mt-8 flex-row items-center justify-between">
        <FlatList
          data={dataDiscover}
          renderItem={({ item }) => (
            <MenuContainer {...item} type={type} setType={setType} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
      {loading ? (
        <View className="mt-48">
          <ActivityIndicator size="large" color="#48D1CC" />
        </View>
      ) : (
        <ScrollView>
          <View className="mt-8 px-4 flex-row items-center justify-between">
            <Text className="text-lg text-cyan-700">Top Tips</Text>
            <TouchableOpacity className="flex-row gap-2 items-center">
              <Text className="text-base text-cyan-700">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center justify-evenly mt-8 px-4">
            {data?.length > 0 ? (
              <>
                {data
                  ?.filter(item => item.name)
                  .map(item => (
                    <ItemCard
                      key={item.location_id * Math.random()}
                      title={item.name}
                      imgSrc={item?.photo?.images?.large?.url}
                      location = {item?.location_string || "No Location"}
                      data = {item}
                    />
                  ))}
              </>
            ) : (
              <View className="w-full h-[600px] items-center space-y-8 justify-center">
                <Image className="w-32 h-32 object-contain" source={NotFound} />
                <Text className="text-xl font-semibold text-gray-400">
                  Opps.. No Data Found
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export { DiscoverContainer };
