import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function InputScreen({ navigation }) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text1 => setText1(text1)}
        value={text1}
      />

      <TextInput
        style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setText2(text)}
        value={text2}
      />

      <Button
        title="Submit"
        onPress={() => navigation.navigate('Display', { userInputs: { text1, text2 }, test:{text2} })}
      />

    </View>
  );
}

export default InputScreen;