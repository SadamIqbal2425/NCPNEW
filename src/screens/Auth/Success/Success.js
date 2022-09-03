import React, { useReducer, useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";

import CustomText from "../../../components/Text";
import styles from "./styles";
import { SocialButton } from "../../../components/SocialButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//google
import colors from "../../../theme/colors";
import { TextInput, TextInputMask, Checkbox } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import { set } from "react-native-reanimated";
import { connect } from "react-redux";
import { bells, arrowright, Success1, P, Bye1 } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import {
  GradientButton,
  GradientsigninButton,
} from "../../../components/GradientButton";
import {
  LongPressGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import { logoutSuccess } from "../../../redux/actions/auth";

const Success = ({ route, translation, selectedLanguages }) => {
  const [secure, setisSecure] = useState(true);
  const [secure1, setisSecure1] = useState(true);
  const navigation = useNavigation();
  // const { screen } = route.params;
  let main = "";
  let sub = "";
  let btn = "";
  // if (screen == "payment") {
  //   main = translation[128][selectedLanguages];
  //   // "Congratulations"
  //   sub = translation[129][selectedLanguages];
  //   // "your payment has been successfull"
  //   btn = translation[130][selectedLanguages].trim();
  //   // "Back to Home"
  // } else {
  //   main = translation[5][selectedLanguages];
  //   // "Sign up Successful"
  //   sub = translation[9][selectedLanguages];
  //   // "Your account is now registered"
  //   btn = translation[103][selectedLanguages];
  //   // "Proceed"
  // }
  const handlepress = () => {
    navigation.navigate("Map");
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            // backgroundColor: "green",
          }}
        >
          <Image source={Success1} style={styles.logo_blue} />
        </View>
        <View style={{ flex: 5 }}>
          <CustomText
            // title={translation[5][selectedLanguages]}
            title={"Sign up Successful"}
            type={"large"}
            color={"black"}
            style={{
              fontSize: 20,
              alignSelf: "center",
              marginTop: 20,
              fontWeight: "bold",
            }}
          />
          <CustomText
            title={"Your account is now registered"}
            type={"normal"}
            color={"black"}
            style={{
              fontSize: 18,
              alignSelf: "center",
              marginTop: 5,
              marginBottom: 10,
            }}
          />
          <View style={{ paddingTop: "8%" }}>
            <GradientButton
              // title={translation[103][selectedLanguages]}
              title="Proceed"
              // onButtonPress={() => handlepress()}
              //   navigation.navigate("Profile", {
              //     params: { from: "Additional Information" },
              //   });
              // }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return { user, selectedLanguages, translation };
};
export default connect(mapStateToProps, {})(Success);
