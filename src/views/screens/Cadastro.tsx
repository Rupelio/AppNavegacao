import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground, AsyncStorage } from 'react-native';
import COLORS from '../../consts/colors';

// Definição da interface RootTabParamList
export type RootTabParamList = {
  Home: undefined;
  // Outras telas aqui, se necessário
};

interface FormData {
  nome: string;
  email: string;
  senha: string;
}

const CadastroScreen = () => {
  const [formData, setFormData] = useState<FormData>({ nome: '', email: '', senha: '' });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const parsedUserData: FormData = JSON.parse(userData);
        setFormData(parsedUserData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const onSubmit = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formData));
      Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/fundo-azul-preto.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <View style={{ flex: 4, marginBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={formData.nome}
            onChangeText={(text) => setFormData({ ...formData, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={formData.senha}
            onChangeText={(text) => setFormData({ ...formData, senha: text })}
            secureTextEntry
          />
        </View>
        <View style={styles.botao}>
          <TouchableOpacity onPress={onSubmit}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white }}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.dark,
  },
  input: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    margin: 5,
    borderColor: COLORS.white,
    borderWidth: StyleSheet.hairlineWidth,
  },
  titulo: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: COLORS.white,
    flex: 3,
  },
  botao: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    marginVertical: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CadastroScreen;
