import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {COLORS} from '@theme';

const InputIcon = ({icon, showPassword, onPressIcon, disableIcon}) => {
  const {width, height} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={styles.icon(width, height)}
      disabled={disableIcon}
      onPress={onPressIcon}>
      {icon === 'password' ? (
        <SimpleLineIcons
          name="eye"
          size={ms(20, width)}
          // color={
          //   showPassword ? theme.colors.accentPrimary : theme.colors.accentDark
          // }
        />
      ) : icon === 'search' ? (
        <AntDesign
          name="search1"
          size={ms(20, width)}
          // color={theme.colors.textTertiary}
        />
      ) : icon === 'calendar' ? (
        <MaterialCommunityIcons
          name="calendar-blank"
          size={ms(20, width)}
          // color={theme.colors.textTertiary}
        />
      ) : icon === 'dollar-sign' ? (
        <Feather
          name="dollar-sign"
          size={ms(20, width)}
          // color={theme.colors.accentPrimary}
        />
      ) : null}
    </TouchableOpacity>
  );
};
const Input = ({
  icon,
  iconSize = 20,
  iconColor = 'black',
  style,
  onChangeText,
  inputStyle,
  passwordField,
  ...textInputProps
}) => {
  const [state, setState] = useState({
    isFocused: false,
    secureTextEntry: false,
  });

  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...textInputProps}
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
      />
      {icon && (
        <InputIcon
          icon={icon}
          disableIcon={disableIcon}
          showPassword={showPassword}
          onPressIcon={onPressIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default Input;
