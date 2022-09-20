import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import { FlatList, ScrollView } from 'react-native-web';
import HomeHeader from '../Components/HomeComponents/HomeHeader';
import Post from '../Components/HomeComponents/Post';


export default function HomePage(){
    return (
            <View style = {{flex : 1}}>
                <HomeHeader/>
                <ScrollView>
                    <Post/>
                    <Post/>
                </ScrollView>
            </View>
    );
}