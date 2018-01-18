import { StackNavigator } from 'react-navigation';
import HomeScreen from './home-screen';
import ChatScreen from './chat-screen';
import TabScreenNavigator from './tab-navigation-def';
import ListViewTasks from "../views/list-view-tasks";
import TaskDetails from "./task-details-screen";
import CreateTaskScreen from "./create-task-screen";

const StackScreenNavigator = StackNavigator({
        Home: {
            screen: ListViewTasks,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                title: 'Welcome Bitch, I am Dummy',
                header: null
            },
        },

        Tabs: {
            screen: TabScreenNavigator,
            navigationOptions: {
                title: 'My Chats',
            },
        },

        Chat: { screen: ChatScreen },

        TaskDetails: { screen: TaskDetails },
        CreateTaskScreen: { screen: CreateTaskScreen },
    }
);

export default StackScreenNavigator;