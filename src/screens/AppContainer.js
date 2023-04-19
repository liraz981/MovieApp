import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'react-native'
import Splash from './Splash';
import Movies from './Movies';
import MoviePage from './MoviePage';

const Stack = createNativeStackNavigator();


export class AppContainer extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Movies" component={Movies} options={{ headerShown: false }} />
                    <Stack.Screen name="MoviePage" component={MoviePage} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView >
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)