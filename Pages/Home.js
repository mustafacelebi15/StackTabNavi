import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

function Home(){
    return(
<SafeAreaView style={styles.container}>
    <Text style={styles.yazi}> Welcome Home</Text>
</SafeAreaView>

    )
}


const styles = StyleSheet.create({
    yazi:{
fontSize: 50,
fontWeight: 'bold',
    },
    container:{
        padding: 10,
        margin: 10,
        alignItems:'center',
    },
}
)

export default Home
