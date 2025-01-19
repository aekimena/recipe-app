import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../components/layouts/ScreenContainer';
import colors from '../../constants/colors';
import {VSpacer, VSpacerSafe} from '../../components/ui/Spacer';
import {InputHeader} from '../../components/SearchAll/InputHeader';
import {Sponsored} from '../../components/SearchAll/Sponsored';
import {dummySearchResult} from '../../constants/data';
import {RenderSearchResults} from '../../components/ui/Blocks/RenderSearchResults';

// dummy

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const SearchScreen = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingBottom: 15, paddingHorizontal: 20}}>
          <VSpacerSafe />
          <InputHeader onChangeText={() => null} />
          <Sponsored />
        </View>
        <FlatList
          data={shuffleArray(dummySearchResult)}
          renderItem={({item, index}) => (
            <RenderSearchResults key={index} item={item} />
          )}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </ScreenContainer>
  );
};

export {SearchScreen};

const styles = StyleSheet.create({
  flatlist: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 50,
  },
});
