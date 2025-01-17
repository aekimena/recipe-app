import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import colors from '../../../constants/colors';

import {NameHeader} from '../../../components/profile/NameHeader';
import {InfoBox} from '../../../components/profile/InfoBox';
import {VSpacer} from '../../../components/ui/Spacer';
import {RecipeView} from '../../../components/ui/Blocks/RecipeView';
import {dummyRecommendations} from '../../../constants/data';
import {RecipeBy} from '../../../components/profile/RecipeBy';

const {width: screenW} = Dimensions.get('window');

export const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingBottom: 10}}>
          <NameHeader name="Arinze Emmanuel" />
        </View>
        <FlatList
          ListHeaderComponent={
            <>
              <VSpacer size={60} />
              <InfoBox
                username={'aekimena'}
                followers={20}
                following={40}
                likes={100}
                bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
                    quibusdam!"
                profileImage=""
              />
              <RecipeBy name="Arinze" />
              <VSpacer size={5} />
            </>
          }
          data={dummyRecommendations}
          renderItem={({item, index}) => (
            <RecipeView
              item={item}
              key={index}
              width={screenW / 2 - 30}
              height={180}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{gap: 15, paddingHorizontal: 20}}
          contentContainerStyle={{
            gap: 20,
            paddingBottom: 50,
          }}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
