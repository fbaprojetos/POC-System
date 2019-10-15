import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import logo from './assets/gabarito_logo.png'

import Menu from './pages/Menu';
import Feed from './pages/Feed'

const Routes = createAppContainer(
    createStackNavigator({
        Menu: {
            screen: Menu,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <Image source={logo} />,
                headerStyle: {
                    backgroundColor: '#f46522'
                }
            })
        },
        Feed: {
            screen: Feed,
            navigationOptions: () => ({
                headerTitle: 'Feed',
                headerStyle: {
                    backgroundColor: '#ffffff'
                }
            })
        },
    }, {
        headerLayoutPreset: 'center'
    })
);

export default Routes;