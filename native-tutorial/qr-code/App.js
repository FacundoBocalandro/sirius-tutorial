import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyBottomNavigation from "./bottom-nav/components/MyBottomNavigation";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function App() {
    return (
        <MyBottomNavigation/>
    );
}
