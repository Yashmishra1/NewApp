import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({children, ...props}) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomText;
