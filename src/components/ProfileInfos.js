import { StyleSheet, Text, View } from 'react-native';
import { useProfileProvider } from '../contexts/ProfileContext';

export default function ProfileInfos() {

  const { profile, profileIsMissing } = useProfileProvider()
  const ctx = useProfileProvider()

  if(profileIsMissing) return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>Gitlink</Text>
      <Text style={[styles.login, { fontSize: 14}]}>Made for @FelipeJBarros</Text>
    </View>
  );

  if(profile.message === 'Not Found') return (
    <View style={styles.wrapper}>
      <Text style={[styles.name, { color: '#eb624e', textAlign: 'center' }]}>
        Ops! Usuário não encontrado.
      </Text>
      <Text style={[styles.login, { color: '#eb624e', textAlign: 'center'}]}>
        Tente um username diferente.
      </Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{profile?.name}</Text>
      <Text style={styles.login}>{`@${profile?.login}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { justifyContent: 'center', alignItems: 'center', gap: 4},
  name: { fontWeight: 800, fontSize: 24, lineHeight: 24},
  login: { fontSize: 18, lineHeight: 24}
})