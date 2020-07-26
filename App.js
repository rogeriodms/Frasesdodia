/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const botaopressionado=()=>
{
  var numeroAleatorio = Math.random();

  numeroAleatorio= Math.floor(numeroAleatorio * 5);
  
  var frases = Array();
  frases[0]='Levanta, sacode a poeira, dá a volta por cima.';
  frases[1]='Nem todos os dias são bons, mas há algo bom em cada dia.';
  frases[2]='Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.';
  frases[3]='Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!';
  frases[4]='O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.';

  Alert.alert(frases[numeroAleatorio]);


}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      
         <View style={styles.body}>
           <Image source={require("./imgs/logo.png")}></Image>
           <TouchableOpacity style={styles.buttom} onPress={botaopressionado}>
             <Text style={styles.Text}>Nova Frase</Text>
           </TouchableOpacity>
         </View>
    </>
  );
};

const styles = StyleSheet.create({
  Text:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttom:{
    backgroundColor: '#538530',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default App;
