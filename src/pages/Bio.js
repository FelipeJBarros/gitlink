import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/layout/Header';

import ProfilePic from '../components/ProfilePic';
import ProfileInfos from '../components/ProfileInfos';
import LabeledValue from '../components/LabeledValue';

export default function Bio({ route }) {
    const { profile } = route.params;
    return (
        <View style={styles.container}>
            <Header>
                <ProfilePic />
                <ProfileInfos />
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <LabeledValue label="Seguidores" value={profile.followers} />
                    <LabeledValue label="Seguindo" value={profile.following} />
                </View>
                {profile.location && <Text>{profile.location}</Text>}
            </Header>
            <View style={{ flex: 6, marginHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 800 }}>
                    Biografia:
                </Text>
                <View style={styles.bioBox}>
                    {profile.bio ? (
                        <Text style={{ fontSize: 18, textAlign: 'justify' }}>
                            {profile.bio}
                        </Text>
                    ) : (
                        <Text style={{ fontSize: 16, textAlign: 'justify', color: '#575757' }}>
                            O usuário não forneceu nenhuma biografia.
                        </Text>
                    )}
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center', marginBottom: 8 }}>
                <Text>No github desde</Text>
                <Text>
                    {String(new Date(profile.created_at).toLocaleString('pt-BR')).split(' ')[0]}
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
    bioBox: { 
        padding: 20, 
        backgroundColor: '#FDFCFC', 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
    }
});
