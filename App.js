import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from './screens/home/Home';
import ListaDoacao from './screens/lista-doacao/ListaDoacao';
import AdicionarDoacao from './screens/adicionar-doacao/AdicionarDoacao';

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/lista-doacao" element={ListaDoacao} />
          <Route path="/adicionar-doacao" element={AdicionarDoacao} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
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
});
