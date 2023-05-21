import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/layout/Header';
import ProfilePic from '../components/ProfilePic';
import ProfileInfos from '../components/ProfileInfos';

export default function Bio ({ route }) {
    const { profile } = route.params;
    return (
        <View style={styles.container}>
            <Header>
                <ProfilePic />
                <ProfileInfos />
                <View style={{ flexDirection: 'row', gap: 12}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontSize: 16, fontWeight: 700}}>Seguidores: </Text>
                        <Text style={{ fontSize: 16}}>{profile.followers}</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontSize: 16, fontWeight: 700}}>Seguindo: </Text>
                        <Text style={{ fontSize: 16}}>{profile.following}</Text>
                    </View>
                </View>
                {profile.location && (
                    <View>
                        <Text>
                            {profile.location}
                        </Text>
                    </View>
                )}
            </Header>
            <View style={{ flex: 6, marginHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 800}}>
                    Biografia:
                </Text>
                <View style={{ padding: 20, backgroundColor: '#FDFCFC', borderRadius: 20, justifyContent: 'center', alignItems: 'flex-start'}}>
                {profile.bio ? (
                    <Text style={{ fontSize: 18, textAlign: 'justify'}}>
                        {profile.bio}
                    </Text>
                ) : (
                    <Text style={{ fontSize: 16, textAlign: 'justify', color: '#575757'}}>
                        O usuário não forneceu nenhuma biografia.
                    </Text>
                )}
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center', marginBottom: 8}}>
                <Text>
                    No github desde 
                </Text>
                <Text>
                    {String(new Date(profile.created_at).toLocaleString('pt-BR', { timezone: 'UTC' })).split(' ')[0]}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fc'
    },
});
  