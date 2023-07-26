import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";

import Input from "../Components/Input";
import Button from "../Components/Button";
function MemberSign({navigation}){
    const[username, setUsername] = useState(null);
    const[usersurname, setUsersurname] = useState(null);
    const[userage, setUserage] = useState(null);
    const[usermail, setUsermail] = useState(null);

    function handleSubmit() {
        if(!username || !usersurname || !userage || !usermail){
Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş birakilamaz');
return;
        }
        const user ={
            username,
            usersurname,
            userage,
            usermail,
        };
        console.log(user);
        navigation.navigate('MemberResultScreen', {user});
    }

    return(
        <SafeAreaView>
            <Text>Member Sign</Text>
            <Input label="Üye Adi" placeholder="Üyenin ismini giriniz..." onChangeText={setUsername}/>
            <Input label="Üye Soyadi" placeholder="Üyenin soyadini giriniz..." onChangeText={setUsersurname}/>
            <Input label="Üye Yaş" placeholder="Üyenin yaşini giriniz..." onChangeText={setUserage}/>
            <Input label="Üye E-posta" placeholder="Üyenin e-posta adresini giriniz..." onChangeText={setUsermail}/>
            <Button text="Kaydi Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    )
}

export default MemberSign