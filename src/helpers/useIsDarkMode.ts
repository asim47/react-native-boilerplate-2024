import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { DarkModeHookReturn } from '../interfaces';

const useIsDarkMode: () => DarkModeHookReturn = () => {

    const isDarkMode = (useColorScheme() === "dark");

    return {
        isDarkMode,
        modeName: isDarkMode ? "dark" : "light"
    }
}

export default useIsDarkMode