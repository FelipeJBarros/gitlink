import { StyleSheet, Text, View } from 'react-native';

export default function Footer({ children }) {
    return (
        <View style={[ styles.footer]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      flexGrow: 1.5,
      flexShrink: 0,
      flexBasis: 20,
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
    }
});