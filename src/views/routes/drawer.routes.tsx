import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import CartScreen from "../screens/CartScreen";

const Drawer = createDrawerNavigator();

type DrawerIconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({ color, size }: DrawerIconProps) => <Feather name="home" color={color} size={size} />;
const ProfileIcon = ({ color, size }: DrawerIconProps) => <Feather name="user" color={color} size={size} />;
const NewIcon = ({ color, size }: DrawerIconProps) => <Feather name="plus" color={color} size={size} />;
const CartIcon = ({ color, size }: DrawerIconProps) => <Feather name="shopping-cart" color={color} size={size} />;

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: HomeIcon,
          drawerLabel: 'Inicio'
        }}
      />
      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ProfileIcon,
          drawerLabel: 'Meu Perfil'
        }}
      />
      <Drawer.Screen
        name="new"
        component={StackRoutes}
        options={{
          drawerIcon: NewIcon,
          drawerLabel: 'Novo'
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          drawerIcon: CartIcon,
          drawerLabel: 'Carrinho'
        }}
      />
    </Drawer.Navigator>
  );
}
