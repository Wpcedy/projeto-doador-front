import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native-web';

import Home from './screens/home/Home';
import ListaDoacao from './screens/lista-doacao/ListaDoacao';
import AdicionarDoacao from './screens/adicionar-doacao/AdicionarDoacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Lista de Doação" component={ListaDoacao} />
            <Stack.Screen name="Adicionar Doação" component={AdicionarDoacao} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});