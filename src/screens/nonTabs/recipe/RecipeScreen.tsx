import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import {RecipeRouteStack} from '../../../types/navigator.types';
import {viewStyles} from '../../../constants/style';
import {
  BookmarkOutline,
  ChevronLeft,
  LoveOutline,
  PlayOutline,
} from '../../../assets/svgs';
import colors from '../../../constants/colors';
import {useSafeTops} from '../../../hooks/useSafeTops';
import {VSpacer} from '../../../components/ui/Spacer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RecipeSheetContent} from '../../../components/recipe/RecipeSheetContent';

const {width: screenW} = Dimensions.get('window');

export const RecipeScreen = () => {
  // states

  const [currentIndex, setCurrentIndex] = useState(0);

  const route = useRoute<RecipeRouteStack>();
  const navigation = useNavigation<NativeStackNavigationProp<{}>>();
  const recipeData = route?.params?.recipe;
  const snapPoints = useMemo(() => ['62%', '90%'], []);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenW);
    setCurrentIndex(index);
  };

  return (
    <ScreenContainer statusBarTranslucent statusBarBackground="transparent">
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View style={styles.imagesContainer}>
          <ScrollView
            onScroll={handleScroll}
            contentContainerStyle={{}}
            scrollEventThrottle={16}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            {recipeData?.image.map((item, index) => (
              <ImageBackground
                source={{uri: item}}
                key={index}
                style={{width: screenW}}
              />
            ))}
          </ScrollView>
          <View
            style={{
              ...styles.headerIcons,
              top: useSafeTops(50),
            }}>
            <View style={{...viewStyles.flexRowBtw, alignItems: 'flex-start'}}>
              <Pressable
                style={{...styles.iconContainer}}
                onPress={() => navigation.goBack()}>
                <ChevronLeft color={colors.white} size={20} />
              </Pressable>
              <View>
                <View style={{...styles.iconContainer}}>
                  <LoveOutline color={colors.white} size={20} />
                </View>
                <VSpacer size={15} />
                <View style={{...styles.iconContainer}}>
                  <BookmarkOutline color={colors.white} size={20} />
                </View>
                <VSpacer size={15} />
                <View
                  style={{
                    ...styles.iconContainer,
                    backgroundColor: colors.forest100,
                  }}>
                  <PlayOutline color={colors.white} size={20} />
                </View>
              </View>
            </View>
          </View>
          {recipeData?.image?.length > 1 && (
            <View style={styles.indicatorContainer}>
              {recipeData?.image.map((indexes, index) => (
                <View
                  style={{
                    ...styles.indicator,
                    width: currentIndex == index ? 10 : 5,
                  }}
                  key={index}
                />
              ))}
            </View>
          )}
        </View>

        <BottomSheet
          index={0}
          ref={null}
          snapPoints={snapPoints}
          backgroundStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
          style={{flex: 1}}
          enableDynamicSizing={false}
          handleIndicatorStyle={{backgroundColor: colors.black400, width: 80}}
          animateOnMount={false}>
          <BottomSheetScrollView contentContainerStyle={{paddingBottom: 50}}>
            <RecipeSheetContent recipe={recipeData} />
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 40,
    width: 40,
    ...viewStyles.allCenter,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 50,
  },
  imagesContainer: {
    height: '40%',
    backgroundColor: '#000',
    width: '100%',
  },
  headerIcons: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    ...viewStyles.flexRow,
    gap: 5,
  },
  indicator: {
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});
