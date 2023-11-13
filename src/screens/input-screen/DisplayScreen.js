import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../validar-cpf/ValidarCpf.styles';
function DisplayScreen({ route }) {
  const userInputs = route.params?.userInputs || {};
  const test = route.params?.test || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.input}>Olá  {userInputs.text2} obrigado por inserir um cpf válido, agora vou gerar um PDF com isto</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Gerar PDF</Text>
      </TouchableOpacity>

    </View>

    
  );
}

export default DisplayScreen;
