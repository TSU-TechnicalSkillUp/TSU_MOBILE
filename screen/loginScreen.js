import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Input, Button } from "react-native-elements";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        {/* 아이콘 이미지 자리 */}
        {/* <Image /> */}
        <Text style={{ color: "white" }}>
          Open up App.js to start working on your app!
        </Text>
      </View>
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
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </View>
        <View>
          <Button
            title="Login"
            buttonStyle={{ backgroundColor: "black", width: "100%" }}
            containerStyle={{ width: "100%" }}
          />
        </View>
        <View style={{ justifyContent: "center", paddingBottom: 15 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text styles={{ color: "black" }}>
              Don't have any account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
