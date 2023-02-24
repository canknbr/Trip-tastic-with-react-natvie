import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { HeroImage } from '../../../assets';
const HomeContainer = () => {
  return (
    <View className="flex-1 bg-white relative pt-10">
      {/*first section */}
      <Animatable.View
        animation="fadeInLeftBig"
        duration={1200}
        easing="ease-out"
        opacity={0.5}
        className="flex-row gap-2 p-4 pt-10 items-center"
      >
        <View className="bg-black p-4 rounded-full items-center justify-center">
          <Text className="text-cyan-300 text-2xl font-bold">Go</Text>
        </View>
        <Text className="text-2xl text-gray-600 font-semibold">Travel</Text>
      </Animatable.View>
      {/*second section */}
      <Animatable.View
        animation="fadeInRightBig"
        duration={1400}
        easing="ease-in-out"
        className="mt-8 px-6 space-y-3"
      >
        <Text className="text-4xl font-semibold text-gray-600 ">
          Enjoy the trip with{' '}
        </Text>
        <Text className="text-4xl font-bold  text-cyan-500">Good Moments</Text>
        <Text className="text-gray-500 leading-6 tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident
          ipsum facilis est officiis.
        </Text>
      </Animatable.View>
      {/*circle section */}
      <Animatable.View className="absolute bottom-0 -right-[50%] w-[400px] h-[400px] rounded-full bg-cyan-300" />
      <Animatable.View className="absolute bottom-40 right-[50%] w-[400px] h-[400px] rounded-full bg-red-200" />
      <View className="flex-1 items-center justify-center relative mt-10">
        <Animatable.Image
          animation="fadeInUpBig"
          duration={1500}
          easing="ease-out"
          source={HeroImage}
          className="w-full h-full object-contain"
        />
        <Animatable.View
          animation="fadeInUpBig"
          duration={2000}
          easing="ease-out"
          className="absolute bottom-24 w-24 h-24 border-l-2 border-r-2 border-t-4 border-cyan-300 rounded-full items-center justify-center"
        >
          <TouchableOpacity activeOpacity={0.8}>
            <Animatable.View
              animation="pulse"
              duration={1500}
              easing="ease-out"
              iterationCount={Infinity}
              className="w-20 h-20 rounded-full items-center justify-center bg-cyan-300"
            >
              <Text className="text-[30px] font-semibold text-gray-50">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export { HomeContainer };
