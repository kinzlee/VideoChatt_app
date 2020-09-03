/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigation from './src/Navigation/AppNavigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigation);
