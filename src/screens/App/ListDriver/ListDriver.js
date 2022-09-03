/** @format */

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  FlatList,
  ImageBackground,
  Alert,
} from "react-native";

import messaging from "@react-native-firebase/messaging";
import axios from "axios";
import CustomText from "../../../components/Text";
import { Input, InputPhone } from "../../../components/Input/Input";
import { CommonActions } from "@react-navigation/routers";
import { notificationListener } from "../../../components/Notificationservice";
import colors from "../../../theme/colors";
import { TextInput, TextInputMask, Checkbox } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import auth from "@react-native-firebase/auth";
//logo
import {
  Persons,
  arrowright,
  cross,
  house,
  Circled_favorite_off,
  Iconpaymen,
  cash,
  debit,
  P,
} from "../../../assets";

import { GradientButton } from "../../../components/GradientButton";
import Headers1 from "../../../components/Headers1";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//redux
import {
  signin,
  signupwithfb,
  rideaccepted,
  driverList,
  placeorder,
} from "../../../redux/actions/auth";
import { connect } from "react-redux";
import AlertModal from "../../../components/AlertModal";
import { Loading } from "../../../components/Loading";
import AsyncStorage from "@react-native-community/async-storage";

import Modal from "react-native-modal";
import { Header, Badge } from "react-native-elements";
import fonts from "../../../theme/fonts";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Settings, LoginManager, Profile } from "react-native-fbsdk-next";
import CountDown from "react-native-countdown-component";
const { height: DEVICE_HEIGHT } = Dimensions.get("window");
const ImagePicker = require("react-native-image-picker");
var data = [1, 2, 3];
const ListDriver = ({
  signin,
  route,
  signupwithfb,
  driverList,
  translation,
  selectedLanguages,
  user,
  placeorder,
  rideaccepted,
}) => {
  const navigation = useNavigation();

  const [intervell, setintervell] = useState(false);

  const [timeer, settimeer] = useState("");

  // const [drivers, setdrivers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [msg, setMsg] = useState("");
  const [testing, settesting] = useState("");
  const [showAlert1, setShowAlert1] = useState(false);
  const [driversdetail, setdriversdetail] = useState([]);
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(true);
  const tripstatus = route.params;
  var drivers = [1, 2, 3];
  useFocusEffect(
    React.useCallback(() => {
      setloading(true);

      (async () => {
        const fomData = new FormData();
        fomData.append("from_lat", tripstatus.picklati);
        fomData.append("from_longi", tripstatus.picklongi);
        fomData.append("u_id", user.u_id);
        fomData.append("to_lat", tripstatus.droplati);
        fomData.append("to_longi", tripstatus.droplongo);
        console.log("myformdata===>1", fomData);
        const res = await driverList(fomData);

        if (res.data.status == true) {
          setdrivers(res.data.data);
          setmessage(res.data.message);
        } else {
          setdrivers("");
          setmessage(res.data.message);
        }
        setloading(false);
      })();
    }, [tripstatus])
  );

  console.log("driversdetail", driversdetail);
  const handlefinish = async (text) => {
    setModalVisible(!isModalVisible);
  };

  const placeride = async (text) => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    formData.append("driver_id", driversdetail.u_id);
    formData.append("from_address", tripstatus.pickadd);
    formData.append("from_lat", tripstatus.picklati);
    formData.append("from_long", tripstatus.picklongi);
    formData.append("to_long_address", tripstatus.dropadd);
    formData.append("to_lat", tripstatus.droplati);
    formData.append("to_long", tripstatus.droplongo);
    formData.append("est_amt", driversdetail.estimateamt);
    formData.append("total_distance", driversdetail.totaldistance);
    const res = await placeorder(formData);
    console.log("myresponse", res);
    if (res.data.status == true) {
      settimeer(res.data.data.time);
      setintervell(true);
      setModalVisible1(false);
      setModalVisible(true);
    } else {
      setModalVisible1(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let j = 0;
      const api_interval = setInterval(() => {
        (async () => {
          const fomData = new FormData();

          fomData.append("u_id", user.u_id);
          const res = await rideaccepted(fomData);
          console.log("apiresponsedata", res);

          if (res.data.status === true) {
            setModalVisible(false);
            navigation.navigate("ArrivalStatus");
          } else if (res.data.status === 0) {
            // settripid("21");
            // settesting();

            setModalVisible(false);

            alert(res.data.message);
            // "Driver has rejected your request,Pls choose another one."
            // setShowAlert1(true);
          }
        })();
      }, 7000);
      return () => {
        clearInterval(api_interval);
      };
    })
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = (item) => {
    setdriversdetail(item);
    setModalVisible1(true);
  };
  const closemodal = () => {
    setModalVisible(false);
  };
  const closemodal1 = () => {
    setModalVisible1(false);
  };

  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      console.log("remoteMessage listdriver", remoteMessage);

      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: "2223", // (required) channelId, if the channel doesn't exist, notification will not trigger.
        id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: remoteMessage.data, // (optional)
        message: remoteMessage.notification.body, // (required)
        soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      });

      if (remoteMessage.data?.scree_name == "Map123") {
        setModalVisible(false);
      } else if (remoteMessage.data?.scree_name == "ridescreen") {
        setModalVisible(false);
      }
    });
  }, [notificationListener]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          style={{
            flex: 1,
            marginHorizontal: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            marginBottom: 5,
            borderRadius: 10,
            paddingVertical: 10,
            marginTop: 15,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "18%",
                }}
              >
                <Image
                  source={Persons}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 80 / 2,
                  }}
                />
              </View>
              <View
                style={{
                  width: "60%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingLeft: 10,
                    }}
                  >
                    Product 1
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "15%",
                  alignItems: "flex-end",
                  marginTop: 15,
                }}
              >
                <Entypo name="chevron-small-right" size={15} />
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 16,
                    marginLeft: -18,
                  }}
                >
                  Rs.520
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* <Loading visible={loading} /> */}
      <SafeAreaView>
        <Headers1
          title={translation[150][selectedLanguages].trim()}
          //  title='List of drivers'
          screen={"false"}
        />

        <View>
          <FlatList
            data={drivers}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
        {showAlert1 && (
          <AlertModal
            heading={msg}
            button1={translation[185][selectedLanguages]}
            // button1="OK"
            button2={translation[99][selectedLanguages]}
            // button2="Cancel"
            form="abc"
            onOkPress={() => {
              setShowAlert1(false);
            }}
          />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return {
    user,
    selectedLanguages,
    translation,
  };
};
export default connect(mapStateToProps, {
  driverList,
  placeorder,
  rideaccepted,
})(ListDriver);
