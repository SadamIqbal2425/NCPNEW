/** @format */

import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import AlertModal from "../../../components/AlertModal";
import colors from "../../../theme/colors";
import Foundation from "react-native-vector-icons/Foundation";
import { Persons, addphoto, cross } from "../../../assets";
import {
  getTriphistory,
  addfavlocation,
  blockdriver,
  adddriverfaviriot,
} from "../../../redux/actions/auth";
import { connect } from "react-redux";
import Headers1 from "../../../components/Headers1";
import CustomText from "../../../components/Text";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
const { height: DEVICE_HEIGHT } = Dimensions.get("window");
const TripHistory = ({
  getTriphistory,
  selectedLanguages,
  translation,
  user,
  blockdriver,
  addfavlocation,
  adddriverfaviriot,
}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [myfaveriot, setmyfaveriot] = useState([]);
  const [selected, setselected] = useState();
  const [placename, setplacename] = useState("");
  const [faveriotdriver, setfaveriotdriver] = useState([]);
  const [msg, setMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [tab, setTab] = useState(2);
  // const [triphistory, settriphistory] = useState([]);
  var triphistory = [1, 2, 3];
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const fomData = new FormData();
        fomData.append("u_id", user.u_id);

        const res = await getTriphistory(fomData);
        if (res.data.status == true) {
          settriphistory(res.data.data);
        } else {
        }
      })();
    }, [])
  );

  const addfavhandle = () => {
    let longi = "";
    let lati = "";
    let address = "";
    if (selected === true) {
      lati = myfaveriot.trip_from_lat;
      longi = myfaveriot.trip_from_long;
      address = myfaveriot.trip_from_address;
    } else {
      lati = myfaveriot.trip_to_lat;
      longi = myfaveriot.trip_to_long;
      address = myfaveriot.trip_to_address;
    }
    (async () => {
      const fomData = new FormData();
      fomData.append("u_id", user.u_id);
      fomData.append("name", placename);
      fomData.append("location_lat", lati);
      fomData.append("location_long", longi);
      fomData.append("location_address", address);

      const res = await addfavlocation(fomData);
      if (res.data.status == true) {
        setShowAlert(true);
        setMsg(res.data.message);
        setModalVisible1(false);
      } else {
        setModalVisible1(false);
      }
    })();

    setModalVisible1(false);
  };

  const addtofaveretdriver = () => {
    (async () => {
      const fomData = new FormData();
      fomData.append("u_id", user.u_id);
      fomData.append("otheruser_id", faveriotdriver.u_id);

      const res = await adddriverfaviriot(fomData);
      if (res.data.status == true) {
        alert(res.data.message);
      } else {
      }
    })();
    setModalVisible(!isModalVisible);
  };

  const addtoblockdriver = () => {
    (async () => {
      const fomData = new FormData();
      fomData.append("u_id", user.u_id);
      fomData.append("otheruser_id", faveriotdriver.u_id);

      const res = await blockdriver(fomData);
      if (res.data.status == true) {
        alert(res.data.message);
      } else {
      }
    })();

    setModalVisible(!isModalVisible);
  };

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setfaveriotdriver(item);
  };

  const toggleModalfrom = (item) => {
    setmyfaveriot(item);
    setselected(true);
    setModalVisible1(!isModalVisible1);
  };

  const toggleModalto = (item) => {
    setmyfaveriot(item);
    setselected(false);
    setModalVisible1(!isModalVisible1);
  };

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const closemodal = () => {
    setModalVisible(!isModalVisible);
  };
  const closemodal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const Item = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 4,
          elevation: 5,
          borderRadius: 10,
          paddingBottom: 10,
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <View style={{ width: "30%" }}>
              <Text
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                }}
              >
                14:50
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                }}
              >
                23 jan,2021
              </Text>
            </View>

            <View style={{ width: "30%" }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                {/* Car Reg No */}
                order # 23A45t
              </Text>

              {/*  */}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <View style={{}}>
              <Image
                source={Persons}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 70 / 2,
                  marginTop: 10,
                }}
              />
            </View>
            <View style={{ paddingLeft: 15, paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Product 1
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Foundation
                  name="marker"
                  color={"red"}
                  size={18}
                  style={{ paddingTop: 5 }}
                />
                <Text style={{ fontSize: 10, color: "gray", paddingLeft: 10 }}>
                  SW18 6TB,London,UK
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 11,
                  color: "black",
                  fontWeight: "bold",
                  paddingTop: 5,
                }}
              >
                Rs 100
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Headers1
        // title={translation[13][selectedLanguages].trim()}
        title="Order History"
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setTab(1);
          }}
          style={[
            styles.categoryContainer,
            {
              marginRight: 10,
              // elevation: tab == 1 ? 5 : 0,
              borderBottomWidth: 2,
              borderBottomColor: tab == 1 ? "#7F1DFF" : "#D3D3D3",
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <CustomText
              //title={`Unread (${unreadMsgs})`}
              title={"Unread"}
              type={tab === 1 ? "bold" : "medium"}
              color={tab === 1 ? colors.secondary : "#464646"}
              style={{ fontSize: 15 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setTab(2);
          }}
          style={[
            styles.categoryContainer,
            {
              // elevation: tab == 2 ? 5 : 0,
              borderBottomWidth: 2,
              borderBottomColor: tab == 2 ? "#7F1DFF" : "#D3D3D3",
            },
          ]}
        >
          <CustomText
            title={"All"}
            type={tab !== 1 ? "bold" : "medium"}
            color={tab !== 1 ? colors.secondary : "#464646"}
            style={{ fontSize: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <FlatList
          data={triphistory}
          renderItem={Item}
          keyExtractor={(item) => item}
        />
        {showAlert && (
          <AlertModal
            heading={msg}
            button1={translation[185][selectedLanguages]}
            // button1="OK"
            button2={translation[99][selectedLanguages]}
            // button2="Cancel"
            form="abc"
            onOkPress={() => {
              setShowAlert(false);
            }}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    height: "110%",
    width: "110%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  inputContainer: {
    justifyContent: "center",
  },
  input: {
    height: 50,
  },
  icon: {
    position: "absolute",
    right: 10,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: colors.primary,
    marginTop: 50,
    borderRadius: 10,
    height: DEVICE_HEIGHT > 600 ? 40 : 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  primaryText: {
    color: colors.white,
    fontSize: DEVICE_HEIGHT > 600 ? 16 : 12,
  },
});

const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return { user, selectedLanguages, translation };
};
export default connect(mapStateToProps, {
  getTriphistory,
  addfavlocation,
  blockdriver,
  adddriverfaviriot,
})(TripHistory);
