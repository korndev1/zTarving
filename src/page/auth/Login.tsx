import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../Constant/colors';
import I18n from '../../i18n';
import { getFontFamily } from '../../common/utils/font';

const Login = () => {
  const [lang, setLang] = useState(I18n.locale);

  const handleChangeLanguage = (newLang: string) => {
    I18n.locale = newLang;
    setLang(newLang);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box_header}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: Dimensions.get('screen').width,
            justifyContent: 'flex-end',
            padding: 20,
          }}>
          <TouchableOpacity
            style={[
              styles.switch_button,
              {flexDirection: lang == 'th' ? 'row' : 'row-reverse'},
            ]}
            onPress={() => {
              if (lang == 'th') {
                handleChangeLanguage('en');
              } else if (lang == 'en') {
                handleChangeLanguage('th');
              }
            }}>
            <View
              style={[styles.select_lang, {backgroundColor: color.primary}]}>
              <Text style={[styles.lang_text,{color:color.white}]}>{lang == 'th' ? 'TH' : 'EN'}</Text>
            </View>
            <View style={[styles.select_lang]}>
              <Text style={styles.lang_text}>{lang == 'th' ? 'EN' : 'TH'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/image_icon/logo.png')}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </View>

      <View style={styles.box_login}>
        <Text style={{fontFamily:"Sukhumvit Set"}}>
          {I18n.t('dont_have_account')}
          <TouchableOpacity>
            <Text>{'create Account'}</Text>
          </TouchableOpacity>
        </Text>
        <Text >
          {I18n.t('dont_have_account')}
          <TouchableOpacity>
            <Text>{'create Account'}</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
  },
  box_login: {
    backgroundColor: color.white,
    flex: 0.8,
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  box_header: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'space-around',
  },
  switch_button: {
    backgroundColor: color.white,
    flexDirection: 'row',
    width: 65,
    padding: 5,
    height: 40,
    borderRadius: 100,
    justifyContent: 'space-between',
    
  },
  select_lang: {
    // padding:5,
    borderRadius: 100,
    height:30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lang_text:{
    fontFamily:getFontFamily('regular')
  }
});
