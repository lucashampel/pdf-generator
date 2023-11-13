import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

import { styles } from './ValidarCpf.styles';
import { validarCPF } from '../../utils/cpfUtils';



function ValidarCpf({navigation}) {
  const [cpf, setCpf] = useState('');

  const handleCPFSubmit = () => {
    if (validarCPF(cpf)) {
        navigation.navigate('DisplayScreen', { userInputs: { text1: 'Some text', text2: cpf }});
    } else {
        alert('CPF inválido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite um CPF válido</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCpf}
        value={cpf}
        placeholder="INPUT CPF"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleCPFSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ValidarCpf;
