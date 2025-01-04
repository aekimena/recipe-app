import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RecipeProps} from '../../types/bookmark.type';
import colors from '../../constants/colors';
import {SheetHeader} from './SheetHeader';
import {VSpacer} from '../ui/Spacer';
import {AuthorBlock} from './AuthorBlock';
import {SheetTabsHeader} from './SheetTabsHeader';
import {TabsContent} from './TabsContent';

interface Props {
  recipe: RecipeProps;
}

export const RecipeSheetContent = ({recipe}: Props) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <View style={{}}>
      <VSpacer size={15} />
      <SheetHeader recipe={recipe} />
      <VSpacer size={15} />
      <View style={styles.seperator} />
      <VSpacer size={25} />
      <AuthorBlock recipe={recipe} />
      <VSpacer size={25} />
      <SheetTabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <VSpacer size={30} />
      <TabsContent activeTab={activeTab} recipe={recipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 0.3,
    width: '100%',
    backgroundColor: colors.black400,
  },
});
