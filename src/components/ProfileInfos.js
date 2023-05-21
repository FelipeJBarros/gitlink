import { StyleSheet, Text, View } from 'react-native';

export default function ProfileInfos({ username, tag}) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 4}}>
          <Text style={{ fontWeight: 800, fontSize: 24, lineHeight: 24}}>{username}</Text>
          <Text style={{ fontSize: 18, lineHeight: 24}}>{tag}</Text>
        </View>
    )
}