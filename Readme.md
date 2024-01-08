# React Native EV charging Station Finder  - FullStack

## For authentication: 
    - Clerk - https://clerk.com/

## React Navigation  - for navigation
    - npm install @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

##
- Google map and navigation
    - Ref: Expo:
        - https://docs.expo.dev/versions/latest/sdk/map-view/
    - Google map style wizard:
        - https://mapstyle.withgoogle.com/
            - choose option with json - and customize and copy json : in this case i have kept inside utils/

## 
- Get user location
    - expo location : https://docs.expo.dev/versions/latest/sdk/location/
    - npx expo install expo-location
    - in App.json
        "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow EV Station App to use your location."
        }
      ]
    - 