import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TaskDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name.first}'s details`,
        headerRight: <Icon.Button name="check" size={20} color="#fff" onPress={() => navigation.navigate('Home')}/>,
    });
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.navigation.state.params
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={params.name.first}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={params.name.last}
                />
            </View>
        );
    }
}
