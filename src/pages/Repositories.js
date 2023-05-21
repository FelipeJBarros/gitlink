import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icons from '../components/Icons';
import Loading from '../components/layout/Loading';
import NotFound from '../components/layout/NotFound';

import useFetch from '../hooks/useFetch';

export default function Repositories ({ route }) {
    const { url } = route.params;
    const [data, fetching] = useFetch(url);

    if(fetching) return <Loading />
    if(data && data.length === 0) return <NotFound />

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {data?.map(repository => (
                    <View key={repository.id} style={styles.listItem}>
                        <View>
                            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 700, maxWidth: 200 }}>
                                {repository.name}
                            </Text>
                            {repository.language && (
                                <Text>{`Linguagem: ${repository.language}`}</Text>
                            )}
                        </View>
                        <View style={styles.chip}>
                            <Icons 
                                name={repository.visibility === 'public' ? 'unlock' : 'lock'}
                                size={14} 
                                color="black"
                            />
                            <Text>{repository.visibility === 'public' ? 'Público' : 'Privado'}</Text>
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
        justifyContent: 'space-between', alignItems: 'center',
        borderWidth: 1, borderRadius: 4,
        padding: 8,
        minHeight: 60,
    },
    chip: { 
        flexDirection: 'row', alignItems: 'center', gap: 4,
        borderWidth: 1, borderRadius: 16,
        paddingVertical: 4, paddingHorizontal: 8
    }
})