import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Icons from './src/components/Icons';

import Header from './src/components/layout/Header';
import Stack from './src/components/layout/Stack';
import Footer from './src/components/layout/Footer';

import OutlinedButton from './src/components/buttons/OutlinedButton';
import RedirectButton from './src/components/buttons/RedirectButton';
import ProfilePic from './src/components/ProfilePic';
import ProfileInfos from './src/components/ProfileInfos';
import CompactInput from './src/components/CompactInput';

import ProfileProvider from './src/contexts/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
      <View style={styles.container}>
        <StatusBar style="auto" hidden />
        <Header>
          <View>
            <ProfilePic />
            <CompactInput />
          </View>
          <ProfileInfos />
        </Header>
        <Stack items={[
            <RedirectButton
              icon={<Icons name='user' size={18} color="black" />}
              title="Bio"
              description="Um pouco sobre o usuário"
            />,
            <RedirectButton
              icon={<Icons name='organization' size={18} color="black" />}
              title="Orgs"
              description="Organizações que o usuário faz parte"
            />,
            <RedirectButton
              icon={<Icons name='file' size={18} color="black" />}
              title="Repositórios"
              description="Lista contendo todos os repositórios"
            />,
            <RedirectButton
              icon={<Icons name='face' size={18} color="black" />}
              title="Seguidores"
              description="Lista de seguidores"
            />,
          ]}
        />
        <Footer>
          <OutlinedButton icon={<Icons name="mobile" size={18} color="#606060" />}>
            Resetar
          </OutlinedButton>
        </Footer>
      </View>
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc',
  },
});
