import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

interface Food {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: any;
  quantity: any;
  removed: boolean;
}

interface CartCardProps {
  item: Food;
  removeFromCart: (itemId: string) => void;
}

interface CartScreenProps {
  navigation: any;
  route: any; // Adicione a propriedade route ao tipo de props
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation, route }) => {
  const { cartItems } = route.params || {};
  const [items, setItems] = useState<Food[]>(cartItems || []);
  const [removedItems, setRemovedItems] = useState<Food[]>([]);


  useEffect(() => {
    setItems(cartItems || []);
  }, [cartItems]);

  const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    cartCard: {
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: COLORS.white,
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionBtn: {
      width: 30,
      height: 30,
      backgroundColor: COLORS.primary,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const increaseQuantity = (item: Food) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
      )
    );
  };
  
  const decreaseQuantity = (item: Food) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id && i.quantity && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    const removedItem = items.find((item) => item.id === itemId);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setRemovedItems((prevRemovedItems) => [...prevRemovedItems, removedItem]);
  };
  
  const CartCard: React.FC<CartCardProps> = ({ item, removeFromCart }) => {
    return (
      <View style={style.cartCard}>
        {/* Conteúdo do cartão de item do carrinho */}
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>{item.ingredients}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => decreaseQuantity(item)} style={style.actionBtn}>
            <Icon name="remove" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item)} style={style.actionBtn}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={style.actionBtn}>
            <Icon name="delete" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={items.filter((item) => !item.removed)}
        renderItem={({ item }) => (
          <CartCard item={item} removeFromCart={removeFromCart} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Price</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${calculateTotalPrice()}</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );

  function calculateTotalPrice() {
    return items.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);
  }
  
};

export default CartScreen;