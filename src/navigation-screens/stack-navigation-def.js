import { StackNavigator } from 'react-navigation';
import HomeScreen from './home-screen';
import ChatScreen from './chat-screen';
import TabScreenNavigator from './tab-navigation-def';

const StackScreenNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Welcome Bitch, I am Dummy',
        },
    },

    Tabs: {
        screen: TabScreenNavigator,
        navigationOptions: {
            title: 'My Chats',
        },
    },

    Chat: { screen: ChatScreen },
});

export default StackScreenNavigator;