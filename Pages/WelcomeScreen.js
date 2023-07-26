import React from "react";
import { SafeAreaView, Text, View, StyleSheet} from "react-native";    
import Button from '../Components/Button';
function Welcome({navigation}){
    
    function gotoMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="Üye Kaydi Oluştur" onPress={gotoMemberSign}/>
        </SafeAreaView>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    header:{
textAlign:'center',
fontSize: 30,
fontWeight:'bold',
margin:10,
    },

})

export default Welcome;