import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import Header from "./component/Header";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Header
        style={{ height: 80 }}
        back
        backColor="white"
        centerTitle="Sign Up"
        centerTitleStyle={{ color: "white", fontSize: 36 }}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 200,
          }}
        >
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button
            title="SignUp"
            buttonStyle={{ backgroundColor: "black", width: "100%" }}
            containerStyle={{ width: "100%" }}
          />
        </View>
        <View style={{ justifyContent: "center", paddingBottom: 15 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text styles={{ color: "black" }}>
              Already have your account? Sing in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
