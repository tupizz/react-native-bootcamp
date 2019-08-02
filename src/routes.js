import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import WebViewPage from './pages/WebView';

const Routes = createAppContainer(
    createStackNavigator(
        { Main, User, WebViewPage },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#fff',
            },
        }
    )
);

export default Routes;
