import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import CustomOnboarding from './src/screens/CustomOnboarding'; // 경로 맞게 수정
import Tab from './src/navigation/Tab';

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {

    AsyncStorage.removeItem('alreadyLaunched');
    
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (firstLaunch === null) return null;

  return (
    <NavigationContainer>
      {firstLaunch ? (
        <CustomOnboarding onFinish={() => setFirstLaunch(false)} />
      ) : (
        <Tab />
      )}
    </NavigationContainer>
  );
}
