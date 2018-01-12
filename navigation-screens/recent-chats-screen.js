import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class RecentChatsScreen extends Component {
    render() {
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}