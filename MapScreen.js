import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MapView, {AnimatedRegion, Animated, Camera} from 'react-native-maps';

export default function MapScreen() {

    const [carouselItems, setCarouselItems] = useState([
        {title:"Item 1", text: "Text 1",},
        {title:"Item 2", text: "Text 2",},
        {title:"Item 3", text: "Text 3",},
        {title:"Item 4", text: "Text 4",},
        {title:"Item 5", text: "Text 5",}
    ]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [region, setRegion] = useState({
        latitude: parseFloat(32.7353),
        longitude: parseFloat(-117.1490),
        latitudeDelta: 1,
        longitudeDelta: 1
    });

    const mapView = React.createRef();

    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            position => {        
                let currentRegion = {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: 5,
                    longitudeDelta: 5
                };
                setRegion(currentRegion);
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
    }

    useEffect(() => {
        if (mapView) {
            //  getCurrentLocation();
            //  For demo purposes we will use only (San Diego)
            mapView.current.animateToRegion(region);
            mapView.current.animateCamera({center: region, altitude: 8000, zoom:8000});
        }
    }, []);


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
            <MapView initialRegion={region}
            showsUserLocation={true}
            ref={mapView}
            style={{ width: "100%", height: "100%",}}>
            </MapView>
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