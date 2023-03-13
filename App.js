import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Slider from "@react-native-community/slider"; 
import TypeWriter from 'react-native-typewriter'
import { 
  useFonts,
  GemunuLibre_400Regular,
  InriaSans_400Regular,
  InriaSans_700Bold,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/dev';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Path } from "@shopify/react-native-skia";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Device from 'expo-device';

function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    GemunuLibre_400Regular,
    InriaSans_400Regular,
    RobotoCondensed_400Regular,
  });
  redirect = () => {
    navigation.navigate("CheckIn")
  };
  // let {navigation} = this.props;
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>11:11</Text>
      <View style={homeStyles.topBlocks}>
        <Pressable style={homeStyles.topLeftBlock} onPress={this.redirect}>
          {/* <View style={styles.topLeftBlock}> */}
            <Text style={homeStyles.topLeftBlockText}>Workbook</Text>
            {/* resize image */}
            <Image source={require('./assets/work.png')} style={{ width: 100, height: 100 }} />
        {/* </View> */}
        </Pressable>
        <View style={homeStyles.topRightBlock}></View>
      </View>
      <View style={homeStyles.bottomBlocks}>
        <View style={homeStyles.topBlock}></View>
        <View style={homeStyles.bottomBlock}></View>
      </View>
      <ImageBackground source={require('./assets/bottomVec.png')} style={ homeStyles.bottomVec }>
        <Image source={require('./assets/fence.svg')} style={ homeStyles.fence } />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF7FB',
    alignItems: 'center',
  },
  title: {
    color: '#34947D',
    fontSize: 95,
    fontFamily: "RobotoCondensed_400Regular",
    fontWeight: "bold",
    marginTop: 98,
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
    height: "55%",
  },

  topBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 25,
  },
  topLeftBlock: {
    zIndex: 1,
    backgroundColor: '#8DABB1',
    width: "42%",
    marginLeft: "5%",
    height: 147,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topLeftBlockShadow: {
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
  topLeftBlockText: {
    color: '#F5F5F5',
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
    marginTop: "10%",
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

function CheckIn({ navigation }) {
  let [fontsLoaded] = useFonts({
    GemunuLibre_400Regular,
    InriaSans_400Regular,
    InriaSans_700Bold,
    RobotoCondensed_400Regular,
  });

  redirect = () => {
    navigation.navigate("Activity14PreScreen")
  };
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ImageBackground source={require('./assets/checkIn.png')} style={ checkInStyles.background }>
      <View style={checkInStyles.checkInBox}>
        <Text style={ checkInStyles.prompt }>How are you feeling today?</Text>
        {/* slider input */}
        <Slider 
          style={{width: "80%", height: 40, marginTop: "5%"}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#454F6F"
          maximumTrackTintColor="#454F6F"
          // thumb image and size
          thumbImage={ Device.brand === 'google' || Device.brand === 'xiaomi' ? require('./assets/penguinButton.png') : null }

        />
        <Pressable style={checkInStyles.submitButton} onPress={this.redirect}>
          <Text style={checkInStyles.submitButtonText}>I'M DONE</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const checkInStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
  },
  checkInBox: {
    width: "85%",
    height: 175,
    backgroundColor: '#D9D9D9',
    opacity: 0.8,
    borderRadius: 20,
    marginTop: 25,
    flexDirection: 'column',
    alignItems: 'center',
  },
  prompt: {
    color: '#000',
    fontSize: 20,
    fontFamily: "InriaSans_400Regular",
    marginTop: "5%",
  },
  submitButton: {
    width: 100,
    height: 30,
    backgroundColor: '#EA5743',
    borderRadius: 10,
    marginTop: "5%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: "InriaSans_400Regular",
  },
});   

function Activity1({ navigation }) {
  return (
    <View style={activity1Styles.container}>
      <View style={activity1Styles.charSelectionContainter}>
      </View>
    </View>
  )
}

const activity1Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
  },
  charSelectionContainter: {
    backgroundColor: '#1C5360',
    width: "100%",
    bottom: 0,
    position: 'absolute',
    height: "40%",
  },
});

function Activity2({ navigation }) {
  return (
    <View style={activity2Styles.container}>
      <View style={activity2Styles.charSelectionContainter}>
      </View>
    </View>
  )
}

const activity2Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
  },
});

function Activity14PreScreen({ navigation }) {
  const [currentInstructions, setcurrentInstructions] = useState("Welcome to Healing Through Writing! Writing is a field favorite as it allows us to explore our thoughts much more uniquely than simply thinking. Many friends feel it helps them process events by allowing them to release guilt, shame, or self-blame.");
  let fontsLoaded = useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular
  });  
  redirect = () => {
    if (currentInstructions == "Welcome to Healing Through Writing! Writing is a field favorite as it allows us to explore our thoughts much more uniquely than simply thinking. Many friends feel it helps them process events by allowing them to release guilt, shame, or self-blame.") {
      setcurrentInstructions("Journaling helps you review good and bad times in your life and see how you survived. You can identify your strengths and areas where you are coping well in order to implement those same ideas in the future.")
    } else if (currentInstructions == "Journaling helps you review good and bad times in your life and see how you survived. You can identify your strengths and areas where you are coping well in order to implement those same ideas in the future.") {
      setcurrentInstructions("In this activity, you’ll have the opportunity to free write about anything you’d like - the world is your oyster! Of course, it might be most beneficial for us to write about hard emotions, though you can always work your way there.")
    } else if (currentInstructions == "In this activity, you’ll have the opportunity to free write about anything you’d like - the world is your oyster! Of course, it might be most beneficial for us to write about hard emotions, though you can always work your way there.") {
      setcurrentInstructions("Think about writing about things you’re things you are excited or happy about, reactions or triggers, strong emotions, inspirational quotes or ideas, things that bother you or anything else worth a good (or bad!) dialogue.")
    } else if (currentInstructions == "Think about writing about things you’re things you are excited or happy about, reactions or triggers, strong emotions, inspirational quotes or ideas, things that bother you or anything else worth a good (or bad!) dialogue.") {
      setcurrentInstructions("I did some writing I’d like to show you before you start - hopefully it’ll help you get started! Remember, this writing is your own so you can do whatever you want with it. This journal is yours and yours alone.")
    } else if (currentInstructions == "I did some writing I’d like to show you before you start - hopefully it’ll help you get started! Remember, this writing is your own so you can do whatever you want with it. This journal is yours and yours alone.") {
      navigation.navigate("Activity14")
    }
  };
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Pressable style={activity14PreScreenStyles.container} onPress={this.redirect}>
      <Image source={require("./assets/activity14/Penguin.png")} style={activity14PreScreenStyles.penguin} />
      <ImageBackground source={require("./assets/activity14/TextBubble.png")} style={activity14PreScreenStyles.speechbubble}>
        <TypeWriter style={activity14PreScreenStyles.instructionText} typing={1} maxDelay={30}>{currentInstructions}</TypeWriter>
        {/* <Text style={activity14PreScreenStyles.instructionText} id="currentInstructions">{currentInstructions}</Text> */}
        <Text style={activity14PreScreenStyles.prompt}>TAP ANYWHERE ON THE SCREEN TO MOVE FORWARD</Text>
      </ImageBackground>
    </Pressable>
  )
}

const activity14PreScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#E8C8AA',
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  penguin: {
    width: "30%",
    height: "60%",
    resizeMode: "contain",
    marginLeft: "15%",
    flexDirection: 'column',
  },
  speechbubble: {
    width: "81%",
    height: "30%",
    marginTop: "5%",
    flexDirection: 'column',
    alignItems: 'center',
  },
  prompt: {
    fontFamily: "InriaSans_700Bold",
    fontSize: 10,
    color: '#BD8B5D',
    right: "22%",
    bottom: "40%",
    position: 'absolute',
    textAlign: 'left',
  },
  instructionText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 9,
    width: "75%",
    marginTop: "4%",
    textAlign: 'left',
    marginRight: "20%",
    color: '#414141',
  },
});

function Activity14({ navigation }) {
  redirect = () => {
    navigation.navigate("Activity14PreScreen")
  };
  return (
    <View style={activity14Styles.container}>
      <View style={activity14Styles.notebook}>
        <Text style={activity14Styles.prompt}>Take a shot with what we’ve learned so far: make sure to take breaks when you need!</Text>
        <TextInput style={activity14Styles.input} placeholder="Write something here!" multiline={true} />
        <Pressable onPress={this.redirect}>
          <Image source={require('./assets/arrow.png')} style={activity14Styles.arrow} />
        </Pressable>
      </View>
    </View>
  )
}

const activity14Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notebook: {
    backgroundColor: '#FFF',
    width: "90%",
    height: "90%",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  prompt: {
    width: "80%",
    color: '#000',
    fontSize: 15,
    fontFamily: "InriaSans_400Regular",
    marginTop: "5%",
    textAlign: 'center',
  },
  input: {
    width: "90%",
    height: "80%",
    opacity: 0.8,
    borderRadius: 20,
    marginTop: "5%",
    flexDirection: 'column',
    textAlignVertical: 'top',
    padding: 10,
  },
  arrow: {
    width: 50,
    height: 50,
    marginTop: "5%",
    marginRight: "70%",
  },
});

function Activity17({ navigation }) {
  const [paths, setPaths] = useState([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: "blue",
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  return (
    <View style={activity17Styles.container}>
      <View style={activity17Styles.canvas}>
        <GestureHandlerRootView style={{ flex: 1, height: "50%", width: "100%" }}>
          <GestureDetector gesture={pan}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Canvas style={{ flex: 8 }}>
                {paths.map((p, index) => (
                  <Path
                    key={index}
                    path={p.segments.join(" ")}
                    strokeWidth={5}
                    style="stroke"
                    color={p.color}
                  />
                ))}
              </Canvas>
            </View>
          </GestureDetector>
        </GestureHandlerRootView>
      </View>
      <View style={activity17Styles.bottomContainer}>
        <Image source={require('./assets/activity17/CanvasStand.png')} style={activity17Styles.canvasStand} />
        <Image source={require('./assets/activity17/Palette.png')} style={activity17Styles.palette} />
      </View>
    </View>
  );
}

const activity17Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    width: "80%",
    height: "70%",
    borderRadius: 20,
    borderColor: '#BD8B5D',
    borderWidth: 20,
  },
  bottomContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: '#ECF7FB',
    bottom: 0,
  },
  canvasStand: {
    width: "100%",
    height: "100%",
    marginTop: -20,
    resizeMode: "contain",
  },
  palette: {
    width: "50%",
    height: "100%",
    marginLeft: "10%",
    resizeMode: "contain",
    position: 'absolute',
    bottom: 0,
  },
});

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animate: "none",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Activity1" component={Activity1} />
        <Stack.Screen name="Activity14PreScreen" component={Activity14PreScreen} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity14" component={Activity14} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity17" component={Activity17} options={{ animate: "none" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
