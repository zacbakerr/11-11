import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { 
  useFonts,
  GemunuLibre_400Regular,
} from '@expo-google-fonts/dev';

export default function checkIn() {
    let [fontsLoaded] = useFonts({
        GemunuLibre_400Regular
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Check In</Text>
        </View>
    );
}