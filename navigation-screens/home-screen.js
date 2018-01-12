import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>I am the first screen</Text>
                <Button
                    onPress={() => navigate('Tabs')}
                    title="Lets check the chat app"
                />
            </View>
        );
    }
}