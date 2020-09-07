import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import SvgThree from "../assets/img/svgThree.svg"
import colors from "../constants/colors"

const LandingScreen: any = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View
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
              <Text
                style={
                  styles.headerTextStyle
                }
              >
                Hey
              </Text>
              <Text
                style={
                  styles.headerTextStyle
                }
              >
                There
              </Text>
            </View>
            <View
              style={
                styles.subContainer
              }
            >
              <Text
                style={styles.textStyle}
              >
                Welcome{" "}
              </Text>
              <Text
                style={styles.textStyle}
              >
                {"   "}
                To{"   "}
              </Text>
              <Text
                style={styles.textStyle}
              >
                VideoChatt
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={styles.footerContent}
        >
          <Text
            style={styles.footerText}
          >
            Please Sign In to continue
          </Text>
          <View
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
          </View>
        </View>
      </View>
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
    padding: 5
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
