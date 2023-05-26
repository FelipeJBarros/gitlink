import { View, Text } from 'react-native';

export default function LabeledValue({ label, value }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, fontWeight: 700 }}>{`${label}: `}</Text>
            <Text style={{ fontSize: 16 }}>{value}</Text>
        </View>
    )
}