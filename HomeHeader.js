import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function HomeHeader(){

    return (
        <View style = {styles.header_text_container}>
            <Text style = {{fontSize : 22,fontFamily:'Inter'}}>NShades</Text>
            <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.magnifyContainer}>
                <Image style = {{width : 24 , height : 24}} 
                source = {require("../HomeComponents/src/search-bar.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.magnifyContainer,{marginLeft : 15}]}>
                <Image style = {{width : 35 , height : 35}} 
                source = {require("../HomeComponents/src/upload.png")}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header_text_container : {
        padding : 15,
        shadowColor : "black",
        shadowOffset : {width  : 1.5 , height : 1.5},
        shadowOpacity : 0.15,
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : "space-between",
        //shadowRadius : 10,
    },

    magnifyContainer : {
        marginRight : 15,
        justifyContent:'center',
        alignItems : 'center'},

    
});
