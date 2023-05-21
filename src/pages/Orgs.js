import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import useFetch from '../hooks/useFetch';

import Loading from '../components/layout/Loading';
import NotFound from '../components/layout/NotFound';

export default function Orgs ({ route }) {
    const { url } = route.params;
    const [data, fetching] = useFetch(url);

    if(fetching) return <Loading />
    if(data && data.length === 0) return <NotFound />

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {data?.map(org => (
                    <View key={org.id} style={styles.listItem}>
                        <View style={styles.chip}>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 60
                          }}
                          source={{ uri: org.avatar_url}}
                        />
                        </View>
                        <View>
                            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 700, maxWidth: 200 }}>
                                {org.login}
                            </Text>
                            {org.description && (
                                <Text>{org.description}</Text>
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
    }
})