import React, { Component } from 'react';
import {
    View,
    ListView,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import data from '../../data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
    },
    listItemContainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
        textAlign: 'left'
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    icon: {
    },
});

export default class ListViewTasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: data,
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            searchText: ''
        };

        this.filterData = this.filterData.bind(this);
    }

    componentDidMount() {
        // this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    handleRefresh = () => {
/*
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
*/
    };

    handleLoadMore = () => {
/*
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
*/
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            />
        );
    };

    renderHeader = () => {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={this.state.searchText}
                    underlineColorAndroid="transparent"
                    onChangeText={(searchText) => this.setState({searchText})}
                />
            </View>
        );
    };

    filterData = () => {
        let { data, searchText } = this.state;
        return searchText === ''
            ? data
            : data.filter(({ email }) => new RegExp(searchText, 'i').test(email));
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    addNewItemOnState = (data) => {
        this.setState({data: [...this.state.data, data]});
    };

    updateItemOnState = (data) => {
        let updatedData = this.state.data.map(item => {
            if(item.email === data.email) {
                item.name = JSON.parse(JSON.stringify(data.name));
            }
            return item;
        });
        this.setState((prevState) => {
            return Object.assign({}, prevState, {data: updatedData});
        });
    };

    render() {
        const { params = {} } = this.props.navigation.state;
        let filteredData = this.filterData();
        return (
            <View style={styles.container}>
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TaskDetails', { ...item, updateItemOnState: this.updateItemOnState })}>
                            <View style={styles.listItemContainer}>
                                <Image source={{ uri: item.picture.large}} style={styles.photo} />
                                <Text style={styles.text}>{`${item.name.first} ${item.name.last}`}</Text>
                                <Icon name="angle-right" size={30} color="#900" style={styles.icon}/>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={50}
                />
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => this.props.navigation.navigate('CreateTaskScreen')}
                />
                <Text>{params.user}</Text>
            </View>
        );
    }
}
