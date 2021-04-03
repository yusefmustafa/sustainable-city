import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MapView from 'react-native-maps';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [{
          title:"Item 1",
          text:"Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      },
    ]
  }
}

_renderItem({item,index}) {
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
}
render() { 
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
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) } />
      </View>
    </View>
    
    );
  }
}
