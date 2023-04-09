import EncryptedStorage from 'react-native-encrypted-storage';

import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  ToastAndroid,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
// import {LinearGradient} from 'react-native-linear-gradient';

import {SliderBox} from 'react-native-image-slider-box';
import {HStack, Spacer, NativeBaseProvider, View} from 'native-base';

const Login = ({navigation}) => {
  const [showModal, setModal] = useState(false);
  const [screen, setScreen] = useState('get');
  const [number, onChangeNumber] = useState('');
  const [verifyHash, setVerifyHash] = useState('');
  const [otp, onChangeOtp] = useState('');
  const loginImages = [
    require('../Assets/login1.png'),
    require('../Assets/login2.png'),
  ];
  // const handlePress = async () => {};
  const handlePressNext = async () => {
    let longNumber = '+91' + number;
    if (number.length === 10) {
      let body = {
        c_number: longNumber,
      };
      const option = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
      };
      try {
        let response = await fetch(
          'https://me-and-my-tree-server2-bmdx.vercel.app/api/sendotp',
          // 'https://me-and-my-tree-server2-bmdx.vercel.app/test',
          option,
        );
        let json = await response.json();
        console.log(json);

        // if json.status is 1 means otp send success
        if (json.success === 1) {
          await EncryptedStorage.setItem('number', number);
          setVerifyHash(json.hash);
          setScreen('verify');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show('Invalid phone no!', ToastAndroid.SHORT);
    }
  };
  const handlePhonePress = () => {
    setModal(true);
  };
  const handlePressBack = () => {
    setModal(false);
  };
  const handlePressBackVerify = () => {
    setScreen('get');
  };

  const handlePressNextVerify = async () => {
    let longNumber = '+91' + number;

    if (otp.length === 6) {
      let body = {
        c_number: longNumber,
        hash: verifyHash,
        c_otp: otp,
      };
      const option = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
      };
      try {
        let response = await fetch(
          'https://me-and-my-tree-server2-bmdx.vercel.app/api/verifyotp',
          option,
        );
        let json = await response.json();
        console.log(json);
        // if json.success is 1 means otp send success
        if (json.success === 1) {
          await EncryptedStorage.setItem('number', number);
          await EncryptedStorage.setItem('login', 'true');
          // let isWorker = json.isWorker.toString();
          // await EncryptedStorage.setItem('isWorker', isWorker);
          // console.log('Logging the worker');
          // console.log(isWorker);
          navigation.navigate('Home');
        } else {
          ToastAndroid.show('Invalid otp!', ToastAndroid.SHORT);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show('Invalid otp!', ToastAndroid.SHORT);
    }
  };
  // const handleFbPress = () => {};

  const checkIfLogin = async () => {
    let login = await EncryptedStorage.getItem('login');
    // login = 'false';
    if (login === 'true') {
      console.log('logged in already!');
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    checkIfLogin();
  }, []);

  return (
    <>
      <NativeBaseProvider>
        <View style={styles.body}>
          {/* <LinearGradient
            colors={['#78FFB7', '#004E24']}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={styles.gradientBg}
          /> */}
          <View style={styles.header}>
            <SliderBox
              images={loginImages}
              autoplay={true}
              circleLoop={true}
              sliderBoxHeight={490}
              dotStyle={{height: 0}}
              autoplayInterval={4000}
            />
          </View>
          {showModal === false ? (
            <View style={styles.main}>
              <View style={styles.section}>
                {/* <Text style={styles.heading}> Login with</Text> */}

                <Pressable style={[styles.innerSection]}>
                  <Image
                    source={require('../Assets/google.png')}
                    style={[
                      styles.icon,
                      {transform: [{rotate: '-90deg'}]},
                    ]}></Image>
                  <Text style={styles.text}>Sign in with Google</Text>
                </Pressable>
                <Pressable style={[styles.innerSection]}>
                  <Image
                    source={require('../Assets/facebook.png')}
                    style={styles.icon}></Image>
                  <Text style={styles.text}>Sign in with Facebook</Text>
                </Pressable>
                <Pressable style={[styles.phoneNumber]}>
                  <Text style={styles.blackText}>or sign in with </Text>
                  <Pressable onPress={handlePhonePress}>
                    <Text style={[styles.underline]}>Phone Number</Text>
                  </Pressable>
                  <Pressable onPress={handlePhonePress}>
                    <Image
                      source={require('../Assets/rightArrow.png')}
                      style={styles.arrow}></Image>
                  </Pressable>
                </Pressable>
              </View>
            </View>
          ) : (
            <>
              <View style={styles.main}></View>
              {screen === 'get' ? (
                <View>
                  <View style={styles.OtpHeader}>
                    <HStack px={3} top={2}>
                      <Pressable onPress={handlePressBack}>
                        <Image
                          source={require('../Assets/back.png')}
                          style={{height: 50, width: 50}}></Image>
                      </Pressable>
                      <Spacer />
                      <Text style={{top: 13, fontWeight: 'bold'}}>
                        Step 1 of 2
                      </Text>
                    </HStack>
                    <Image
                      source={require('../Assets/logoFinal.png')}
                      style={{height: '60%', top: RFPercentage(-2)}}
                      resizeMode="contain"></Image>
                    <Text
                      style={[
                        {
                          top: RFPercentage(-9),
                          fontSize: RFPercentage(3.5),
                          fontWeight: '600',
                        },
                      ]}>
                      Enter you number
                    </Text>
                    <Text
                      style={[
                        {top: RFPercentage(-8), fontSize: RFPercentage(2.3)},
                      ]}>
                      You will get 4 digit OTP
                    </Text>
                    <Text
                      style={[
                        {top: RFPercentage(-8), fontSize: RFPercentage(2.3)},
                      ]}>
                      on entered number
                    </Text>
                  </View>
                  <View style={styles.OtpModal}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="+91"
                      keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                      <Pressable
                        onPress={handlePressNext}
                        style={styles.button}>
                        <Text style={[{color: 'white'}, styles.btnText]}>
                          Get OTP
                        </Text>
                      </Pressable>
                    </View>
                    <HStack top={8}>
                      <Text style={{top: -2}}>____________________</Text>
                      <Text style={{fontSize: RFPercentage(2.3)}}>
                        {' '}
                        Other Options{' '}
                      </Text>
                      <Text style={{top: -2}}>____________________</Text>
                    </HStack>
                    <View style={styles.otherOptions}>
                      <Pressable style={[styles.innerSection]}>
                        <Image
                          source={require('../Assets/google.png')}
                          style={[
                            styles.icon,
                            {transform: [{rotate: '-90deg'}]},
                          ]}></Image>
                        <Text style={styles.text}>Sign in with Google</Text>
                      </Pressable>
                      <Pressable style={[styles.innerSection]}>
                        <Image
                          source={require('../Assets/facebook.png')}
                          style={styles.icon}></Image>
                        <Text style={styles.text}>Sign in with Facebook</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  <View>
                    <View style={styles.OtpHeader}>
                      <HStack px={3} top={2}>
                        <Pressable onPress={handlePressBackVerify}>
                          <Image
                            source={require('../Assets/back.png')}
                            style={{height: 50, width: 50}}></Image>
                        </Pressable>
                        <Spacer />
                        <Text style={{top: 13, fontWeight: 'bold'}}>
                          Step 2 of 2
                        </Text>
                      </HStack>
                      <Image
                        source={require('../Assets/logoFinal.png')}
                        style={{height: '60%', top: RFPercentage(-2)}}
                        resizeMode="contain"></Image>
                      <Text
                        style={[
                          {
                            top: RFPercentage(-9),
                            fontSize: RFPercentage(3.5),
                            fontWeight: '600',
                          },
                        ]}>
                        Enter your OTP
                      </Text>
                      <Text
                        style={[
                          {top: RFPercentage(-8), fontSize: RFPercentage(2.3)},
                        ]}>
                        After you've entered the OTP
                      </Text>
                      <Text
                        style={[
                          {top: RFPercentage(-8), fontSize: RFPercentage(2.3)},
                        ]}>
                        tap verify to proceed
                      </Text>
                    </View>
                    <View style={styles.OtpModal}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeOtp}
                        value={otp}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                      />
                      <View style={styles.buttonContainer}>
                        <Pressable
                          onPress={handlePressNextVerify}
                          style={[styles.button, {flexDirection: 'row'}]}>
                          <Text style={[{color: 'white'}, styles.btnText]}>
                            Verify
                          </Text>
                          <Image
                            source={require('../Assets/verifyIcon.png')}
                            style={styles.verifyIcon}></Image>
                        </Pressable>
                      </View>
                      <HStack top={8}>
                        <Text style={{top: -2}}>____________________</Text>
                        <Text style={{fontSize: RFPercentage(2.3)}}>
                          {' '}
                          Other Options{' '}
                        </Text>
                        <Text style={{top: -2}}>____________________</Text>
                      </HStack>
                      <View style={styles.otherOptions}>
                        <Pressable style={[styles.innerSection]}>
                          <Image
                            source={require('../Assets/google.png')}
                            style={[
                              styles.icon,
                              {transform: [{rotate: '-90deg'}]},
                            ]}></Image>
                          <Text style={styles.text}>Sign in with Google</Text>
                        </Pressable>
                        <Pressable style={[styles.innerSection]}>
                          <Image
                            source={require('../Assets/facebook.png')}
                            style={styles.icon}></Image>
                          <Text style={styles.text}>Sign in with Facebook</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </>
              )}
            </>
          )}
        </View>
      </NativeBaseProvider>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradientBg: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  header: {
    //     backgroundColor: "red",
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    //     padding: "10%",
  },
  main: {
    flex: 3.5,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  section: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0DB462',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    paddingTop: RFPercentage(4),
  },
  heading: {
    textAlign: 'center',
    fontSize: RFPercentage(3),
    marginBottom: RFPercentage(3),
  },
  innerSection: {
    flexDirection: 'row',
    width: '85%',
    borderRadius: 15,
    alignSelf: 'center',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: RFPercentage(2),
  },
  phoneNumber: {
    flexDirection: 'row',
    width: '85%',
    // borderRadius: 15,
    alignSelf: 'center',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "black",
    marginTop: RFPercentage(2),
  },
  // phoneSection: { backgroundColor: "#00CB1D" },
  // fbSection: { backgroundColor: "#4267B2" },
  text: {
    color: 'white',
  },
  blackText: {
    color: 'black',
    fontSize: RFPercentage(2),
  },
  icon: {
    height: 25,
    width: 25,
    // position: "absolute",
    right: 5,
  },
  arrow: {
    height: 10,
    width: 10,
    left: 5,
    top: 1,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  OtpHeader: {
    height: 450,
    backgroundColor: 'white',
    //  flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    //     padding: "10%",
    top: RFPercentage(-50),
  },
  otherOptions: {
    height: '75%',
    width: '100%',
    // backgroundColor: "#0DB462",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    paddingTop: RFPercentage(5),
  },
  OtpModal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0DB462',
    // borderRadius: 25,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    position: 'absolute',
    // top: RFPercentage(4),
    alignSelf: 'center',
    // justifyContent: "center",
    alignItems: 'center',
    paddingVertical: RFPercentage(3),
  },
  input: {
    height: 55,
    width: '85%',
    // margin: 12,
    borderWidth: 5,
    // backgroundColor: "#b4b4b4",
    backgroundColor: 'white',
    borderRadius: 15,
    // padding: 10,
    color: 'black',
    marginBottom: 25,
    paddingHorizontal: 25,
    // textAlign: "center",
  },
  buttonContainer: {
    // marginTop: RFPercentage(3),
    // flexDirection: "row",
    // justifyContent: "space-between",
    width: '60%',
  },
  button: {
    // paddingHorizontal: 80,
    alignContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
  },
  verifyIcon: {
    height: 20,
    width: 20,
    // position: "absolute",
    left: 5,
  },
  backButton: {
    borderWidth: 2,
    borderColor: '#004E24',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
