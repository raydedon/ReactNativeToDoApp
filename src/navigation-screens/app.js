import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TabScreenNavigator from './tab-navigation-def';
import StackScreenNavigator from './stack-navigation-def';

export default class App extends Component {
    render() {
        return (
            <StackScreenNavigator/>
        );
    }
}
