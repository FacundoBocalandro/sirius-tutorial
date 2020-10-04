import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MY_IP} from 'react-native-dotenv';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    image: {uri: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260/"},
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    image: {uri: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    image: {uri: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    image: {uri: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    image: {uri: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                },
            ]
        }
    }

    _renderItem({item, index}) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <ImageBackground source={item.image} style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{fontSize: 30, color: '#fff'}}>{item.title}</Text>
                    <Text style={{color: '#fff'}}>{item.text}</Text>
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50,}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Carousel
                        layout={"tinder"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({activeIndex: index})}/>
                </View>
            </SafeAreaView>
        );
    }
}
