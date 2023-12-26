import React, {useState} from 'react';
import {View} from 'react-native';
import {Input} from '@components';
import styles from './style';
import Button from '@components/button';
import {LabelText} from '@components/text';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleLogin = () => {
    navigation.navigate('BottomNavigation');
  };
  const updateState = newState => {
    setState(prev => ({...prev, ...newState}));
  };
  return (
    <View style={styles.container}>
      <Input onChangeText={onChangeText} placeholder="Username" />
      <Input
        placeholder="Password"
        icon="password"
        onPressIcon={() => updateState({showPassword: !showPassword})}
        onChangeText={text => updateState({password: text})}
      />
      <Button onPress={handleLogin}>
        <LabelText style={{color: 'white'}}>Login</LabelText>
      </Button>
    </View>
  );
};
export default Login;
