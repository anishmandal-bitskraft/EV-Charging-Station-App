import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({searchedLocation}) {
    
  return (
    <View
      style={{
        display: "flex",
        marginTop: 15,
        flexDirection: "row",
        paddingHorizontal: 5,
        backgroundColor: Colors?.WHITE,
        borderRadius: 6,
        alignItems: 'center',
        
      }}
    >
      <Ionicons name="location-sharp" size={24} />
      <GooglePlacesAutocomplete
        placeholder="Search EV Charging Station"
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: "AIzaSyCRW3wTXG7RprV_SxAFWJuvDz93j59yeRI",
          language: "en",
        }}
      />
    </View>
  );
}
