import React, {useRef, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters/extend';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS, fonts} from '@theme';
import {categories} from '@mock';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const ExplorerHeader = ({onCategoriesChanged}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemsRef = useRef([]);
  const scrollRef = useRef(null);

  const setItemRef = index => el => {
    itemsRef.current[index] = el;
  };

  const selectCategory = index => {
    const selected = itemsRef.current[index];

    setActiveIndex(index);

    selected?.measure(x => {
      scrollRef.current?.scrollTo({x: x - 16, y: 0, animated: true});
    });

    ReactNativeHapticFeedback.trigger('impactMedium');
    onCategoriesChanged(categories[index]?.name);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={24} />
            <View>
              <Text style={{fontFamily: fonts.publicSansRegular}}>
                {'Where to?'}
              </Text>
              <Text>{'Anywhere · Any week '}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: ms(30),
            paddingHorizontal: s(16),
          }}>
          {categories?.map((item, index) => (
            <TouchableOpacity
              key={index}
              ref={setItemRef(index)}
              onPress={() => selectCategory(index)}
              style={styles.categorieButton(activeIndex, index)}>
              <MaterialIcons
                size={24}
                name={item?.icon}
                color={activeIndex === index ? COLORS.black : COLORS.grey}
              />
              <Text style={styles.categorieText(activeIndex, index)}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: vs(160),
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(16),
    gap: ms(10),
  },
  filterButton: {
    padding: ms(10),
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: ms(24),
  },
  searchBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
    padding: ms(14),
    backgroundColor: '#fff',
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ms(30),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categorieButton: (active, index) => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: ms(8),
    borderBottomColor: active === index ? COLORS.black : 'transparent',
    borderBottomWidth: active === index ? s(2) : 0,
  }),
  categorieText: (active, index) => ({
    fontSize: ms(14),
    fontFamily: '',
    color: active === index ? COLORS.black : COLORS.grey,
  }),
});
export default ExplorerHeader;
