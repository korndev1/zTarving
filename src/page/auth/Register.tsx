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
import {IconAlert, IconArrowLeft, IconCloseEye, IconEye, IconMail} from '../../assets/Icon';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n';
import {authService} from '../../services/auth';
import {checkEmail, register} from '../../type';
import Loading from '../../../component/Loading';
import Modal from 'react-native-modal';
import {isValidEmail} from '../../Constant/format';

const Register = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const lang = i18n.language;
  const [loading, setLoading] = useState(false);

  const [showPass, setShowPass] = useState(true);

  const [email, setEmail] = useState('');
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [emptyPass, setEmptyPass] = useState(false);
  const [minPass, setminPass] = useState(false);
  const [confirmpass, setConfirmPass] = useState('');
  const [emptyConPass, setEmptyConPass] = useState(false);
  const [notMatchPass, setNotMatchPass] = useState(false);
  const [name, setName] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [emptyLastName, setEmptyLastNAme] = useState(false);

  const [registerError, setRegisterError] = useState(false);
  const [alreadyEmail, setAlreadyEmail] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const resetEmptyAlert = () => {
    setEmptyEmail(false);
    setEmptyConPass(false);
    setEmptyLastNAme(false);
    setEmptyName(false);
    setEmptyPass(false);
  };

  const handleRegister = async () => {
    try {
      if (
        email == '' ||
        name == '' ||
        lastName == '' ||
        password == '' ||
        confirmpass == ''
      ) {
        setEmptyEmail(email == '');
        setEmptyConPass(confirmpass == '');
        setEmptyLastNAme(lastName == '');
        setEmptyName(name == '');
        setEmptyPass(password == '');
      } else if (confirmpass != password) {
        resetEmptyAlert();
        setminPass(false);
        setValidEmail(false);

        setNotMatchPass(true);
      } else if (!isValidEmail(email)) {
        resetEmptyAlert();
        setNotMatchPass(false);
        setminPass(false);
        setValidEmail(true);
      } else if (password.length < 5) {
        resetEmptyAlert();
        setValidEmail(false);
        setNotMatchPass(false);
        setminPass(true);
      } else {
        const body: checkEmail = {
          email: email,
        };
        const response = await authService.checkEmail(body);
        if (response.data.data == 'already') {
          setAlreadyEmail(true);
        } else {
          const body: register = {
            email: email,
            firstName: name,
            lastName: lastName,
            password: password,
          };
          const response = await authService.registerUser(body);
          setLoading(true);

          if (response.status == 201) {
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          }
        }
      }
    } catch (error: any) {
      if (error.status == 400) {
        setAlreadyEmail(true);
      } else {
        setRegisterError(true);
      }
      console.log(error.status);
    }
  };
  return (
    <View style={styles.container}>
      {loading && <Loading />}
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
            style={[styles.switch_button]}
            onPress={() => {
              navigation.goBack();
            }}>
            <IconArrowLeft />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/image_icon/logo.png')}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </View>

      <View style={styles.box_login}>
        <View style={{width: '100%', paddingHorizontal: 30, paddingTop: 50}}>
          {/*first name*/}
          <TextInput
            style={[
              styles.text_box,
              {borderColor: emptyName ? 'red' : color.grey},
            ]}
            placeholder={t('first_name')}
            value={name}
            onChangeText={text => setName(text)}
          />

          {/*last name*/}
          <TextInput
            style={[
              styles.text_box,
              {borderColor: emptyLastName ? 'red' : color.grey, marginTop: 15},
            ]}
            placeholder={t('last_name')}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />

          {/*email*/}
          <TextInput
            keyboardType="email-address"
            style={[
              styles.text_box,
              {
                borderColor: emptyEmail
                  ? 'red'
                  : validEmail
                  ? 'red'
                  : color.grey,
                marginTop: 15,
              },
            ]}
            placeholder={t('email')}
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            spellCheck={false}
          />
          {validEmail && (
            <Text
              style={{
                marginTop: 10,
                textAlign: 'right',
                fontFamily: getFontFamily('bold'),
                color: 'red',
              }}>
              {t('pls_correct_email')}
            </Text>
          )}
          {/*password*/}
          <View
            style={[
              styles.text_box,
              {
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: emptyPass ? 'red' : minPass ? 'red' : color.grey,
              },
            ]}>
            <TextInput
              secureTextEntry={showPass}
              style={{
                fontSize: 20,
                marginVertical: 5,
                fontFamily: getFontFamily('semibold'),
                color: color.primary,
                width: '85%',
              }}
              placeholder={t('password')}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => handleShowPass()}>
              {showPass ? <IconEye /> : <IconCloseEye />}
            </TouchableOpacity>
          </View>
          {minPass && (
            <Text
              style={{
                marginTop: 10,
                textAlign: 'right',
                fontFamily: getFontFamily('bold'),
                color: 'red',
              }}>
              {t('min_pass')}
            </Text>
          )}
          {/*confirm password*/}
          <View
            style={[
              styles.text_box,
              {
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: emptyConPass
                  ? 'red'
                  : notMatchPass
                  ? 'red'
                  : color.grey,
              },
            ]}>
            <TextInput
              secureTextEntry={showPass}
              style={{
                fontSize: 20,
                marginVertical: 5,
                fontFamily: getFontFamily('semibold'),
                color: color.primary,
                width: '85%',
              }}
              placeholder={t('confirm_pass')}
              value={confirmpass}
              onChangeText={text => setConfirmPass(text)}
            />
            <TouchableOpacity onPress={() => handleShowPass()}>
              {showPass ? <IconEye /> : <IconCloseEye />}
            </TouchableOpacity>
          </View>
          {notMatchPass && (
            <Text
              style={{
                marginTop: 10,
                textAlign: 'right',
                fontFamily: getFontFamily('bold'),
                color: 'red',
              }}>
              {t('not_match_pass')}
            </Text>
          )}
          <TouchableOpacity
            style={{
              marginTop: 15,
              alignSelf: 'flex-end',
              backgroundColor: color.primary,
              width: 100,
              alignItems: 'center',
              padding: 5,
              borderRadius: 100,
            }}
            onPress={() => handleRegister()}>
            <Text
              style={{
                color: color.white,
                fontFamily: getFontFamily('semibold'),
                fontSize: 18,
              }}>
              {t('sign_in')}
            </Text>
          </TouchableOpacity>
          <Text>{process.env.BASE_URL}</Text>
        </View>
      </View>
      <Modal
        isVisible={alreadyEmail}
        onBackdropPress={() => setAlreadyEmail(false)}>
        <View
          style={{
            backgroundColor: color.white,
            borderRadius: 10,
            width: 350,
            height: 300,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
            <IconMail/>
          <Text
            style={{
              fontFamily: getFontFamily('bold'),
              color: color.primary,
              fontSize: 30,
            }}>
            {t('already_email_title')}
          </Text>
          <Text
            style={{
              fontFamily: getFontFamily('medium'),
              color: color.black,
              fontSize: 16,
            }}>
            {t('already_email_desc')}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: color.primary,
              padding: 10,
              width: 80,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={()=>{
              setAlreadyEmail(false)
            }}
            >
            <Text
              style={{fontFamily: getFontFamily('bold'), color: color.white}}>
              {t('ok')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        isVisible={registerError}
        onBackdropPress={() => setRegisterError(false)}>
          <View
          style={{
            backgroundColor: color.white,
            borderRadius: 10,
            width: 350,
            height: 300,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
            <IconAlert/>
          <Text
            style={{
              fontFamily: getFontFamily('bold'),
              color: color.primary,
              fontSize: 30,
            }}>
            {t('regis_error_title')}
          </Text>
          <Text
            style={{
              fontFamily: getFontFamily('medium'),
              color: color.black,
              fontSize: 16,
            }}>
            {t('regis_error_desc')}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: color.primary,
              padding: 10,
              width: 80,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={()=>{
              setRegisterError(false)
            }}
            >
            <Text
              style={{fontFamily: getFontFamily('bold'), color: color.white}}>
              {t('ok')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    alignItems: 'center',
    justifyContent: 'center',
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
