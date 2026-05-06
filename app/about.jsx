import { StyleSheet,Text,Image, View } from "react-native";
const About = () =>{
    return(
         <View style={styles.container}>
                    <Image source={icon} />
                <Text style={styles.title}> About Page</Text>
                <Link href="/">Home Page</Link>
                </View>
    )
}
export default About

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