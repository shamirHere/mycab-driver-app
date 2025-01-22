import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateAccount , SignIn , ForgotPassword , VerifyOtp , CompleteProfile } from './src/screens/auth'

const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>            
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>
        <Stack.Screen name='CompleteProfile' component={CompleteProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 

// import React from 'react';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Welcome } from './src/screens/auth';
// import { useColorScheme } from 'react-native';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const scheme = useColorScheme();

//   return (
//     <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Welcome" component={Welcome} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;