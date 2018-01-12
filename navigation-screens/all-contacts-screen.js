import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class AllContactsScreen extends Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}