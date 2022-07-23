import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home as HomeScreen } from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: "#c30000" }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
