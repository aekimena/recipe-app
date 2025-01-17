import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import colors from '../../../constants/colors';
import {Header} from '../../../components/ui/Headers/PageHeader';
import {VSpacer, VSpacerSafe} from '../../../components/ui/Spacer';
import {SearchInput} from '../../../components/ui/inputs/SearchInput';
import {Collections} from '../../../components/bookmarks/Collections';
import {dummyBookmarkCollections} from '../../../constants/data';

export const BookMarksScreen = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <FlatList
          data={dummyBookmarkCollections}
          contentContainerStyle={{gap: 20, paddingBottom: 30}}
          renderItem={({item, index}) => (
            <Collections collection={item.collection} recipes={item.recipes} />
          )}
          ListHeaderComponent={
            <>
              <VSpacerSafe />
              <Header title="Bookmarks" />
              <VSpacer size={20} />
              <SearchInput placeholder="Search saved recipes" />
              <VSpacer size={20} />
            </>
          }
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
