import Login from '@screens/authentication/login';
import BottomNavigation from './bottomNavigation';
import Bookings from '@screens/bookings';
import {TouchableOpacity} from 'react-native';

import CloseIcon from 'react-native-vector-icons/AntDesign';

const HeaderComponent = ({size, color}) => {
  return (
    <TouchableOpacity>
      <CloseIcon name="close-outline" size={size} color={color} />
    </TouchableOpacity>
  );
};
export default function getRoutes() {
  const AUTHENTICATION_ROUTES = [
    {
      name: 'Login',
      component: Login,
      options: {
        headerShown: false,
      },
    },
  ];
  const ROUTES = [
    {
      name: 'BottomNavigation',
      component: BottomNavigation,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'Bookings',
      component: Bookings,
      options: {
        presentation: 'transparentModal',
        animtation: 'fade',
        headerLeft: () => <HeaderComponent color={''} size={0} />,
      },
    },
  ];
  return {AUTHENTICATION_ROUTES, ROUTES};
}
