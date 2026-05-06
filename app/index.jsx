import { StyleSheet,Text,Image, View } from "react-native";
import { Link } from "expo-router";
import icon from '../assets/icon.png';
const Home = () =>{
    return (
        <View style={styles.container}>
            <Image source={icon} />
        <Text style={styles.title}> Home</Text>
        <Link href="/about">About Page</Link>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize:18
    }
})