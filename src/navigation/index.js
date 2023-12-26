import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import getRoutes from './routes';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {AUTHENTICATION_ROUTES, ROUTES} = useMemo(() => getRoutes(), []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {ROUTES?.map(item => (
          <Stack.Screen key={item.name} {...item} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};
