import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ListRenderItem as FlashListRenderItem,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {Listing} from '../../interfaces';
import {picture} from '../../mock';
import {COLORS} from '@theme';

interface Props {
  listings: any[];
  category: string;
}
const Listings = ({listings: items, category}: Props) => {
  const navigation = useNavigation();
  const listRef = useRef(null);
  const [state, setState] = useState({
    loading: false,
  });

  useEffect(() => {
    setState(prev => ({...prev, loading: true}));
    setTimeout(() => {
      setState(prev => ({...prev, loading: false}));
    }, 200);
  }, [category]);

  const renderRow: FlashListRenderItem<Listing> = ({item}) => {
    console.log('item343', item?.medium_url);
    return (
      <TouchableOpacity>
        <View style={styles.listings}>
          <Text style={{color: 'black'}}>{item?.name}</Text>
          <Image
            source={{
              uri: picture,
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity style={{position: 'absolute', right: 30, top: 30}}>
            <Ionicons name="heart-outline" color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={state.loading ? [] : items}
        renderItem={renderRow}
        ref={listRef}
      />
    </View>
  );
};

export {Listings};
