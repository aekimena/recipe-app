import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import colors from '../../../constants/colors';
import {Header} from '../../../components/ui/Headers/PageHeader';
import {VSpacer, VSpacerSafe} from '../../../components/ui/Spacer';
import {dummyNotifications} from '../../../constants/data';
import {NotificationBlock} from '../../../components/notifications/NotificationBlock';

export const NotificationScreen = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <FlatList
          ListHeaderComponent={
            <>
              <VSpacerSafe />
              <Header title="Notifications" />
              <VSpacer size={30} />
            </>
          }
          data={dummyNotifications}
          renderItem={({item, index}) => (
            <NotificationBlock item={item} key={index} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: colors.black400,
    width: '100%',
  },
});
