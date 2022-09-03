import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  FlatList,
  Alert,
} from "react-native";
import messaging from "@react-native-firebase/messaging";
import PushNotification from "react-native-push-notification";

import CustomText from "../../../components/Text";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../theme/colors";
import { TextInput, TextInputMask, Checkbox } from "react-native-paper";
import fonts from "../../../theme/fonts";
import AlertModal from "../../../components/AlertModal";
import { Loading } from "../../../components/Loading";
import Fontisto from "react-native-vector-icons/Fontisto";
import auth from "@react-native-firebase/auth";
import { CommonActions } from "@react-navigation/routers";
import { GradientButton } from "../../../components/GradientButton";
import { connect } from "react-redux";
import CountryPicker from "react-native-country-picker-modal";
import {
  signin,
  getlanguageout,
  userlanguage,
} from "../../../redux/actions/auth";
import { Logo2, applogo, flag, english_logo } from "../../../assets";
import Foreground from "../../../components/Foreground";
import Geolocation from "@react-native-community/geolocation";
import AsyncStorage from "@react-native-community/async-storage";
import {
  requestUserPermission,
  notificationListener,
} from "../../../components/Notificationservice";
const Signup = ({
  navigation,
  signin,
  selectedLanguages,
  translation,
  getlanguageout,
  userlanguage,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [mnumber, setmnumber] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [language, setlanguage] = useState();
  const [val, setval] = useState([]);
  const [checkmark, setcheckmark] = useState(1);

  const [countryCode, setCountryCode] = useState("PK");
  const [country, setCountry] = useState("");
  const [callingCode, setcallingCode] = useState("92");
  const [craditcard, setcraditcard] = useState("");
  console.log("firsttranslation", translation);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setcallingCode(country.callingCode);
  };

  const subbmitotp = () => {
    (async () => {
      const formData = new FormData();
      formData.append("phone_no", mnumber);
      formData.append("status", "enduser");
      const res = await signin(formData);
      if (res.data.status == true) {
        if (res.data.data.user_privilidge == 1) {
          setShowAlert(true);
          setMsg(translation[126][selectedLanguages]);
          // setMsg("Your account is blocked,please contact support");
        } else {
          if (res.data.data.is_first_registered == 0) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "EditProfile" }],
              })
            );
          } else if (res.data.data.is_first_registered == 1) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Map" }],
              })
            );
          }
        }
      }
    })();
  };

  useEffect(() => {
    Geolocation.getCurrentPosition((data) => {});
  }, []);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const requestLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      requestLocationPermission();
    } else if (granted === PermissionsAndroid.RESULTS.BLOCKED) {
      requestLocationPermission();
    } else {
    }
  };
  requestLocationPermission();
  async function signInWithPhoneNumber(phoneNumber) {
    setLoading(true);

    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    navigation.navigate("OtpSignUp", {
      phoneNumber: phoneNumber,
      confirmation: confirmation,
    });
    setLoading(false);
  }

  const getdata = async () => {
    const valuedata = await AsyncStorage.getItem("userdata");
    console.log("asyncstorage", valuedata);
    if (valuedata == null) {
      setModalVisible(false);
    }
  };
  const setuserlanguage = async (id) => {
    const res = await userlanguage(id);
    await AsyncStorage.setItem("userdata", "2");
    setModalVisible(false);
  };
  let a = getdata();
  useEffect(() => {
    (async () => {
      const res = await getlanguageout();
      console.log("dataaaaa", res.data.data);
      setlanguage(res.data.data);
    })();
  }, []);

  const renderItem = ({ item, index }) => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <TouchableOpacity onPress={() => setuserlanguage(item.name)}>
        <Text style={{ fontSize: 16 }}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ ...styles.mainContainer }}>
      <KeyboardAwareScrollView
        contentContainerStyle={
          {
            // flexGrow: 1,
          }
        }
      >
        <Loading visible={loading} />
        {translation && (
          <View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Image
                source={applogo}
                resizeMode="contain"
                style={{
                  height: 80,
                  width: "50%",
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                marginTop: 10,
                borderWidth: 0,
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <CustomText
                  title={
                    // "Sign up"
                    translation[0][selectedLanguages]
                  }
                  type={"large"}
                  color={"black"}
                  style={{
                    fontSize: 22,
                    marginLeft: 20,
                    marginTop: 20,
                    fontWeight: "bold",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    paddingLeft: 20,
                    paddingTop: 20,
                    color: "gray",
                    fontFamily: fonts.PoppinsRegular,
                  }}
                >
                  {translation[1][selectedLanguages]}
                  {/* Please enter your mobile to start using app */}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                marginTop: "8%",
                flexDirection: "row",
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "15%",
                  height: 40,
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  borderRadius: 5,
                }}
              >
                <CountryPicker
                  containerButtonStyle={{ paddingLeft: 3, paddingTop: 5 }}
                  countryCode={countryCode}
                  // withCountryNameButton={true}
                  visible={false}
                  withFlag={true}
                  withCloseButton={true}
                  withAlphaFilter={true}
                  withCallingCode={true}
                  withEmoji={true}
                  withFilter={true}
                  withModal={true}
                  onSelect={onSelect}
                />
                <Entypo
                  name="chevron-small-down"
                  color={"black"}
                  size={15}
                  style={{ paddingTop: 12, marginLeft: -10 }}
                />
              </View>

              <TextInput
                style={{
                  width: "80%",
                  backgroundColor: "white",
                  height: 40,
                  fontSize: 20,
                  marginRight: 10,
                  marginLeft: 10,
                  borderBottomWidth: 1,
                }}
                selectionColor={colors.red}
                keyboardType={"number-pad"}
                onChangeText={(pno) => setmnumber(pno)}
                theme={{
                  colors: {
                    primary: colors.red,
                    underlineColor: "transparent",
                  },
                }}
                maxLength={10}
                // value={num}
                // keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                marginTop: 25,
              }}
            >
              <TextInput
                style={{
                  width: "98%",
                  backgroundColor: "white",
                  height: 30,
                  fontSize: 10,
                  borderBottomWidth: 1,
                }}
                placeholder="Password"
                selectionColor={colors.red}
                keyboardType={"number-pad"}
                onChangeText={(pno) => setmnumber(pno)}
                theme={{
                  colors: {
                    primary: colors.red,
                    underlineColor: "transparent",
                  },
                }}
                maxLength={10}
                // value={num}
                // keyboardType="numeric"
              />
              <TextInput
                style={{
                  width: "98%",
                  backgroundColor: "white",
                  height: 30,
                  fontSize: 10,
                  borderBottomWidth: 1,
                  marginTop: 20,
                }}
                placeholder="Address"
                selectionColor={colors.red}
                keyboardType={"default"}
                onChangeText={(pno) => setmnumber(pno)}
                theme={{
                  colors: {
                    primary: colors.red,
                    underlineColor: "transparent",
                  },
                }}
                maxLength={10}
                // value={num}
                // keyboardType="numeric"
              />
              <TextInput
                style={{
                  width: "98%",
                  backgroundColor: "white",
                  height: 30,
                  fontSize: 10,
                  borderBottomWidth: 1,
                  marginTop: 20,
                }}
                placeholder="Email"
                selectionColor={colors.red}
                keyboardType={"email-address"}
                onChangeText={(pno) => setmnumber(pno)}
                theme={{
                  colors: {
                    primary: colors.red,
                    underlineColor: "transparent",
                  },
                }}

                // value={num}
                // keyboardType="numeric"
              />
            </View>
            <View style={{ marginTop: 50, marginHorizontal: 10, elevation: 1 }}>
              <GradientButton
                title="Sign Up"
                onButtonPress={() => signInWithPhoneNumber("+92" + mnumber)}
                // onButtonPress={() =>
                //   subbmitotp()

                // }
              />
            </View>
          </View>
        )}
        {showAlert && (
          <AlertModal
            heading={msg}
            button1={translation[185][selectedLanguages]}
            // button1="OK"
            form={true}
            onOkPress={() => {
              setShowAlert(false);
            }}
          />
        )}
        <Loading visible={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return { user, selectedLanguages, translation };
};
export default connect(mapStateToProps, {
  signin,
  getlanguageout,
  userlanguage,
})(Signup);
