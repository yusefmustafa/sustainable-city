import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MapView from 'react-native-maps';

export default function MapScreen() {

    const [carouselItems, setCarouselItems] = useState([
        {title:"Item 1", text: "Text 1",},
        {title:"Item 2", text: "Text 2",},
        {title:"Item 3", text: "Text 3",},
        {title:"Item 4", text: "Text 4",},
        {title:"Item 5", text: "Text 5",}
    ]);
    
    const [activeIndex, setActiveIndex] = useState(0);

    function renderItem({item,index}) {
        return (
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 7.5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <MapView style={{
                width: "100%",
                height: "100%",
            }} />

            <View style={{ bottom:25, flex: 1, flexDirection:'row', justifyContent: 'center', position:'absolute'}}>
                <Carousel
                    layout={"default"}
                    ref={ref => carousel = ref}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem = { index => setActiveIndex(index) } />
            </View>
        </View>
   );
}