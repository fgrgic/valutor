import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CountriesContext, SettingsContext } from '../../../DefaultContainer';
import { PoppinsText } from '../../components/TextComponents/PoppinsText';
import * as ds from '../../constants/styles';

const SearchResult = ({ result, clearSearch }) => {
  const { countries, pinCountry, unpinCountry, isPinned } = useContext(
    CountriesContext
  );
  const { colors } = useContext(SettingsContext);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    setPinned(isPinned(result.alpha3Code));
  }, []);

  return (
    result.currencies[0] &&
    result.currencies[0].code && (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (pinned) {
            unpinCountry(result.alpha3Code);
            setPinned(false);
          } else {
            const pinSuccess = pinCountry(result);
            setPinned(pinSuccess);
            if (pinSuccess) clearSearch();
          }
        }}
      >
        <View style={styles.textContainer}>
          <>
            <PoppinsText italic primaryLightest>
              {result.name}
            </PoppinsText>
            <PoppinsText bold primary fontSize={ds.fontSize[2]}>
              {result.currencies[0].code} ({result.currencies[0].name})
            </PoppinsText>
          </>
        </View>
        <View style={styles.pinSymbol}>
          <MaterialCommunityIcons
            name={pinned ? 'pin' : 'pin-off-outline'}
            size={25}
            color={pinned ? colors.primary : colors.primary30}
          />
        </View>
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: ds.padding[2],
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: ds.primary20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pinSymbol: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchResult;
