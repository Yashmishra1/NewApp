import React, {useMemo, useState} from 'react';
import {View, Text} from 'react-native';

import ExplorerHeader from '@components/exploreHeader';
import {Listings} from '../listings';
import ListingData from '../../mock/airbnb-listings.json';

const Explore = () => {
  const [category, setCategory] = useState('Tiny Homes');
  const items = useMemo(() => ListingData as any, []);
  const onDateChanged = (category: string) => {
    console.log('category---', category);
    setCategory(category);
  };
  return (
    <View style={{flex: 1}}>
      <ExplorerHeader onCategoriesChanged={onDateChanged} />
      <Listings listings={items} category={category} />
    </View>
  );
};

export {Explore};
