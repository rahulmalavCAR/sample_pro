import React from "react";
import {View,Text,StyleSheet,Button} from "react-native"
import localization from "../utils/Localization";
import { useState } from "react";

const HomeScreen:React.FC=()=>{
    const [state, setState] = useState({});
    const handleSwitchLanguage=()=>{
        // Change the language dynamically for demonstration purposes.
    localization.setLanguage(localization.getLanguage() === 'en' ? 'es' : 'en');
    setState({});
    }

    return(
        <View style={styles.container}>
      <Text>{localization.greeting}</Text>
      <Text>{localization.welcome}</Text>
      <Button title="Switch Language" onPress={handleSwitchLanguage} />
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

})
export default HomeScreen;