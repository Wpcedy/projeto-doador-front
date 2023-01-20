import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native-web";
import { SelectList } from 'react-native-dropdown-select-list';
import CurrencyInput from 'react-native-currency-input';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import api from '../../services/api';
import toast from 'react-hot-toast';

export default function AdicionarDoacao({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dtnascimento, setDtnascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tpdoacao, setTpdoacao] = useState('');
  const [valor, setValor] = useState(0);
  const [tppagamento, setTppagamento] = useState('');
  const [conta, setConta] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [cartaoinicio, setCartaoinicio] = useState('');
  const [cartaofim, setCartaofim] = useState('');
  const [datePicker, setDatePicker] = useState(false);

  const doacoes = [
    { key: '1', value: 'Único' },
    { key: '2', value: 'Bimestral' },
    { key: '3', value: 'Semestral' },
    { key: '4', value: 'Anual' },
  ];

  const pagamentos = [
    { key: '1', value: 'Débito' },
    { key: '2', value: 'Crédito' },
  ];

  const bandeiras = [
    { key: '1', value: 'Visa' },
    { key: '2', value: 'Mastercard' },
    { key: '3', value: 'Elo' },
    { key: '4', value: 'Hipercard' },
    { key: '5', value: 'AmericanExpress' },
  ];

  function showDatePicker() {
    setDatePicker(true);
  };

  function hideDatePicker(date) {
    setDtnascimento(getFormatedDate(date, 'DD/MM/YYYY'))
    setDatePicker(false);
  };

  const handleSubmit = () => {
    api.post(
      "/adicionar-docao",
      JSON.stringify({
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        dtnascimento: dtnascimento,
        endereco: endereco,
        tpdoacao: tpdoacao,
        valor: valor,
        tppagamento: tppagamento,
        conta: conta,
        bandeira: bandeira,
        cartaoinicio: cartaoinicio,
        cartaofim: cartaofim,
      }),
      {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      toast.success('Doação criada com sucesso!');
      navigation.navigate("Home");
    }).catch((error) => {
      toast.error(error.response);
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={styles.textTitle}>Criar doação</Text>
          <Text style={styles.textContent}>Ajude aqueles que precisam com uma doação.{"\n"} Por favor preencha os campos abaixo com seus dados:</Text>

          <Text style={styles.label}>Nome*</Text>
          <TextInput style={styles.input} onChangeText={setNome} />

          <Text style={styles.label}>Email*</Text>
          <TextInput style={styles.input} onChangeText={setEmail} />

          <Text style={styles.label}>CPF* (sem pontuação)</Text>
          <TextInput style={styles.input} onChangeText={setCpf} maxLength={11} />

          <Text style={styles.label}>Telefone* (sem pontuação)</Text>
          <TextInput style={styles.input} onChangeText={setTelefone} />

          <Text style={styles.label}>Data de nascimento*</Text>
          <TextInput style={styles.input} value={dtnascimento} editable={false} />
          {!datePicker && (
            <TouchableOpacity
              style={styles.buttonTime}
              onPress={showDatePicker} >
              <Text style={styles.buttonText}>
                Abrir calendário
              </Text>
            </TouchableOpacity>
          )}
          {datePicker && (
            <DatePicker onSelectedChange={date =>{ hideDatePicker(date) }} />
          )}

          <Text style={styles.label}>Endereço*</Text>
          <TextInput style={styles.input} onChangeText={setEndereco} />

          <Text style={styles.label}>Tipo de doação*</Text>
          <SelectList
            setSelected={(val) => setTpdoacao(val)}
            data={doacoes}
            save="key"
          />

          <Text style={styles.label}>Valor*</Text>
          <CurrencyInput style={styles.label} value={valor} onChangeValue={setValor}
            prefix="R$" delimiter="." separator=","
            precision={2} minValue={0}
          />

          <Text style={styles.label}>Tipo de pagamento*</Text>
          <SelectList
            setSelected={(val) => setTppagamento(val)}
            data={pagamentos}
            save="key"
          />

          <Text style={styles.label}>Conta* (sem pontuação)</Text>
          <TextInput style={styles.input} onChangeText={setConta} />

          <Text style={styles.label}>Bandeira</Text>
          <SelectList
            setSelected={(val) => setBandeira(val)}
            data={bandeiras}
            save="key"
          />

          <Text style={styles.label}>Primeiros 6 dígitos do cartão (sem pontuação)</Text>
          <TextInput style={styles.input} onChangeText={setCartaoinicio} maxLength={6} />

          <Text style={styles.label}>Últimos 4 digitos do cartão (sem pontuação)</Text>
          <TextInput style={styles.input} onChangeText={setCartaofim} maxLength={4} />

          <View style={styles.filler}></View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>
              Voltar para o Home
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 15,
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
  buttonTime: {
    backgroundColor: "#42B0BF",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 70,
    borderRadius: 20,
    margin: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
  actions: {
    paddingTop: 15,
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});