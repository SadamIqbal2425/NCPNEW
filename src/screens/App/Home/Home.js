import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { mainimage } from "../../../assets";
const Home = ({}) => {
  const [firstwordq, setfirstwordq] = useState(0);
  const [firstwordw, setfirstwordw] = useState(0);
  const [firstworde, setfirstworde] = useState(0);
  const [firstwordr, setfirstwordr] = useState(0);
  const [firstwordt, setfirstwordt] = useState(0);
  const [firstwordy, setfirstwordy] = useState(0);
  const [firstwordu, setfirstwordu] = useState(0);
  const [firstwordi, setfirstwordi] = useState(0);
  const [firstworda, setfirstworda] = useState(0);
  const [firstwords, setfirstwords] = useState(0);
  const [firstwordd, setfirstwordd] = useState(0);
  const [firstwordf, setfirstwordf] = useState(0);
  const [firstwordg, setfirstwordg] = useState(0);
  const [firstwordh, setfirstwordh] = useState(0);
  const [firstwordj, setfirstwordj] = useState(0);
  const [firstwordk, setfirstwordk] = useState(0);
  const [firstwordl, setfirstwordl] = useState(0);
  const [firstwordz, setfirstwordz] = useState(0);
  const [firstwordx, setfirstwordx] = useState(0);
  const [firstwordc, setfirstwordc] = useState(0);
  const [firstwordv, setfirstwordv] = useState(0);
  const [firstwordb, setfirstwordb] = useState(0);
  const [firstwordn, setfirstwordn] = useState(0);
  const [firstwordm, setfirstwordm] = useState(0);
  const [firstwordo, setfirstwordo] = useState(0);
  const [firstwordp, setfirstwordp] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#693131",
      }}
    >
      <View>
        <Image
          source={mainimage}
          style={{ width: 365, height: 500, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          top: 220,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <TouchableOpacity onPress={() => setfirstwordq(1)}>
            <Text
              style={{
                paddingLeft: 8,
                paddingTop: 10,
                fontWeight: "bold",
                color: firstwordq === 1 ? "green" : "white",
              }}
            >
              Q
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordw(1)}>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstwordw === 1 ? "green" : "white",
              }}
            >
              W
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstworde(1)}>
            <Text
              style={{
                paddingLeft: 25,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstworde === 1 ? "green" : "white",
              }}
            >
              E
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordr(1)}>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstwordr === 1 ? "green" : "white",
              }}
            >
              R
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordt(1)}>
            <Text
              style={{
                paddingLeft: 25,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstwordt === 1 ? "green" : "white",
              }}
            >
              T
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <TouchableOpacity onPress={() => setfirstwordy(1)}>
            <Text
              style={{
                paddingLeft: 48,
                paddingTop: 5,
                fontWeight: "bold",
                color: firstwordy === 1 ? "green" : "white",
              }}
            >
              Y
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordu(1)}>
            <Text
              style={{
                paddingLeft: 25,
                paddingTop: 5,
                fontWeight: "bold",
                color: firstwordu === 1 ? "green" : "white",
              }}
            >
              U
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordi(1)}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstwordi === 1 ? "green" : "white",
              }}
            >
              I
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordo(1)}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontWeight: "bold",
                color: firstwordo === 1 ? "green" : "white",
              }}
            >
              O
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordp(1)}>
            <Text
              style={{
                paddingLeft: 23,
                paddingTop: 10,
                fontWeight: "bold",
                color: firstwordp === 1 ? "green" : "white",
              }}
            >
              P
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 370,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <TouchableOpacity onPress={() => setfirstworda(1)}>
            <Text
              style={{
                paddingLeft: 12,
                paddingTop: 2,
                fontWeight: "bold",
                color: firstworda === 1 ? "green" : "white",
              }}
            >
              A
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwords(1)}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 0,
                fontWeight: "bold",
                color: firstwords === 1 ? "green" : "white",
              }}
            >
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordd(1)}>
            <Text
              style={{
                paddingLeft: 25,
                paddingTop: 2,
                fontWeight: "bold",
                color: firstwordd === 1 ? "green" : "white",
              }}
            >
              D
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordf(1)}>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 3,
                fontWeight: "bold",
                color: firstwordf === 1 ? "green" : "white",
              }}
            >
              F
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordg(1)}>
            <Text
              style={{
                paddingLeft: 35,
                paddingTop: 4,
                fontWeight: "bold",
                color: firstwordg === 1 ? "green" : "white",
              }}
            >
              G
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <TouchableOpacity onPress={() => setfirstwordh(1)}>
            <Text
              style={{
                paddingLeft: 30,
                paddingTop: 5,
                fontWeight: "bold",
                color: firstwordh === 1 ? "green" : "white",
              }}
            >
              H
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordj(1)}>
            <Text
              style={{
                paddingLeft: 35,
                paddingTop: 5,
                fontWeight: "bold",
                color: firstwordj === 1 ? "green" : "white",
              }}
            >
              J
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordk(1)}>
            <Text
              style={{
                paddingLeft: 47,
                paddingTop: 3,
                fontWeight: "bold",
                color: firstwordk === 1 ? "green" : "white",
              }}
            >
              K
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordl(1)}>
            <Text
              style={{
                paddingLeft: 30,
                paddingTop: 2,
                fontWeight: "bold",
                color: firstwordl === 1 ? "green" : "white",
              }}
            >
              L
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 350,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setfirstwordz(1)}>
            <Text
              style={{
                paddingLeft: 8,
                paddingTop: 10,
                fontWeight: "bold",
                color: firstwordz === 1 ? "green" : "white",
              }}
            >
              Z
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordx(1)}>
            <Text
              style={{
                paddingLeft: 23,
                paddingTop: 10,
                fontWeight: "bold",
                color: firstwordx === 1 ? "green" : "white",
              }}
            >
              X
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordc(1)}>
            <Text
              style={{
                paddingLeft: 30,
                top: 10,
                fontWeight: "bold",
                color: firstwordc === 1 ? "green" : "white",
              }}
            >
              C
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordv(1)}>
            <Text
              style={{
                left: 35,
                top: 13,
                fontWeight: "bold",
                color: firstwordv === 1 ? "green" : "white",
              }}
            >
              V
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <TouchableOpacity onPress={() => setfirstwordb(1)}>
            <Text
              style={{
                paddingLeft: 55,
                top: 17,
                fontWeight: "bold",
                color: firstwordb === 1 ? "green" : "white",
              }}
            >
              B
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordn(1)}>
            <Text
              style={{
                paddingLeft: 50,
                top: 15,
                fontWeight: "bold",
                color: firstwordn === 1 ? "green" : "white",
              }}
            >
              N
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setfirstwordm(1)}>
            <Text
              style={{
                paddingLeft: 35,
                top: 10,
                fontWeight: "bold",
                color: firstwordm === 1 ? "green" : "white",
              }}
            >
              M
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: -170 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "35%",
            height: 40,
            backgroundColor: "pink",
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>Space</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return { user, selectedLanguages, translation };
};
export default connect(mapStateToProps, {})(Home);
