import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput, ScrollView, Alert, Button, Modal, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Slider from "@react-native-community/slider"; 
import Svg, { Path as SvgPath } from "react-native-svg";
import TypeWriter from 'react-native-typewriter'
import { 
  useFonts,
  GemunuLibre_400Regular,
  InriaSans_400Regular,
  InriaSans_700Bold,
  RobotoCondensed_400Regular,
  Itim_400Regular,
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
  redirectActivity13 = () => {
    navigation.navigate("Activity13PreScreen")
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
          <Pressable style={toolBoxStyles.secondLeftBlock} onPress={this.redirectActivity13}>
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
  const [currentInstructions, setcurrentInstructions] = useState("Welcome to our first activity, im excited that you’re here! Opening up to and being vulnerable with others isn’t always easy, but being surrounded with people that listen and care about you is crucial in working through difficulties presented.");
  const [currText, setCurrText] = useState(<TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>{currentInstructions}</TypeWriter>)
  let fontsLoaded = useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular
  });  
  redirect = () => {
    if (currText.props.maxDelay == 30 && currentInstructions == "Welcome to our first activity, im excited that you’re here! Opening up to and being vulnerable with others isn’t always easy, but being surrounded with people that listen and care about you is crucial in working through difficulties presented.") {
      setCurrText(<Text style={activity1PreScreenStyles.instructionText} maxDelay={0}>Welcome to our first activity, im excited that you’re here! Opening up to and being vulnerable with others isn’t always easy, but being surrounded with people that listen and care about you is crucial in working through difficulties presented.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "Welcome to our first activity, im excited that you’re here! Opening up to and being vulnerable with others isn’t always easy, but being surrounded with people that listen and care about you is crucial in working through difficulties presented.") {
      setcurrentInstructions("Think about the relationships in your life. Sometimes it’s easy to lose sight of your important relationships – with family, friends, and other people that can support you.")
      setCurrText(<TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>Think about the relationships in your life. Sometimes it’s easy to lose sight of your important relationships – with family, friends, and other people that can support you.</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "Think about the relationships in your life. Sometimes it’s easy to lose sight of your important relationships – with family, friends, and other people that can support you.") {
      setCurrText(<Text style={activity1PreScreenStyles.instructionText} maxDelay={0}>Think about the relationships in your life. Sometimes it’s easy to lose sight of your important relationships – with family, friends, and other people that can support you.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "Think about the relationships in your life. Sometimes it’s easy to lose sight of your important relationships – with family, friends, and other people that can support you.") {
      setcurrentInstructions("This exercise will help you identify supportive people, places, and things to create your very own support system. Think of a supportive person or group that you feel comfortable and loved around.")
      setCurrText(<TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>This exercise will help you identify supportive people, places, and things to create your very own support system. Think of a supportive person or group that you feel comfortable and loved around.</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "This exercise will help you identify supportive people, places, and things to create your very own support system. Think of a supportive person or group that you feel comfortable and loved around.") { 
      setCurrText(<Text style={activity1PreScreenStyles.instructionText} maxDelay={0}>This exercise will help you identify supportive people, places, and things to create your very own support system. Think of a supportive person or group that you feel comfortable and loved around.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "This exercise will help you identify supportive people, places, and things to create your very own support system. Think of a supportive person or group that you feel comfortable and loved around.") {
      setcurrentInstructions("Once you have a that in mind, click on a character below to add them to your support system table!")
      setCurrText(<TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>Once you have a that in mind, click on a character below to add them to your support system table!</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "Once you have a that in mind, click on a character below to add them to your support system table!") {
      setCurrText(<Text style={activity1PreScreenStyles.instructionText} maxDelay={0}>Once you have a that in mind, click on a character below to add them to your support system table!</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "Once you have a that in mind, click on a character below to add them to your support system table!") {
      navigation.navigate("Activity1")
    }
  };
  return (
    <Pressable style={activity1PreScreenStyles.container} onPress={this.redirect}>
      <Image source={require("./assets/activity14/Penguin.png")} style={activity14PreScreenStyles.penguin} />
      <ImageBackground source={require("./assets/activity14/TextBubble.png")} style={activity14PreScreenStyles.speechbubble}>
        {currText}
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
    marginTop: "3%",
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

  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');

  const [cowOpacity, setCowOpacity] = useState(0)
  const [cowTop, setCowTop] = useState("200%")
  const [cowRight, setCowRight] = useState("-21%")
  const [cowZIndex, setCowZIndex] = useState(1)

  const [dogOpacity, setDogOpacity] = useState(0)
  const [dogTop, setDogTop] = useState("174%")
  const [dogRight, setDogRight] = useState("-21%")

  const [bunnyOpacity, setBunnyOpacity] = useState(0)
  const [bunnyTop, setBunnyTop] = useState("174%")
  const [bunnyRight, setBunnyRight] = useState("-21%")

  const [penguinOpacity, setPenguinOpacity] = useState(0)
  const [penguinTop, setPenguinTop] = useState("132%")
  const [penguinRight, setPenguinRight] = useState("-21%")
  const [penguinZIndex, setPenguinZIndex] = useState(1)

  const [catOpacity, setCatOpacity] = useState(0)
  const [catTop, setCatTop] = useState("132%")
  const [catRight, setCatRight] = useState("-21%")

  const [animalCount, setAnimalCount] = useState(0)

  updateAnimal = (animal) => {
    if (animal == "cow") {
      if (animalCount == 0 || animalCount == 3) {
        setCowTop("199%")
      } else if (animalCount == 1 || animalCount == 2) {
        setCowTop("194%")
      }
      if (animalCount == 0) {
        setCowRight("35%")
        setCowZIndex(2)
      } else if (animalCount == 1) {
        setCowRight("21%")
      } else if (animalCount == 2) {
        setCowRight("-21%")
      } else if (animalCount == 3) {
        setCowRight("-35%")
        setCowZIndex(2)
      }
      setCowOpacity(1)
      setAnimalCount(animalCount + 1)
    } else if (animal == "dog") {
      if (animalCount == 0 || animalCount == 3) {
        setDogTop("177%")
      } else if (animalCount == 1 || animalCount == 2) {
        setDogTop("172%")
      } else if (animalCount == 3) {
        setDogTop("178%")
      }
      if (animalCount == 0) {
        setDogRight("31%")
      } else if (animalCount == 1) {
        setDogRight("21%")
      } else if (animalCount == 2) {
        setDogRight("-21%")
      } else if (animalCount == 3) {
        setDogRight("-36%")
      }
      setDogOpacity(1)
      setAnimalCount(animalCount + 1)
    } else if (animal == "bunny") {
      if (animalCount == 0 || animalCount == 3) {
        setBunnyTop("156%")
      } else if (animalCount == 1 || animalCount == 2) {
        setBunnyTop("150%")
      }
      if (animalCount == 0) {
        setBunnyRight("34%")
      } else if (animalCount == 1) {
        setBunnyRight("21%")
      } else if (animalCount == 2) {
        setBunnyRight("-21%")
      } else if (animalCount == 3) {
        setBunnyRight("-34%")
      }
      setBunnyOpacity(1)
      setAnimalCount(animalCount + 1)
    } else if (animal == "penguin") {
      if (animalCount == 0 || animalCount == 3) {
        setPenguinTop("139%")
      } else if (animalCount == 1 || animalCount == 2) {
        setPenguinTop("133%")
      }
      if (animalCount == 0) {
        setPenguinRight("34%")
        setPenguinZIndex(2)
      } else if (animalCount == 1) {
        setPenguinRight("21%")
      } else if (animalCount == 2) {
        setPenguinRight("-21%")
      } else if (animalCount == 3) {
        setPenguinRight("-34%")
        setPenguinZIndex(2)
      }
      setPenguinOpacity(1)
      setAnimalCount(animalCount + 1)
    } else if (animal == "cat") {
        if (animalCount < 4) {
        setModalVisible(true)
        if (animalCount == 0 || animalCount == 3) {
          setCatTop("119%")
        } else if (animalCount == 1 || animalCount == 2) {
          setCatTop("113%")
        }
        if (animalCount == 0) {
          setCatRight("32%")
        } else if (animalCount == 1) {
          setCatRight("21%")
        } else if (animalCount == 2) {
          setCatRight("-22%")
        } else if (animalCount == 3) {
          setCatRight("-36%")
        }
        setCatOpacity(1)
        setAnimalCount(animalCount + 1)
      }
    }
  }

  return (
    <View style={activity1Styles.container}>
      <View style={activity1Styles.topBar}>
        <Image source={require("./assets/activity1/cow.svg")} style={[activity1Styles.cow, {opacity: cowOpacity, top: cowTop, right: cowRight}]} id='cow'  />
        <Image source={require("./assets/activity1/dog.svg")} style={[activity1Styles.dog, {opacity: dogOpacity, top: dogTop, right: dogRight}]} id='dog' />
        <Image source={require("./assets/activity1/bunny.svg")} style={[activity1Styles.bunny, {opacity: bunnyOpacity, top: bunnyTop, right: bunnyRight}]} id='bunny' />
        <Image source={require("./assets/activity1/penguin.svg")} style={[activity1Styles.penguin, {opacity: penguinOpacity, top: penguinTop, right: penguinRight, zIndex: penguinZIndex}]} id='penguin' />
        <Image source={require("./assets/activity1/cat.svg")} style={[activity1Styles.cat, {opacity: catOpacity, top: catTop, right: catRight}]} id='cat' />
        <Image source={require("./assets/activity1/fox.svg")} style={activity1Styles.fox} id='fox' />
        <Image source={require("./assets/activity1/leftChair.svg")} style={activity1Styles.leftChar2} />
        <Image source={require("./assets/activity1/leftChair.svg")} style={activity1Styles.leftChar1} />
        <Image source={require("./assets/activity1/oreoCenter.svg")} style={activity1Styles.centerChar} />
        <Image source={require("./assets/activity1/rightChair.svg")} style={activity1Styles.rightChar1} />
        <Image source={require("./assets/activity1/rightChair.svg")} style={activity1Styles.rightChar2} />
        <Image source={require("./assets/activity1/table1.svg")} style={activity1Styles.table} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
      >
        <View style={activity1Styles.centeredView}>
          <View style={activity1Styles.modalView}>
            <Text style={activity1Styles.modalText}>Create Your Character</Text>
            <SafeAreaView>
            <TextInput
              style={activity1Styles.input}
              onChangeText={onChangeText}
              placeholder="Name..."
              value={text}
            />
            <TextInput
              style={activity1Styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Phone number..."
            />
            <TextInput
              style={activity1Styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email address..."
            />
          </SafeAreaView>
            <Pressable
              style={[activity1Styles.button, activity1Styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={activity1Styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={activity1Styles.bottomCharChoser}>
        <Text style={activity1Styles.choseTitle}>Choose a Character</Text>
        <View style={activity1Styles.topRow}>
          <Pressable onPress={() => updateAnimal('dog')} style={activity1Styles.char1}><Image source={require("./assets/activity1/dog.svg")} style={activity1Styles.chooseDog} /></Pressable>
          <Pressable onPress={() => updateAnimal('cow')} style={activity1Styles.char2}><Image source={require("./assets/activity1/cow.svg")} style={activity1Styles.chooseCow} /></Pressable>
          <Pressable onPress={() => updateAnimal('bunny')} style={activity1Styles.char3}><Image source={require("./assets/activity1/bunny.svg")} style={activity1Styles.chooseBunny} /></Pressable>
        </View>
        <View style={activity1Styles.bottomRow}>
          <Pressable onPress={() => updateAnimal('penguin')} style={activity1Styles.char4}><Image source={require("./assets/activity1/penguin.svg")} style={activity1Styles.choosePenguin} /></Pressable>
          <Pressable onPress={() => updateAnimal('cat')} style={activity1Styles.char5}><Image source={require("./assets/activity1/cat.svg")} style={activity1Styles.chooseCat} /></Pressable>
          <Pressable onPress={() => navigation.navigate("Activity1PreScreen")} style={activity1Styles.char6}><Image source={require("./assets/activity1/fox.svg")} style={activity1Styles.chooseFox} /></Pressable>
        </View>
      </View>
    </View>
  )
}

const activity1Styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#ECF7FB',
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dog: {
    width: "22%",
    height: "22%",
    resizeMode: "contain",
    right: "34%",
    top: "112%",
    opacity: "0%",
    zIndex: 1,
  },
  cow: {
    width: "22%",
    height: "22%",
    resizeMode: "contain",
    right: "-21%",
    top: "200%",
    opacity: 0,
    zIndex: 1,
  },
  bunny: {
    width: "18%",
    height: "18%",
    resizeMode: "contain",
    right: "34%",
    top: "112%",
    opacity: "0%",
    zIndex: 1,
  },
  penguin: {
    width: "19%",
    height: "19%",
    resizeMode: "contain",
    right: "21%",
    top: "132%",
    opacity: "0%",
    zIndex: 1,
  },
  cat: {
    width: "22%",
    height: "22%",
    resizeMode: "contain",
    right: "-35%",
    // 119
    top: "113%", 
    opacity: "0%",
    zIndex: 1,
  },
  fox: {
    width: "24%",
    height: "24%",
    resizeMode: "contain",
    right: "31%",
    // 96
    top: "90%",
    opacity: "0%",
    zIndex: 1,
  },
  table: {
    width: "70%",
    height: "100%",
    bottom: "63%",
    resizeMode: "contain",
    zIndex: 2,
  },
  leftChar2: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    right: "34%",
    top: "79%",
  },
  leftChar1: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    right: "20%",
    top: "52%",
  },
  centerChar: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    top: "25%",
  },
  rightChar1: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    left: "20%",
    top: "12%",
  },
  rightChar2: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    left: "34%",
    top: "-1%",
  },
  chooseDog: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  chooseCow: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  chooseBunny: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  choosePenguin: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  chooseCat: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  chooseFox: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  char2: {
    width: "26%",
    left: 20,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  char3: {
    width: "26%",
    left: 40,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  char5: {
    width: "26%",
    left: 20,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  char6: {
    width: "26%",
    left: 40,
    height: "100%",
    backgroundColor: "#3B6872",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

function Activity13PreScreen({ navigation }) {
  const [currentInstructions, setcurrentInstructions] = useState("Welcome to Sensing for Soothing! An often-used, reliable technique for oncoming waves of anxiety is the 5-4-3-2-1 method.");
  const [currText, setCurrText] = useState(<TypeWriter style={activity1PreScreenStyles.instructionText} typing={1} maxDelay={30}>{currentInstructions}</TypeWriter>)
  let fontsLoaded = useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular
  });  
  redirect = () => {
    if (currText.props.maxDelay == 30 && currentInstructions == "Welcome to Sensing for Soothing! An often-used, reliable technique for oncoming waves of anxiety is the 5-4-3-2-1 method.") {
      setCurrText(<Text style={activity13PreScreenStyles.instructionText} maxDelay={0}>Welcome to Sensing for Soothing! An often-used, reliable technique for oncoming waves of anxiety is the 5-4-3-2-1 method.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "Welcome to Sensing for Soothing! An often-used, reliable technique for oncoming waves of anxiety is the 5-4-3-2-1 method.") {
      setcurrentInstructions("This strategy works by identifying things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste.")
      setCurrText(<TypeWriter style={activity13PreScreenStyles.instructionText} typing={1} maxDelay={30}>This strategy works by identifying 5 things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste.</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "This strategy works by identifying things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste.") {
      setCurrText(<Text style={activity13PreScreenStyles.instructionText} maxDelay={0}>This strategy works by identifying things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "This strategy works by identifying things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste.") {
      setcurrentInstructions("By recognizing our senses, we can ground ourselves in reality, and distract from the things we fear.")
      setCurrText(<TypeWriter style={activity13PreScreenStyles.instructionText} typing={1} maxDelay={30}>By recognizing our senses, we can ground ourselves in reality, and distract from the things we fear.</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "By recognizing our senses, we can ground ourselves in reality, and distract from the things we fear.") { 
      setCurrText(<Text style={activity13PreScreenStyles.instructionText} maxDelay={0}>By recognizing our senses, we can ground ourselves in reality, and distract from the things we fear.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "By recognizing our senses, we can ground ourselves in reality, and distract from the things we fear.") {
      setcurrentInstructions("Today, you’ll stock your shelves with ideas you can call upon in times you need it, practicing your skills of identifying feelings and tastes around you.")
      setCurrText(<TypeWriter style={activity13PreScreenStyles.instructionText} typing={1} maxDelay={30}>Today, you’ll stock your shelves with ideas you can call upon in times you need it, practicing your skills of identifying feelings and tastes around you.</TypeWriter>)
    } else if (currText.props.maxDelay == 30 && currentInstructions == "Today, you’ll stock your shelves with ideas you can call upon in times you need it, practicing your skills of identifying feelings and tastes around you.") {
      setCurrText(<Text style={activity13PreScreenStyles.instructionText} maxDelay={0}>Today, you’ll stock your shelves with ideas you can call upon in times you need it, practicing your skills of identifying feelings and tastes around you.</Text>)
    } else if (currText.props.maxDelay == 0 && currentInstructions == "Today, you’ll stock your shelves with ideas you can call upon in times you need it, practicing your skills of identifying feelings and tastes around you.") {
      navigation.navigate("Activity13")
    }
  };
  return (
    <Pressable style={activity13PreScreenStyles.container} onPress={this.redirect}>
      <Image source={require("./assets/activity14/Penguin.png")} style={activity14PreScreenStyles.penguin} />
      <ImageBackground source={require("./assets/activity14/TextBubble.png")} style={activity14PreScreenStyles.speechbubble}>
        {currText}
        <Text style={activity13PreScreenStyles.prompt}>TAP ANYWHERE ON THE SCREEN TO MOVE FORWARD</Text>
      </ImageBackground>
    </Pressable>
  )
}

const activity13PreScreenStyles = StyleSheet.create({
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
    fontSize: 9,
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
    marginTop: "3%",
    textAlign: 'left',
    marginRight: "20%",
    color: '#414141',
  },
})

function Activity13({ navigation }) {
  let [fontsLoaded] = useFonts({
    Itim_400Regular
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  redirect = () => {
    navigation.navigate("Home")
  };
  redirect2 = () => {
    navigation.navigate("SightSense")
  };
  return (
    <View style={activity13Styles.container}>
      <Pressable style={activity13Styles.backButton} onPress={this.redirect}>
        <Image source={require("./assets/activity13/arrow.svg")} style={{ width: "50%", height: "50%" }} />
      </Pressable>
      <View style={activity13Styles.topBuffer}></View>
      <View style={activity13Styles.row}>
        <Text style={activity13Styles.rowLetter}>S</Text>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={activity13Styles.shelfRow}>
          <View style={[activity13Styles.shelfAccent2, {width: "110%", zIndex: "10"}]}></View>
          <View style={activity13Styles.mainShelf}>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }} onPress={this.redirect2}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
          </View>
          <View style={activity13Styles.shelfAccent1}></View>
          <View style={activity13Styles.shelfAccent2}></View>
          <View style={activity13Styles.shelfAccent3}></View>
        </View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600", zIndex: "-1"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
      </View>
      <View style={activity13Styles.row}>
        <Text style={activity13Styles.rowLetter}>I</Text>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={activity13Styles.shelfRow}>
        <View style={activity13Styles.mainShelf}>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
          </View>
          <View style={activity13Styles.shelfAccent1}></View>
          <View style={activity13Styles.shelfAccent2}></View>
          <View style={activity13Styles.shelfAccent3}></View>
        </View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
      </View>
      <View style={activity13Styles.row}>
        <Text style={activity13Styles.rowLetter}>G</Text>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={activity13Styles.shelfRow}>
        <View style={activity13Styles.mainShelf}>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
          </View>
          <View style={activity13Styles.shelfAccent1}></View>
          <View style={activity13Styles.shelfAccent2}></View>
          <View style={activity13Styles.shelfAccent3}></View>
        </View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
      </View>
      <View style={activity13Styles.row}>
        <Text style={activity13Styles.rowLetter}>H</Text>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={activity13Styles.shelfRow}>
        <View style={activity13Styles.mainShelf}>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
          </View>
          <View style={activity13Styles.shelfAccent1}></View>
          <View style={activity13Styles.shelfAccent2}></View>
          <View style={activity13Styles.shelfAccent3}></View>
        </View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600"}}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222"}}></View>
      </View>
      <View style={activity13Styles.row}>
        <Text style={activity13Styles.rowLetter}>T</Text>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222" }}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600", marginTop: "-5%" }}></View>
        <View style={activity13Styles.shelfRow}>
          <View style={[activity13Styles.mainShelf, {height: "85%"}]}>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
            <Pressable style={{ width: "25%", height: "90%", borderColor: "#FFF", borderRadius: "25px", borderWidth: 5, borderStyle: "dotted", marginLeft: "6.25%" }}></Pressable>
          </View>
          <Image source={require("./assets/activity13/shelfBottom.png")} style={{width: "110%", height: "30%", resizeMode: "contain", zIndex: "10", marginTop: -2 }} />
        </View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#532600", marginTop: "-5%", zIndex: "-1" }}></View>
        <View style={{width: "2%", height: "100%", backgroundColor: "#B67222" }}></View>
      </View>
      <View style={activity13Styles.bottomBuffer}></View>
    </View>
  )
}

const activity13Styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 50,
    left: "5%",
    bottom: "5%",
    position: 'absolute',
    zIndex: 10,
    borderRadius: 50,
    backgroundColor: "#1C5360",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: '#F0DCBB',
    width: "100%",
    height: "100%",
    display: "flex",

    flexDirection: 'column',
  },
  topBuffer: {
    width: "100%",
    height: "10%",
    top: 0,
    flexDirection: 'row',
    alignItems: 'top',
  },
  row: {
    width: "100%",
    height: "14%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  shelfRow: {
    width: "67%", 
    height: "100%", 
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainShelf: {
    backgroundColor: "#3E1300",
    width: "100%",
    height: "85%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  shelfAccent1: {
    backgroundColor: "#683205",
    width: "100%",
    height: "5%",
  },
  shelfAccent2: {
    backgroundColor: "#B67222",
    width: "100%",
    height: "5%",
  },
  shelfAccent3: {
    backgroundColor: "#572D08",
    width: "100%",
    height: "5%",
  },
  rowLetter: {
    width: 65, 
    marginLeft: 25, 
    fontFamily: "Itim_400Regular", 
    fontSize: 80,
  },
  bottomBuffer: {
    width: "100%",
    height: "20%",
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'bottom',
    backgroundColor: "#C88978",
  }
});

function SightSense({ navigation }) {
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
    <View style={sightSense.container}>
      <View style={sightSense.topBar}>
        <TextInput style={{ fontFamily: "InriaSans_700Bold", fontSize: 20, color: '#3B6872' }} placeholder='Name this scene...'></TextInput>
      </View>
      <View style={sightSense.canvas}>
        <GestureHandlerRootView style={{ flex: 1, height: "60%", width: "100%" }}>
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
      <View style={sightSense.bottomContainer}>
        <Image source={require('./assets/activity17/CanvasStand.png')} style={sightSense.canvasStand} />
        <ImageBackground source={require('./assets/activity17/Palette.png')} style={sightSense.palette}>
          <Pressable onPress={setColorBlue} style={sightSense.blueColor}></Pressable>
          <Pressable onPress={setColorRed} style={sightSense.redColor}></Pressable>
          <Pressable onPress={setColorYellow} style={sightSense.yellowColor}></Pressable>
          <Pressable onPress={setColorGreen} style={sightSense.greenColor}></Pressable>
          <Pressable onPress={setColorPurple} style={sightSense.purpleColor}></Pressable>
          <Pressable onPress={setColorOrange} style={sightSense.orangeColor}></Pressable>
          <Pressable onPress={setColorBrown} style={sightSense.brownColor}></Pressable>          
        </ImageBackground>
        <Image source={require('./assets/activity17/paintingPenguin.png')} style={sightSense.penguin}></Image>
      </View>
    </View>
  );
}

const sightSense = StyleSheet.create({
  topBar: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
    height: "60%",
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
        <Stack.Screen name="Activity13PreScreen" component={Activity13PreScreen} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity13" component={Activity13} options={{ animate: "none" }}/>
        <Stack.Screen name="SightSense" component={SightSense} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity14PreScreen" component={Activity14PreScreen} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity14" component={Activity14} options={{ animate: "none" }}/>
        <Stack.Screen name="Activity17" component={Activity17} options={{ animate: "none" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}