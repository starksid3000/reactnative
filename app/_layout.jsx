import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
const RootLayout = () =>{
    const colorScheme = useColorScheme();
    return(
            <Stack screenOptions={{headerStyle:{backgroundColor: '#ddd'}, headerTintColor:'#333'}}>
                <Stack.Screen name="index" options={{title:'Home'}}/>
                <Stack.Screen name="about" options={{title:'About'}}/>
            </Stack>
    )
}

export default RootLayout
