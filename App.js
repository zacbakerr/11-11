import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Slider from "@react-native-community/slider"; 
// import VerticalSlider from 'rn-vertical-slider';
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
  redirectCheckIn = () => {
    navigation.navigate("CheckIn")
  };
  redirectToolBox = () => {
    navigation.navigate("ToolBox")
  };
  // let {navigation} = this.props;
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>11:11</Text>
      <View style={homeStyles.topBlocks}>
        <Pressable style={homeStyles.topLeftBlock} onPress={this.redirectCheckIn}>
          {/* <View style={styles.topLeftBlock}> */}
            <Text style={homeStyles.topLeftBlockText}>Workbook</Text>
            {/* resize image */}
            <Image source={require('./assets/work.png')} style={{ width: 160, height: 70 }} />
        {/* </View> */}
        </Pressable>
        <Pressable style={homeStyles.topRightBlock} onPress={this.redirectToolBox}>
          {/* <View style={styles.topLeftBlock}> */}
            <Text style={homeStyles.topRightBlockText}>Toolbox</Text>
            {/* resize image */}
            <Image source={require('./assets/toolbox/toolbox.png')} style={{ width: 120, height: 80 }} />
        {/* </View> */}
        </Pressable>
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
    zIndex: 1,
    backgroundColor: '#8DABB1',
    width: "42%",
    marginRight: "5%",
    height: 147,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topLeftBlockText: {
    color: '#F5F5F5',
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
    marginTop: "10%",
    marginBottom: "5%",
  },
  topRightBlockText: {
    color: '#F5F5F5',
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
    marginTop: "10%",
    marginBottom: "5%"
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

function ToolBox({ navigation }) {
  redirectActivity1 = () => {
    navigation.navigate("Activity1")
  };
  redirectActivity2 = () => {
    navigation.navigate("Activity2")
  };
  redirectActivity3 = () => {
    navigation.navigate("Activity3")
  };
  redirectActivity4 = () => {
    navigation.navigate("Activity4")
  };
  redirectActivity14 = () => {
    navigation.navigate("Activity14PreScreen")
  };
  redirectActivity17 = () => {
    navigation.navigate("Activity17")
  };
  return (
    <View style={toolBoxStyles.container}>
      <Text style={toolBoxStyles.title}>Toolbox</Text> 
      <ScrollView
          flexDirection='column'
          justifyContent= 'space-between'
          width= "100%"
          height= "10%"
        >
        <View style={toolBoxStyles.topBlocks}>
          <Pressable style={toolBoxStyles.topLeftBlock} onPress={this.redirectActivity1}>
            <Image source={require('./assets/toolbox/pickaxe.png')} style={{ width: 100, height: 70, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Seeking Support</Text>
          </Pressable>
          <Pressable style={toolBoxStyles.topRightBlock} onPress={this.redirectActivity2}>
            <Image source={require('./assets/toolbox/clippers.png')} style={{ width: 130, height: 70, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Personal Safety Plan</Text>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectActivity3}>
            <Image source={require('./assets/toolbox/saw.png')} style={{ width: 170, height: 70, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Building Your Circle of Support</Text>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectActivity4}>
            <Image source={require('./assets/toolbox/hammer.png')} style={{ width: 90, height: 80, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Why Me?</Text>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectActivity14}>
            <Image source={require('./assets/toolbox/saw.png')} style={{ width: 170, height: 70, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Healing Through Writing</Text>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectActivity17}>
            <Image source={require('./assets/toolbox/clippers.png')} style={{ width: 130, height: 70, marginTop: 20 }} />
            <Text style={toolBoxStyles.blockText}>Guided Painting</Text>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
        <View style={toolBoxStyles.secondBlocks}>
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectCheckIn}>
          </Pressable>
          <Pressable style={toolBoxStyles.secondRightBlock} onPress={this.redirectToolBox}>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const toolBoxStyles = StyleSheet.create({
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
    marginTop: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },

  blocks: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%",
    height: "30%",
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
  topRightBlock: {
    zIndex: 1,
    backgroundColor: '#8DABB1',
    width: "42%",
    marginRight: "5%",
    height: 147,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },

  secondBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 25,
  },
  secondLeftBlock: {
    zIndex: 1,
    backgroundColor: '#8DABB1',
    width: "42%",
    marginLeft: "5%",
    height: 147,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  secondRightBlock: {
    zIndex: 1,
    backgroundColor: '#8DABB1',
    width: "42%",
    marginRight: "5%",
    height: 147,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  blockText: {
    color: '#ECF7FB',
    fontSize: 20,
    fontFamily: "InriaSans_400Regular",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: 'center',
  },
})

function CheckIn({ navigation }) {
  let [fontsLoaded] = useFonts({
    GemunuLibre_400Regular,
    InriaSans_400Regular,
    InriaSans_700Bold,
    RobotoCondensed_400Regular,
  });

  redirect = () => {
    navigation.navigate("Activity1PreScreen")
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

function Activity1PreScreen({ navigation }) {
  const [currentInstructions, setcurrentInstructions] = useState("It's time to build your circle. Think of supportive people or a group that you feel comfortable and loved around. Once you have that in mind, select characters to add them to your suppot system table! Some examples could be parents, friends, team, teacher, or anything in-between.");
  let fontsLoaded = useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular
  });  
  redirect = () => {
    navigation.navigate("Activity1")
  }; 
  return (
    <Pressable style={activity1PreScreenStyles.container} onPress={this.redirect}>
      <Image source={require("./assets/activity14/Penguin.png")} style={activity14PreScreenStyles.penguin} />
      <ImageBackground source={require("./assets/activity14/TextBubble.png")} style={activity14PreScreenStyles.speechbubble}>
        <TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>{currentInstructions}</TypeWriter>
        <Text style={activity1PreScreenStyles.prompt}>TAP ANYWHERE ON THE SCREEN TO MOVE FORWARD</Text>
      </ImageBackground>
    </Pressable>
  )
}

const activity1PreScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  prompt: {
    fontFamily: "InriaSans_700Bold",
    fontSize: 10,
    color: '#3B6872',
    right: "22%",
    bottom: "40%",
    position: 'absolute',
    textAlign: 'left',
  },
  instructionText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 9,
    width: "75%",
    marginTop: "2%",
    textAlign: 'left',
    marginRight: "20%",
    color: '#414141',
  },
})

function Activity1({ navigation }) {
  let fontsLoaded = useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular
  });  
  redirect = () => {
    navigation.navigate("Activity1")
  }; 
  return (
    <View style={activity1Styles.container}>
      <View style={activity1Styles.bottomCharChoser}>
        <Text style={activity1Styles.choseTitle}>Choose a Character</Text>
        <View style={activity1Styles.topRow}>
          <View style={activity1Styles.char1}></View>
          <View style={activity1Styles.char2}></View>
          <View style={activity1Styles.char3}></View>
        </View>
        <View style={activity1Styles.bottomRow}>
          <View style={activity1Styles.char4}></View>
          <View style={activity1Styles.char5}></View>
          <View style={activity1Styles.char6}></View>
        </View>
      </View>
    </View>
  )
}

const activity1Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FB',
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCharChoser: {
    backgroundColor: "#1C5360",
    width: "100%",
    height: "40%",
    bottom: 0,
    position: "absolute",
  },
  choseTitle: {
    color: "#FFFFFF",
    fontFamily: "InriaSans_700Bold",
    left: "5%",
    top: "5%",
  },
  topRow: {
    width: "100%",
    height: "36%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    left: -20,
    top: "6%",
  },
  char1: {
    width: "26%",
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
  },
  char2: {
    width: "26%",
    left: 20,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
  },
  char3: {
    width: "26%",
    left: 40,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
  },
  bottomRow: {
    width: "100%",
    height: "36%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    left: -20,
    top: "12%",
  },
  char4: {
    width: "26%",
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
  },
  char5: {
    width: "26%",
    left: 20,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
  },
  char6: {
    width: "26%",
    left: 40,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
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
  const [color, setColor] = useState("red");

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: color,
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
  
  const setColorBlue = () => {
    setColor('#00A3FF');      
  };

  const setColorRed = () => {
    setColor('#FF0000');
  };

  const setColorYellow = () => {
    setColor('#FFD500');
  };

  const setColorGreen = () => {
    setColor('#00FF00');
  };

  const setColorPurple = () => {
    setColor('#FF00FF');
  };

  const setColorOrange = () => {
    setColor('#ED7014');
  };

  const setColorBrown = () => {
    setColor('#A52A2A');
  };

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
                    strokeWidth={20}
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
        <ImageBackground source={require('./assets/activity17/Palette.png')} style={activity17Styles.palette}>
          <Pressable onPress={setColorBlue} style={activity17Styles.blueColor}></Pressable>
          <Pressable onPress={setColorRed} style={activity17Styles.redColor}></Pressable>
          <Pressable onPress={setColorYellow} style={activity17Styles.yellowColor}></Pressable>
          <Pressable onPress={setColorGreen} style={activity17Styles.greenColor}></Pressable>
          <Pressable onPress={setColorPurple} style={activity17Styles.purpleColor}></Pressable>
          <Pressable onPress={setColorOrange} style={activity17Styles.orangeColor}></Pressable>
          <Pressable onPress={setColorBrown} style={activity17Styles.brownColor}></Pressable>          
        </ImageBackground>
        <Image source={require('./assets/activity17/paintingPenguin.png')} style={activity17Styles.penguin}></Image>
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
  penguin: {
    width: "35%",
    height: "100%",
    resizeMode: "contain",
    position: 'absolute',
    bottom: 0,
    right: 5,
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
    width: "80%",
    height: "103%",
    resizeMode: "contain",
    position: 'absolute',
    bottom: 0,
    marginLeft: "4%",
  },
  blueColor: {
    width: 30,
    height: 30,
    backgroundColor: '#00A3FF',
    borderRadius: 50,
    marginTop: "10%",
    marginLeft: "20%",
  },
  redColor: {
    width: 30,
    height: 30,
    backgroundColor: '#FF0000',
    borderRadius: 50,
    marginLeft: "50%",
  },
  yellowColor: {
    width: 30,
    height: 30,
    backgroundColor: '#FFD500',
    borderRadius: 50,
    marginLeft: "10%",
  },
  greenColor: {
    width: 30,
    height: 30,
    backgroundColor: '#00FF00',
    borderRadius: 50,
    marginLeft: "50%",
  },
  purpleColor: {
    width: 30,
    height: 30,
    backgroundColor: '#FF00FF',
    borderRadius: 50,
    marginLeft: "30%",
    marginTop: "-20%",
  },
  orangeColor: {
    width: 30,
    height: 30,
    backgroundColor: '#ED7014',
    borderRadius: 50,
    marginLeft: "65%",
    marginTop: "-10%",
  },
  brownColor: {
    width: 30,
    height: 30,
    backgroundColor: '#A52A2A',
    borderRadius: 50,
    marginLeft: "40%",
    marginTop: "-28%",
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
        <Stack.Screen name="ToolBox" component={ToolBox} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Activity1PreScreen" component={Activity1PreScreen} />
        <Stack.Screen name="Activity1" component={Activity1} />
        <Stack.Screen name="Activity2" component={Activity2} />
        <Stack.Screen name="Activity14PreScreen" component={Activity14PreScreen} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity14" component={Activity14} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity17" component={Activity17} options={{ animate: "none" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
