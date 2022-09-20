import react from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Post(){

    return (
        <View style = {styles.mainView}>
            <View style = {styles.postHeader}>
                <Image style = {styles.postProfile} 
                source = {{uri : "https://cdn.mos.cms.futurecdn.net/QKJVSuL6HhvhKwJf23knri.jpg"}}/>
                <View style = {styles.postProfileName}>
                    <Text style = {{fontSize : 18}}>IronMan</Text>
                    <Text style = {{fontSize : 14,color:'rgba(0,0,0,60)'}}>Additional info</Text>
                </View>
                <TouchableOpacity>
                    <Image style = {{height : 24, width : 24}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/2311/2311524.png"}}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.postImage}>
                <Image style = {{height : '100%',width : '100%',resizeMode : 'stretch'}}
                source = {{uri : "https://media.istockphoto.com/photos/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-picture-id1368965646?s=612x612"}}/>
            </View>
            <View style = {styles.postFooter}>
                <TouchableOpacity>
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/3193/3193015.png"}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.claimButton}>
                    <Text style = {styles.claimButtonText}>CLAIM</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/154/154843.png"}}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/565/565340.png"}}/>
                </TouchableOpacity>
            </View>
            <View style  = {{width : '100%',height : 10,alignItems : 'center'}}>
                    <View style = {{width : 180,height : 1,backgroundColor : 'rgba(0,0,0,0.5)'}}/>
            </View>
            <View style = {styles.aboutPostContainer}>
                <View style = {{width : 100}}></View>
                <Text style = {{fontSize : 15}}>My Rear Collection</Text>
                <Text style = {{fontSize : 11}}>8:40 AM , 12 sep 2020</Text>
            </View>
            <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
            <View style = {{width : '100%',height : 1}}></View>
            <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
        </View>
    )
}

const styles = StyleSheet.create({

    mainView : {
        height : 511,
        marginBottom : 100,
    },

    aboutPostContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 10,
    },

    postImage : {
        alignItems : 'center',
        height : 400,
        width : '100%',
        marginBottom : 20,
    },

    postFooter : { 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

        //paddingBottom : 10,
        marginBottom : 20,
        paddingLeft : 10,
        paddingRight : 10,
    },

    postHeader : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10,
    },

    postProfileName : {
        flex : 1,
        marginLeft : 10,
        fontSize : 12,
    },

    postProfile : { 
        borderRadius : 50,
        height : 50,
        width : 50
    },

    claimButton : {
        height : 40,
        width : 120,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(9,252,150,100)',
        borderRadius : 40,
    },

    claimButtonText : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold'},
});