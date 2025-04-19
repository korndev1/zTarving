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
import I18n from '../../i18n';
import {getFontFamily} from '../../common/utils/font';
import {IconArrowLeft, IconCloseEye, IconEye} from '../../assets/Icon';
import { useNavigation } from '@react-navigation/native';

const Register= () => {
  const navigation = useNavigation()
  const [lang, setLang] = useState(I18n.locale);
  const [showPass, setShowPass] = useState(false);

  const handleChangeLanguage = (newLang: string) => {
    I18n.locale = newLang;
    setLang(newLang);
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
            justifyContent: 'flex-start',
            padding: 20,
          }}>
          <TouchableOpacity
            style={[
              styles.switch_button,
             
            ]}
            onPress={() => {
             navigation.goBack()
            }}>
            <IconArrowLeft/>
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
            style={styles.text_box}
            placeholder={I18n.t('first_name')}
          />
            <TextInput
            style={[styles.text_box,{marginTop:15}]}
            placeholder={I18n.t('last_name')}
          />
          <TextInput
            keyboardType="email-address"
            style={[styles.text_box,{marginTop:15}]}
            placeholder={I18n.t('email')}
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
              placeholder={I18n.t('password')}
            />
            <TouchableOpacity onPress={() => handleShowPass()}>
              {showPass ? <IconEye /> : <IconCloseEye />}
            </TouchableOpacity>
          </View>
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
              placeholder={I18n.t('confirm_pass')}
            />
            <TouchableOpacity onPress={() => handleShowPass()}>
              {showPass ? <IconEye /> : <IconCloseEye />}
            </TouchableOpacity>
          </View>
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
              {I18n.t('sign_in')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    backgroundColor: 'rgba(255,255,255,0.25)',
    width: 40,
    padding: 5,
    height: 40,
    borderRadius: 100,
    alignItems:"center",
    justifyContent:"center"
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
