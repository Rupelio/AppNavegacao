import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import New from '../screens/New';
import LoginScreen from '../screens/Login';
import CadastroScreen from '../screens/Cadastro';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({ color, size }: TabBarIconProps) => <Icon name="home-filled" color={color} size={size} />;
const LocalMallIcon = ({ color, size }: TabBarIconProps) => <Icon name="local-mall" color={color} size={size} />;
const SearchIcon = () => (
  <View
    style={{
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderColor: COLORS.primary,
      borderWidth: 2,
      borderRadius: 30,
      top: -25,
      elevation: 5,
    }}>
    <Icon name="search" color={COLORS.primary} size={28} />
  </View>
);
const FavoriteIcon = ({ color, size }: TabBarIconProps) => <Icon name="favorite" color={color} size={size} />;
const CartIcon = ({ color, size }: TabBarIconProps) => <Icon name="shopping-cart" color={color} size={size} />;

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={New}
        options={{
          tabBarIcon: LocalMallIcon,
        }}
      />
      <Tab.Screen
        name="cadastro"
        component={CadastroScreen}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={OnBoardScreen}
        options={{
          tabBarIcon: FavoriteIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
