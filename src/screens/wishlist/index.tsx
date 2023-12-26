import React from 'react';
import {View, Text, Image} from 'react-native';

const WishList = () => {
  return (
    <View>
      <Text>WishList</Text>
      <Image
        style={{width: 400, height: 200}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export {WishList};
