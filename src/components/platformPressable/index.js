import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import {isIos} from '@theme';

const NativeButton = !isIos ? Pressable : TouchableOpacity;

const PlatformPressable = ({children, ...props}) => {
  return (
    <NativeButton
      android_ripple={{
        color: 'blue',
        borderless: false,
        foreground: true,
      }}
      {...props}>
      {children}
    </NativeButton>
  );
};
export default PlatformPressable;
