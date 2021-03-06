import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CountriesContext, SettingsContext } from '../../../DefaultContainer';
import Divider from '../../components/Divider';
import { PoppinsText } from '../../components/TextComponents/PoppinsText';
import * as ds from '../../constants/styles';
import { numberWithCommas } from '../../utils/Numbers';
import Stat from './Stat';

const PanelContent = ({ country, close }) => {
  const { unpinCountry } = useContext(CountriesContext);
  const { colors } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <PoppinsText
          style={{ maxWidth: '80%' }}
          bold
          primary
          fontSize={ds.fontSize[5]}
        >
          {country.name}
        </PoppinsText>
        <TouchableOpacity
          onPress={() => {
            unpinCountry(country.id);
            close();
          }}
        >
          <MaterialCommunityIcons
            name="pin-off"
            size={ds.fontSize[4]}
            color={colors.accent}
          />
        </TouchableOpacity>
      </View>
      <Divider width="90%" />
      <View style={styles.statsContainer}>
        <Stat iconName="home" text={country.capital} title="Capital" />
        <Stat
          iconName="user"
          text={numberWithCommas(country.population)}
          title="Population"
        />
        <Stat iconName="globe" text={country.tld} title="Top Level Domain" />
        <Stat iconName="dollar-sign" text={country.currency} title="Currency" />
        <Stat
          iconName="phone"
          text={'+' + country.callingCode}
          title="Calling Code"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: ds.margin[2],
    marginBottom: ds.margin[3],
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    marginVertical: ds.margin[3],
  },
  divider: {
    height: 1,
    width: '90%',
    backgroundColor: ds.primary,
    marginVertical: ds.margin[3],
  },
});

export default PanelContent;
