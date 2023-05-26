import { StyleSheet, View } from 'react-native';

export default function Header({ children }) {
    return (
        <View style={styles.header}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 6.5, 
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }
});