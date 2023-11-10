import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, Box } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Rating from "./screens/rating";
import RiwayatPesanan from "./screens/riwayatpesanan";
import Home from "./screens/home";
import Chat from "./screens/chat";
import Profile from "./screens/profile";
import Pesanan from "./screens/pesanan";
import Cucikering from "./screens/cucikering"
import Voucher from "./screens/voucher";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Pesanan":
              iconName = "cart";
              break;
            case "Riwayat":
              iconName = "time";
              break;
            case "Chat":
              iconName = "chatbubble-ellipses";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: 'white',
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Pesanan" component={Pesanan} options={noHead} />
      <Tab.Screen name="Riwayat" component={RiwayatPesanan} options={noHead} />
      <Tab.Screen name="Chat" component={Chat} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pesanan">
          <Stack.Screen
            name="Tabs"
            component={Tabs} options={noHead} />
          <Stack.Screen
            name="Rating"
            component={Rating}
            options={noHead}
          />
          <Stack.Screen
            name="RiwayatPesanan"
            component={RiwayatPesanan}
            options={noHead}
          />
          <Stack.Screen
            name="Cucikering"
            component={Cucikering}
            options={noHead}
          />
          <Stack.Screen
            name="Voucher"
            component={Voucher}
            options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
