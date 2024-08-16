import { FlatList, View,Dimensions } from "react-native";

const {width} = Dimensions.get('window')

export default function Carousel({data}){
    return(
       <FlatList 
       data={data}
       keyExtractor={(item) => String(item)}
        horizontal 
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <View style={{
            backgroundColor:"#c3c3c3",
            height:width/2.6,
            width:width*0.8,
            marginHorizontal:10,
            borderRadius:12
        }}/>}
        />
    )
}