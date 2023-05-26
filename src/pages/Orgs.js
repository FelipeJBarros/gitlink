import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import useFetch from '../hooks/useFetch';

import Loading from '../components/layout/Loading';
import NotFound from '../components/layout/NotFound';

export default function Orgs({ route }) {
    const { url } = route.params;
    const [orgs, fetching] = useFetch(url);

    if (fetching) return <Loading />
    if (orgs && orgs.length === 0) return <NotFound />

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {orgs?.map(org => (
                    <View key={org.id} style={styles.listItem}>
                        <View style={styles.chip}>
                            <Image style={styles.orgImage} source={{ uri: org.avatar_url }} />
                        </View>
                        <View>
                            <Text numberOfLines={1} style={styles.login}>
                                {org.login}
                            </Text>
                            {org.description && (
                                <Text style={{ maxWidth: '90%'}}>{org.description}</Text>
                            )}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 20, padding: 20,
        borderRadius: 10,
        gap: 8
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'center', gap: 8,
        borderWidth: 1, borderRadius: 4,
        padding: 8,
        minHeight: 60,
    },
    chip: {
        flexDirection: 'row', alignItems: 'center', gap: 4,
        paddingVertical: 4, paddingHorizontal: 8
    },
    login: { 
        fontSize: 16, 
        fontWeight: 700, 
        maxWidth: 200 
    },
    orgImage: {
        width: 40,
        height: 40,
        borderRadius: 60
    }
})