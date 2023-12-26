import React from 'react';
import {
  View,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import PlatformPressable from '../platformPressable';
import {ms, vs} from 'react-native-size-matters/extend';
import {ButtonText} from '../text';

const Button = ({loading, disabled, onPress, title, ...props}) => {
  return (
    <PlatformPressable
      disabled={disabled || loading}
      onPress={onPress}
      {...props}
      style={[styles.button, props.style]}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={props.textStyle?.color || 'black'}
        />
      ) : (
        <ButtonText style={props.textStyle}>{title}</ButtonText>
      )}
    </PlatformPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: vs(56),
    borderRadius: ms(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
