import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Icons from '../components/Icons';

import Header from '../components/layout/Header';
import Stack from '../components/layout/Stack';
import Footer from '../components/layout/Footer';

import OutlinedButton from '../components/buttons/OutlinedButton';
import RedirectButton from '../components/buttons/RedirectButton';
import ProfilePic from '../components/ProfilePic';
import ProfileInfos from '../components/ProfileInfos';
import CompactInput from '../components/CompactInput';

import { useProfileProvider } from '../contexts/ProfileContext';

export default function Home({ navigation }) {

  const { profile } = useProfileProvider();

  return (
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
          redirect={
            () => navigation.navigate('biography', { profile })
          }
        />,
        <RedirectButton
          icon={<Icons name='organization' size={18} color="black" />}
          title="Orgs"
          description="Organizações que o usuário faz parte"
          redirect={
            () => navigation.navigate('organizations', { url: profile.organizations_url })
          }
        />,
        <RedirectButton
          icon={<Icons name='file' size={18} color="black" />}
          title="Repositórios"
          description="Lista contendo todos os repositórios"
          redirect={
            () => navigation.navigate('repositories', { url: profile.repos_url })
          }
        />,
        <RedirectButton
          icon={<Icons name='face' size={18} color="black" />}
          title="Seguidores"
          description="Lista de seguidores"
          redirect={
            () => navigation.navigate('followers', { url: profile.followers_url })
          }
        />,
      ]}
      />
      <Footer>
        <OutlinedButton icon={<Icons name="mobile" size={18} color="#606060" />}>
          Resetar
        </OutlinedButton>
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc',
  },
});
