import React, {useState}  from 'react'
import {StyleSheet, View, Text} from 'react-native';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [loaded] = useFonts({ EduBold: require('./assets/fonts/Edu-Bold.ttf'), 
  EduRegular: require('./assets/fonts/Edu-Regular.ttf'), 
  EduMedium: require('./assets/fonts/Edu-Medium.ttf'), EduSemiBold: require('./assets/fonts/Edu-SemiBold.ttf')})
  const [userNumber, setUserNumber] = useState()

  if(!loaded) return <AppLoading />

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title={'Adivina el Número'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
