import { TabNavigator } from "react-navigation";
import RecentChatsScreen from './recent-chats-screen';
import AllContactsScreen from './all-contacts-screen';

const TabScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});

export default TabScreenNavigator;