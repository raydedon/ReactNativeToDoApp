import { AppRegistry } from 'react-native';
import CoinRootNavigator from "./src/coins/index";
import TabScreenNavigator from './src/navigation-screens/tab-navigation-def';
import StackScreenNavigator from './src/navigation-screens/stack-navigation-def';


AppRegistry.registerComponent('ReactNativeToDoApp', () => StackScreenNavigator);
