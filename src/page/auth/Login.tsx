import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../Constant/colors';
import {getFontFamily} from '../../common/utils/font';
import i18n from '../../i18n';
import {IconCloseEye, IconEye} from '../../assets/Icon';
import { useNavigation } from '@react-navigation/native';
import { REGISTER_PAGE } from '../../routes/constant';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

type RootStackParamList = {
  REGISTER_PAGE:undefined
};


const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();
  const lang = i18n.language

  const [showPass, setShowPass] = useState(false);

  const handleChangeLanguage = (newLang: string) => {
i18n.changeLanguage(newLang)
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
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
              } else {
                handleChangeLanguage('th');
              }
            }}>
            <View
              style={[styles.select_lang, {backgroundColor: color.primary}]}>
              <Text style={[styles.lang_text, {color: color.white}]}>
                {lang == 'th' ? 'TH' : 'EN'}
              </Text>
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
        <View style={{width: '100%', paddingHorizontal: 30, paddingTop: 50}}>
          <TextInput
            keyboardType="email-address"
            style={styles.text_box}
            placeholder={t('email')}
          />
          <View
            style={[
              styles.text_box,
              {
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              secureTextEntry={showPass}
              style={{
                fontSize: 20,
                marginVertical: 5,
                fontFamily: getFontFamily('semibold'),
                color: color.primary,
              }}
              placeholder={t('password')}
            />
            <TouchableOpacity onPress={() => handleShowPass()}>
              {showPass ? <IconEye /> : <IconCloseEye />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{marginTop: 15, alignSelf: 'flex-end'}}>
            <Text
              style={{
                color: color.primary,
                fontFamily: getFontFamily('semibold'),
                fontSize: 18,
              }}>
              {t('forgot_pass')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 15,
              alignSelf: 'flex-end',
              backgroundColor: color.primary,
              width: 100,
              alignItems: 'center',
              padding: 5,
              borderRadius: 100,
            }}>
            <Text
              style={{
                color: color.white,
                fontFamily: getFontFamily('semibold'),
                fontSize: 18,
              }}>
              {t('sign_in')}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            position: 'absolute',
            bottom: 30,
            alignItems:"center",
            justifyContent:"center"
          }}>
          <Text
            style={{
              fontFamily: getFontFamily('regular'),
              alignItems: 'center',
            }}>
            {t('dont_have_account')}
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate(REGISTER_PAGE)}>
            <Text
              style={{
                fontFamily: getFontFamily('bold'),
                color: color.primary,
              }}>{` ${t('create_account')}`}</Text>
          </TouchableOpacity>
        </View>

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
    padding: 10,
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
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lang_text: {
    fontFamily: getFontFamily('regular'),
  },
  text_box: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    backgroundColor: '#fff', // ต้องใส่ backgroundColor ด้วย
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: color.grey,
    fontFamily: getFontFamily('semibold'),
    color: color.primary,
    fontSize: 20,
  },
});
