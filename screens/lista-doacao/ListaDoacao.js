import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Card } from 'react-native-elements';
import { ScrollView, StyleSheet, Text, View } from "react-native-web";
import { URLAPI } from '../../services/api';

export default function ListaDoacao({ navigation }) {
  const [doacoes, setDoacoes] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: URLAPI + '/lista-doacao',
    }).then((response) => {
      setDoacoes(response.data);
    }).catch((error) => {
      toast.error(error.response);
      setDoacoes([]);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {doacoes.map(
          (doacao, i) => (
            <Card>
              <Card.Title>Dia { doacao.dtcadastro }</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                Doação do tipo {doacao.tpdoacao} no valor de de R${doacao.valor}.
              </Text>
            </Card>
          )
        )}
      </View>
    </ScrollView>
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
    margin: 2,
  },
  buttonText: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20
  }
});