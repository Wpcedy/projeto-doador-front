import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native-web";

export default function Home({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Projeto - Doador</Text>
      <Text style={styles.textContent}>Esse projeto foi feito para um processo seletivo.</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Lista de Doação")} >
          <Text style={styles.buttonText}>
          Lista de doações
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Adicionar Doação")} >
          <Text style={styles.buttonText}>
          Adicionar doação
          </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  textContent: {
    paddingTop: 10,
    fontSize: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#42B0BF",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 70,
    borderRadius: 20,
    margin: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20
  }
});