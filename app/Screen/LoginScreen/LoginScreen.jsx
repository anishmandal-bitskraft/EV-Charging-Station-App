import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import Colors from "../../utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

// rnf
WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google"
  });
  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        style={styles.logoImage}
        source={require("./../../../assets/images/logo1.png")}
      />
      <Image
        style={styles.bgImage}
        source={require("./../../../assets/images/ev-charging1.jpg")}
      />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={styles.heading}>
          Your Ultimate EV Charging Station Finder App
        </Text>
        <Text style={styles?.desc}>
          Find EV charging station near you, plan trip and so much more in just
          one click
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// rns
const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 2,
    objectFit: "cover",
  },
  heading: {
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 80,
  },
});
