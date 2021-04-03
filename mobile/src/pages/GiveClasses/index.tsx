import React from 'react';
import { View , ImageBackground, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {

  const {goBack} = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  function handleNavigateToWeb(){
    Linking.openURL('https://proffylevir.vercel.app/give-classes');
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
      resizeMode="contain" 
      source={giveClassesBgImage} 
      style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateToWeb}  style={styles.okButtonPlataform}>
        <Text style={styles.okButtonText}>Ir para a Plataforma</Text>
      </RectButton>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Voltar</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;