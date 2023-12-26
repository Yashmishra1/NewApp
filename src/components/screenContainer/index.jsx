import React from 'react';
import {StyleSheet, View} from 'react-native';
import {vs} from 'react-native-size-matters/extend';

const ScreenContainer = ({children: any, ...props}) => {
  return (
    <View style={[styles.screen, {backgroundColor: 'white'}, props.style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: vs(16),
  },
});
export default ScreenContainer;
