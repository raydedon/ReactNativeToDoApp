import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TaskDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name.first}'s details`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
            </View>
        );
    }
}
