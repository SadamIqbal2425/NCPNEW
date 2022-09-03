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
const KeyboardLayout = ({}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#191919",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ width: "14%", justifyContent: "center", marginLeft: 10 }}
          >
            <Text style={{ color: "white" }}>Results</Text>
          </View>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 50,
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginLeft: 30,
              height: 60,
              borderLeftColor: "white",
              borderStartWidth: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: "12%",
                  height: 20,
                  backgroundColor: "red",
                  marginTop: 39,
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "12%",
                  backgroundColor: "white",
                  marginLeft: 5,
                  marginTop: 9,
                  height: 50,
                }}
              ></TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: "12%",
                  height: 20,
                  backgroundColor: "red",
                  marginTop: 39,
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "12%",

                  backgroundColor: "#9b71fc",
                  marginLeft: 5,
                  marginTop: 9,
                  height: 50,
                }}
              ></TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: "12%",
                  height: 20,
                  backgroundColor: "red",
                  marginTop: 39,
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "12%",
                  backgroundColor: "#9b71fc",
                  marginLeft: 5,
                  marginTop: 9,
                  height: 50,
                }}
              ></TouchableOpacity>
            </View>
          </View>
          <View style={{ position: "absolute", left: 70, top: 40 }}>
            <Text style={{ color: "white", fontSize: 10 }}>100</Text>
          </View>
          <View style={{ position: "absolute", left: 80, bottom: -4 }}>
            <Text style={{ color: "white", fontSize: 10 }}>0</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              paddingLeft: 50,
              width: "50%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 8, paddingLeft: 2 }}>
              (s) (%)
            </Text>
            <Text style={{ color: "white", fontSize: 8, paddingTop: 5 }}>
              Tip Typings
            </Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={{ color: "white", fontSize: 8, paddingLeft: 2 }}>
              (s) (%)
            </Text>
            <Text style={{ color: "white", fontSize: 8, paddingTop: 5 }}>
              DVORAK
            </Text>
          </View>
          <View style={{ width: "30%", paddingLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 8, paddingLeft: 2 }}>
              (s) (%)
            </Text>
            <Text style={{ color: "white", fontSize: 8, paddingTop: 5 }}>
              COLEMAN
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              width: "13%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>test no</Text>
          </View>
          <View
            style={{
              width: "27%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "bold", color: "white" }}>
              Tip Typing Layout
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "bold", color: "white" }}>
              DVORAK Layout
            </Text>
          </View>
          <View
            style={{
              width: "27%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "bold", color: "white" }}>
              COLEMAN Layout
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "10%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>1</Text>
          </View>
          <View
            style={{
              width: "82%",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: "white",
            }}
          >
            <View style={{ width: "27%", marginLeft: 8 }}>
              <Text style={{ fontSize: 9, color: "white" }}>
                Error Percentage=
              </Text>
              <Text style={{ fontSize: 10, color: "white" }}>Time=</Text>
            </View>
            <View style={{ width: "27%" }}>
              <Text style={{ fontSize: 9, color: "white" }}>
                Error Percentage=
              </Text>
              <Text style={{ fontSize: 10, color: "white" }}>Time=</Text>
            </View>
            <View style={{ width: "28%" }}>
              <Text style={{ fontSize: 9, color: "white" }}>
                Error Percentage=
              </Text>
              <Text style={{ fontSize: 10, color: "white" }}>Time=</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  const { user, selectedLanguages, translation } = state.auth;
  return { user, selectedLanguages, translation };
};
export default connect(mapStateToProps, {})(KeyboardLayout);
