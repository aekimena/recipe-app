import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import colors from '../../constants/colors';
import {Bolt, ChatSquareOutline, List} from '../../assets/svgs';

interface Props {
  activeTab?: number;
  setActiveTab: (value: number) => void;
}

export const SheetTabsHeader = ({activeTab = 1, setActiveTab}: Props) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab == 1 && styles.selected]}
          onPress={() => setActiveTab(1)}>
          <List
            color={activeTab == 1 ? colors.white : colors.black200}
            size={15}
          />
          <Text
            style={{
              ...textStyles.font_12_regular,
              color: activeTab == 1 ? colors.white : colors.black200,
            }}>
            Ingredients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab == 2 && styles.selected]}
          onPress={() => setActiveTab(2)}>
          <Bolt
            color={activeTab == 2 ? colors.white : colors.black200}
            size={15}
          />
          <Text
            style={{
              ...textStyles.font_12_regular,
              color: activeTab == 2 ? colors.white : colors.black200,
            }}>
            Instructions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab == 3 && styles.selected]}
          onPress={() => setActiveTab(3)}>
          <ChatSquareOutline
            color={activeTab == 3 ? colors.white : colors.black200}
            size={15}
          />
          <Text
            style={{
              ...textStyles.font_12_regular,
              color: activeTab == 3 ? colors.white : colors.black200,
            }}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    ...viewStyles.flexRow,
    width: '100%',
    height: 40,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.black400,
  },
  tab: {
    flex: 1,
    ...viewStyles.flexRowCenter,
    gap: 5,
    paddingHorizontal: 10,
  },
  selected: {
    borderRadius: 50,
    backgroundColor: colors.forest100,
    height: '100%',
  },
});
