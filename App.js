import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileProvider from './src/contexts/ProfileContext';

import Home from './src/pages/Home';
import Bio from './src/pages/Bio';
import Orgs from './src/pages/Orgs';
import Repositories from './src/pages/Repositories';
import Followers from './src/pages/Followers';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#f7f8fc' },
            headerTintColor: 'black',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        >
          <Stack.Screen 
            name="home" component={Home}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="biography" component={Bio}
            options={() => ({ title: 'Biografia' })}
          />
          <Stack.Screen 
            name="organizations" 
            component={Orgs}
            options={() => ({ title: 'Organizações' })}
          />
          <Stack.Screen 
            name="repositories" 
            component={Repositories}
            options={() => ({ title: 'Repositórios' })}
          />
          <Stack.Screen 
            name="followers" 
            component={Followers}
            options={() => ({ title: 'Seguidores' })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}
