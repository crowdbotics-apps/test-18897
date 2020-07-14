import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings78477Navigator from '../features/Settings78477/navigator';
import UserProfile78470Navigator from '../features/UserProfile78470/navigator';
import Settings78469Navigator from '../features/Settings78469/navigator';
import Settings78467Navigator from '../features/Settings78467/navigator';
import SignIn278465Navigator from '../features/SignIn278465/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings78477: { screen: Settings78477Navigator },
UserProfile78470: { screen: UserProfile78470Navigator },
Settings78469: { screen: Settings78469Navigator },
Settings78467: { screen: Settings78467Navigator },
SignIn278465: { screen: SignIn278465Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
