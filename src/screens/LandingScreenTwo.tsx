import React from "react"
import {
  View,
  Text,
  StyleSheet,
} from "react-native"
import colors from "../constants/colors"
import SvgOne from "../assets/img/svgOne.svg"
import SvgTwo from "../assets/img/svgTwo.svg"
import * as Animatable from 'react-native-animatable';

const LandingScreenTwo: any = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Animatable.View
        animation="bounceInDown"
        direction="normal"
        easing="ease-in"
          style={
            styles.contentContainer
          }
        >
          <View
            style={styles.svgContainer}
          >
            <View
              style={{paddingLeft: 20}}
            >
              <SvgOne
                height={360}
                width={250}
              />
            </View>
            <View
              style={{
                paddingRight: 20,
                paddingTop: 40,
              }}
            >
              <SvgTwo
                height={250}
                width={150}
              />
            </View>
          </View>
        </Animatable.View>
        {/* <Text
          style={{
            color: colors.accentColor,
          }}
        >
          Swipe Left '&gt;'{" "}
        </Text> */}
      </View>
      <Animatable.View animation="fadeInUp" direction="normal" style={styles.footer}>
        <View
          style={{
            paddingTop: 14,
            margin: 20,
          }}
        >
          <Animatable.Text
          animation="bounceInRight"
          direction="normal"
          easing="ease-in-out"
            style={styles.textStyle}
          >
            This is the Vide Chatt React
            Native Mobile Application
          </Animatable.Text>
        </View>
        <View style={styles.swipeText}>
          <Animatable.Text
            animation="pulse"
          direction="normal"
          easing="ease-out"
          iterationCount="infinite"
            style={{
              color:
                colors.primaryColor,
            }}
          >
            Swipe Left &gt;&gt;{" "}
          </Animatable.Text>
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.primaryColor,
  },
  screen: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flexDirection: "column",
    paddingBottom: 80,
  },
  svgContainer: {
    flexDirection: "row",
    // paddingBottom: 8s0
  },
  textStyle: {
    color: colors.primaryColor,
    fontSize: 26,
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: colors.whiteColor,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  swipeText: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
})

export default LandingScreenTwo
