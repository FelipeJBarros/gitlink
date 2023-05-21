import { StyleSheet, View, Text } from 'react-native';

export default function NotFound() {
    return (
        <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 18 }}>Ainda nada por aqui.</Text>
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
    }
})