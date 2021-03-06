import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingsContext } from '../../../DefaultContainer';
import { PoppinsText } from '../../components/TextComponents/PoppinsText';
import * as ds from '../../constants/styles';

const NoPins = () => {
  const { colors } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="pin-off"
        size={ds.fontSize[10]}
        color={colors.primary}
        style={{ paddingRight: ds.padding[4] }}
      />
      <View style={styles.textContainer}>
        <PoppinsText bold primary fontSize={ds.fontSize[3]}>
          No Pins
        </PoppinsText>
        <PoppinsText italic primary fontSize={ds.fontSize[0]}>
          Try searching for countries you're interested in and pinning them
        </PoppinsText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 700,
    width: '90%',
  },
  textContainer: {
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default NoPins;
