import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { 
  useFonts,
  GemunuLibre_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    GemunuLibre_400Regular
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>11:11</Text>
      <View style={styles.topBlocks}>
        <View style={styles.topLeftBlockShadow}>
          <View style={styles.topLeftBlock}></View>
        </View>
        <View style={styles.topRightBlock}></View>
      </View>
      <View style={styles.bottomBlocks}>
        <View style={styles.topBlock}></View>
        <View style={styles.bottomBlock}></View>
      </View>
      <ImageBackground source={require('./assets/bottomVec.png')} style={ styles.bottomVec }>
        <Image source={require('./assets/fence.svg')} style={ styles.fence } />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#ECF7FB',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#34947D',
    fontSize: 95,
    fontFamily: "GemunuLibre_400Regular",
    marginTop: 98,
    // shadow
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
  bottomVec: {
    position: 'absolute',
    bottom: -10,
    width: "100%",
    height: 220,
  },
  fence: {
    position: 'absolute',
    bottom: 120,
    width: "100%",
    height: 140,
  },

  topBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 25,
  },
  topLeftBlock: {
    zIndex: 1,
    backgroundColor: '#3B6872',
    width: "98%",
    height: 147,
    borderRadius: 20,
  },
  topLeftBlockShadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    opacity: 0.5,
    borderRadius: 20,
    marginLeft: "5%",
    width: "42%",
    height: 150,
  },
  topRightBlock: {
    width: "42%",
    height: 150,
    backgroundColor: '#3B6872',
    opacity: 0.5,
    borderRadius: 20,
    marginRight: "5%",
  },

  bottomBlocks: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 25,
  },
  topBlock: {
    width: "90%",
    height: 90,
    backgroundColor: '#EA5743',
    opacity: 0.75,
    borderRadius: 20,
    marginLeft: "5%",
  },
  bottomBlock: {
    width: "90%",
    marginTop: 25,
    height: 90,
    backgroundColor: '#F8B77C',
    opacity: 0.5,
    borderRadius: 20,
    marginLeft: "5%",
  },
});
