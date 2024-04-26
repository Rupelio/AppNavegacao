import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../screens/Profile";
import CartScreen from "../screens/CartScreen";
import New from "../screens/New";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
      <Stack.Screen
        name="home"
        component={Profile}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
      />
      <Stack.Screen
        name="new"
        component={New}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  )
}
