import { StyleSheet, Text, View } from 'react-native';

export default function OutlinedButton({ icon = null, children}) {
    return (
        <View style={styles.outButton}>
          {icon}
          <Text style={{ fontSize: 18, fontWeight: '600', color: "#606060" }}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outButton: {
      flex: 1,
      borderColor: '#606060',
      borderWidth: 2,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
      padding: 0,
    }
  });
  