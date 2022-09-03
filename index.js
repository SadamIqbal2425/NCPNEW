/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import PushNotification, { Importance } from "react-native-push-notification";

//Creating Channel Start
PushNotification.createChannel(
  {
    channelId: "my_channel", // (required)
    channelName: "my_channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    // (optional) default: true. Creates the default vibration patten if true.
    // soundName: "my_hello.mp3",
    // playSound: true,
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
// PushNotification.getChannels(function (channel_ids) {
//   console.log("checkchannelid", channel_ids);
// });
//Creating Channel End

// Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log("Message handled in the background!", remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
