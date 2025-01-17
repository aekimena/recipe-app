import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import colors from '../../../constants/colors';
import {VSpacer, VSpacerSafe} from '../../../components/ui/Spacer';
import {Header} from '../../../components/home/Header';
import {PressSearch} from '../../../components/home/PressSearch';
import {Categories} from '../../../components/home/Categories';
import {Recommendations} from '../../../components/home/Recommendations';
import {RecipeOfWeek} from '../../../components/home/RecipeOfWeek';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <ScrollView>
          <VSpacerSafe />
          <Header />
          <VSpacer size={20} />
          <View style={{paddingHorizontal: 20}}>
            <PressSearch />
          </View>
          <VSpacer size={30} />
          <Categories />
          <VSpacer size={30} />
          <Recommendations />
          <VSpacer size={30} />
          <RecipeOfWeek />
          <VSpacer size={30} />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
