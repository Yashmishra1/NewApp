import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {COLORS} from './colors';
import {fonts} from './fonts';

const platformOS = Platform.OS;

const isIos = Platform.OS === 'ios';

export {isIos, fonts, COLORS};
