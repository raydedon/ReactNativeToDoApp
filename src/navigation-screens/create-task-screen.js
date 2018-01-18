import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CreateTaskScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Create task screen`,
        headerRight: <Icon.Button name="plus" size={20} color="#fff" onPress={() => navigation.navigate('Home')}/>,
    });

    constructor(props) {
        super(props);
        this.state = {
            name : {
                title: 'mr',
                first: '',
                last: ''
            }
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState((prevState) => {
                        return Object.assign(prevState, {name: {first: text}});
                    })}
                    value={this.state.name.first}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState((prevState) => {
                        return Object.assign(prevState, {name: {last: text}});
                    })}
                    value={this.state.name.last}
                />
            </View>
        );
    }
}
