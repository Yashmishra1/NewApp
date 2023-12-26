import {Platform} from 'react-native';

const fonts = Platform.select({
  ios: {
    publicSansRegular: 'PublicSans-Regular',
    publicSansSemiBold: 'PublicSans-SemiBold',
    openSansRegular: 'OpenSans-Regular',
    openSansSemiBold: 'OpenSans-SemiBold',
    montserratMedium: 'Montserrat-Medium',
    montserratSemiBold: 'Montserrat-SemiBold',
  },
  android: {
    publicSansRegular: 'PublicSans-Regular',
    publicSansSemiBold: 'PublicSans-SemiBold',
    openSansRegular: 'OpenSans-Regular',
    openSansSemiBold: 'OpenSans-SemiBold',
    montserratMedium: 'Montserrat-Medium',
    montserratSemiBold: 'Montserrat-SemiBold',
  },
});

export {fonts};
