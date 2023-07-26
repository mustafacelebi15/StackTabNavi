import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";

function MemberResult({route}){

    const {user} = route.params
    return(
        <SafeAreaView>
            <Text style={styles.message}> Kayit Tamamlandi</Text>
            <Text style={styles.label}>Üye Adi: {user.username}</Text>
            <Text style={styles.label}>Üye Soyadi: {user.usersurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userage}</Text>
            <Text style={styles.label}>Üye E-posta: {user.usermail}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize: 30,
        fontWeight:'bold',
        margin:5,
    },
    message:{
        fontWeight:'bold',
        fontSize: 50,
        textAlign: 'center',
    },
});

export default MemberResult;