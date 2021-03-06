// @flow
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import {LoginScreen} from './features/auth/screens';
import {EventsScreen, EventDetail} from './features/events/screens';

import AllNotificationsScreen from './features/notification/screens/AllNotificationsScreen';

import {
  SearchRepositoryScreen,
  SearchUserScreen,
} from './features/search/screens';
import {ProfileScreen, SettingScreen} from './features/profile/screens';
import {
  RepositoryScreen,
  RepositoryDetailScreen,
  RepositoryFileListScreen,
} from './features/repository/screens/index';

import SearchTab from './features/search/assets/SearchTab';
import renderIcon from './features/search/assets/renderIcon';

let Repository = createStackNavigator({
  RepositoryScreen: {
    screen: RepositoryScreen,
  },
  RepositoryDetailScreen: {
    screen: RepositoryDetailScreen,
  },
  RepositoryFileListScreen: {
    screen: RepositoryFileListScreen,
  },
});

let sharedScreens = {
  EventDetail: {
    screen: EventDetail,
  },
  Repository: {
    screen: Repository,
  },
};

let Events = createStackNavigator({
  EventsScreen: {
    screen: EventsScreen,
    navigationOptions: {
      title: 'events',
    },
  },
  ...sharedScreens,
});

let Setting = createStackNavigator({
  Setting: {
    screen: SettingScreen,
  },
});

let Profile = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Nah',
        header: null,
      },
    },
    Setting: {
      screen: Setting,
    },
    RepositoryDetailScreen: {
      screen: RepositoryDetailScreen,
    },
    ...sharedScreens,
  },
  {
    headerMode: 'none',
  },
);

let AllNotification = createStackNavigator(
  {
    AllNotificationsScreen: {
      screen: AllNotificationsScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
);
let Notification = createMaterialTopTabNavigator(
  {
    All: {
      screen: AllNotification,
    },
  },
  {
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
);

let Search = createMaterialTopTabNavigator(
  {
    Repositories: {
      screen: SearchRepositoryScreen,
      navigationOptions: {
        header: null,
      },
    },
    Users: {
      screen: SearchUserScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    tabBarComponent: SearchTab,
    animationEnabled: false,
  },
);

let SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  ...sharedScreens,
});

let GitClient = createBottomTabNavigator(
  {
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'home', size: 32, tintColor}),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'bell', size: 32, tintColor}),
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'magnify', size: 32, tintColor}),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          renderIcon({name: 'account', size: 32, tintColor}),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: 'grey',
    },
  },
);

let RootNavigation = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  GitClient: {
    screen: GitClient,
  },
});

export default RootNavigation;
