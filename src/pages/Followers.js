import { StyleSheet, View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import useFetch from '../hooks/useFetch';
import Loading from '../components/layout/Loading';
import NotFound from '../components/layout/NotFound';
import Icons from '../components/Icons';
import { useProfileProvider } from '../contexts/ProfileContext';

export default function Followers ({ route, navigation }) {
    const { url } = route.params;
    const [data, fetching] = useFetch(url);
    const { setSearchFor } = useProfileProvider();

    function handleRedirect(login) {
        if(data) {
            setSearchFor(login);
            navigation.navigate('home')
        }
    }

    if(fetching) return <Loading />
    if(data && data.length === 0) return <NotFound />

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {data?.map(follower => (
                    <View key={follower.id} style={styles.listItem}>
                        <View style={styles.chip}>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 60
                          }}
                          source={{ uri: follower.avatar_url}}
                        />
                        </View>
                        <View style={{ flex: 1}}>
                            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 700, maxWidth: 200 }}>
                                {follower.login}
                            </Text>
                        </View>
                        <TouchableHighlight 
                            onPress={() => handleRedirect(follower.login)} 
                            style={{ borderRadius: 1000, padding: 4 }} 
                            underlayColor="#DDDDDD55"
                        >
                            <Icons name='right' size={32} color="black" />
                        </TouchableHighlight>
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
        justifyContent: 'space-between', alignItems: 'center', gap: 8,
        borderWidth: 1, borderRadius: 4,
        padding: 8,
        minHeight: 60,
    },
    chip: { 
        flexDirection: 'row', alignItems: 'center', gap: 4,
        paddingVertical: 4, paddingHorizontal: 8
    }
})