import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "./../../utils/MapViewStyle.json";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          // showsUserLocation={true}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 27.7215,
            longitudeDelta: 85.3201,
          }}
        />
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
