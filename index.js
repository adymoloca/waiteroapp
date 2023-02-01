import 'react-native-reanimated';
import { AppRegistry, LogBox } from 'react-native';

import App from './App';

const newLocal = 'main';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent(newLocal, () => App)
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["SerializableStateInvariantMiddleware"]);