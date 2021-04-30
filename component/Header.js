import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
  const {
    style,
    left,
    center,
    right,
    leftStyle,
    leftTitle,
    leftIcon,
    leftTitleStyle,
    leftPress,
    leftIconSize,
    leftIconColor,
    centerStyle,
    centerTitle,
    centerIcon,
    centerTitleStyle,
    centerPress,
    centerIconSize,
    centerIconColor,
    statusBarProps,
    rightStyle,
    rightTitle,
    rightIcon,
    rightTitleStyle,
    rightPress,
    rightIconSize,
    rightIconColor,
    back,
    backColor,
    backNavigation,
    backSize = 30,
    backContainerStyle,
    backStyle,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {back && (
        <TouchableOpacity
          style={[styles.backContainerStyle, backContainerStyle]}
          activeOpacity={0.8}
          onPress={() => {
            backNavigation ? backNavigation.goBack() : console.log('Attach Navigation!');
          }}
        >
          <Ionicons color={backColor ? backColor : "black"} size={backSize} name="chevron-back-sharp" />
        </TouchableOpacity>
      )}
      <View style={[styles.leftContainer, leftStyle]}>
        {leftTitle && <Text style={leftTitleStyle}>{leftTitle}</Text>}
        {left}
      </View>
      <View style={(centerStyle, centerStyle)}>
        {centerTitle && <Text style={[styles.centerTitleStyle ,centerTitleStyle]}>{centerTitle}</Text>}
        {center}
      </View>
      <View style={[styles.rightContainer, rightStyle]}>
        {rightTitle && <Text style={rightTitleStyle}>{rightTitle}</Text>}
        {right}
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    position: 'absolute',
    left: 20,
  },
  rightContainer: {
    position: 'absolute',
    right: 20,
  },
  backContainerStyle: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTitleStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#272C37',
    fontWeight: '700',
  }
});
export default Header;