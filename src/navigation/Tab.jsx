import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; 
import FolderScreen from '../screens/FolderScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

import { Home, Search, Folder, Settings } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case '홈':
              return <Home color={color} size={size} />;
            case '검색':
              return <Search color={color} size={size} />;
            case '폴더':
              return <Folder color={color} size={size} />;
            case '설정':
              return <Settings color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="검색" component={SearchScreen} />
      <Tab.Screen name="폴더" component={FolderScreen} />
      <Tab.Screen name="설정" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
