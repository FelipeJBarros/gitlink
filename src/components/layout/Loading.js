import { StyleSheet, View, Text } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ color: '#57575757', fontSize: 18 }}>Carregando...</Text>
            </View>
        </View>
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
})