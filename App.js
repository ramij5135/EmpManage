import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDefaultTheme} from './src/utils/theme';
import AppNavigation from "./src/layouts/navigation/AppNavigation";
import { StatusBar } from 'react-native';
import { COLORS } from './src/utils/globalStyles';
import { store } from './src/layouts/store/store';
import { Provider } from 'react-redux';


export default function App() {
    return (
            <Provider store={store}>
                <PaperProvider theme={CombinedDefaultTheme}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.primary} />
                    <NavigationContainer theme={CombinedDefaultTheme}>
                        <AppNavigation/>
                    </NavigationContainer>
                </PaperProvider>
            </Provider>
    );
}
