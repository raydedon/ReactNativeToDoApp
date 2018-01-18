import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CreateTaskScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: `Create task screen`,
            headerLeft: <Icon name="times" size={20} color="#ccc" onPress={() => navigation.navigate('Home')}/>,
            headerRight: <Icon name="check" size={20} color="#ccc" onPress={() => navigation.navigate('Home')}/>,
    });
    render() {
        return (
            <View>
                <Text>Please add details of the task</Text>
            </View>
        );
    }
}
