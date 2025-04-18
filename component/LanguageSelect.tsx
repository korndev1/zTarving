import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import I18n from '../src/i18n';

const LanguageSelect = () => {
  const [lang, setLang] = useState(I18n.locale);

  const handleChangeLanguage = (newLang: string) => {
    I18n.locale = newLang;
    setLang(newLang);
  };
  return (
    <View style={{position: 'absolute', right: 20, flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => handleChangeLanguage('th')}>
        <Text>{'th'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangeLanguage('en')}>
        <Text>{'en'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({});
