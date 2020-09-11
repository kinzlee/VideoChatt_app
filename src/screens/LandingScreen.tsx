import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import SvgThree from "../assets/img/svgThree.svg"
import colors from "../constants/colors"
import * as Animatable from 'react-native-animatable';


const LandingScreen: any = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Animatable.View
        animation="fadeInLeft"
        direction="normal"
        easing="ease-in-out"
        iterationCount={6}
          style={styles.svgContainer}
        >
          <SvgThree
            height={400}
            width={300}
          />
          <View
            style={
              styles.headTextContainer
            }
          >
            <View
              style={
                styles.headerContainer
              }
            >
              <Animatable.Text
                animation="rubberBand"
                direction="alternate"
                easing="ease-in-out"
                iterationCount="infinite"
                style={
                  styles.headerTextStyle
                }
              >
                Hey
              </Animatable.Text>
              <Animatable.Text
                animation="rubberBand"
                direction="alternate"
                easing="ease-in-out"
                iterationCount="infinite"
                style={
                  styles.headerTextStyle
                }
              >
                There
              </Animatable.Text>
            </View>
            <View
              style={
                styles.subContainer
              }
            >
              <Animatable.Text
              animation="bounceInLeft"
              direction="normal"
              easing="ease-in"
                style={styles.textStyle}
              >
                Welcome{" "}
              </Animatable.Text>
              <Animatable.Text
              animation="bounceInRight"
        direction="normal"
        easing="ease-in"
                style={styles.textStyle}
              >
                {"   "}
                To{"   "}
              </Animatable.Text>
              <Animatable.Text
              animation="bounceInLeft"
        direction="normal"
        easing="ease-in"
                style={styles.textStyle}
              >
                VideoChatt
              </Animatable.Text>
            </View>
          </View>
        </Animatable.View>
      </View>
      <Animatable.View 
      animation="fadeInUp"
        direction="normal"
        easing="ease-in-out" style={styles.footer}>
        <View
          style={styles.footerContent}
        >
          <Text
            style={styles.footerText}
          >
            Please Sign In to continue
          </Text>
          <Animatable.View
          animation="pulse"
        direction="alternate"
        easing="ease-in-out"
        iterationCount="infinite"
            style={styles.btnContainer}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "Authentication"
                )
              }
            >
              <View
                style={
                  styles.btnContnText
                }
              >
                <Text
                  style={styles.btnText}
                >
                  SignIn
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  svgContainer: {
    flexDirection: "row",
    paddingBottom: 50,
    paddingRight: 15,
  },
  headerContainer: {
    paddingTop: 65,
  },
  headTextContainer: {
    flexDirection: "column",
    paddingRight: 30,
  },
  headerTextStyle: {
    color: colors.whiteColor,
    fontSize: 42,
    fontWeight: "bold",
  },
  subContainer: {
    paddingTop: 60,
  },
  textStyle: {
    color: colors.whiteColor,
    fontSize: 24,
  },
  btnContainer: {
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    elevation: 5,
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  btnContnText: {
    padding: 7
  },
  btnText: {
    color: colors.whiteColor,
    fontSize: 16,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  footerText: {
    color: colors.primaryColor,
    fontSize: 26,
  },
  footerContent: {
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
})

export default LandingScreen
