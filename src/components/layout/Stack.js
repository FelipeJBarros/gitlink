import { StyleSheet, Text, View } from 'react-native';

export default function Stack({ items }) {
    return (
        <View style={styles.stack}>
            {items.map((item, idx) => (
                <View
                    key={idx}
                    style={{ 
                        borderBottomWidth: 1, borderBottomColor: '#f5f5f5',
                        flex: 1, flexShrink: 0, flexBasis: "25%"
                    }}
                >
                    {item}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    stack: {
        backgroundColor: '#FFF',
        flex: 8,
        margin: 20,
        borderRadius: 20,
        overflow: 'hidden'

    }
})