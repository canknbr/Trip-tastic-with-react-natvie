import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imgSrc, type, setType }) => {
    const isSame = type == title.toLowerCase();
  return (
    <TouchableOpacity className="items-center justify-center space-y-2"
        onPress={() => setType(title.toLowerCase())}
    >
      <View
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
         isSame
            ? 'bg-gray-200' : 'bg-white'   
        }`}
      >
        <Image className="w-full h-full object-cover" source={imgSrc} />
      </View>
      <Text className={`text-xl font-semibold ${
        isSame ? 'text-cyan-400' : 'text-gray-300'
      }`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;


