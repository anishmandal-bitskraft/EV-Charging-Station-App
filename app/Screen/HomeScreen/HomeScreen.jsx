import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import AppMapView from "./AppMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalAPI from "../../utils/GlobalAPI";

export default function HomeScreen() {
  const [location, setLocation] = useContext(UserLocationContext);

  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);
  const GetNearByPlace = () => {
    const data = {
      includedTypes: ["electric_vehicle_charging_station"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalAPI.NewNearByPlace(data).then((resp) => {
      console.log(JSON.stringify(resp.data));
    });
  };
  return (
    <View>
      <View style={styles?.headerContainer}>
        <Header />
        <SearchBar
          searchedLocation={(location) => console.log(location, "loccccc")}
        />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
});
