import { StyleSheet, Text, View } from 'react-native';
import Icons from '../Icons';

export default function RedirectButton({ icon = null, title, description, onClick }){
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {icon}
            </View>
            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 18, lineHeight: 18, fontWeight: 800}}>{title}</Text>
                <Text style={{ fontSize: 12, lineHeight: 16, fontWeight: 700, color: "#CACACA"}}>{description}</Text>
            </View>
            <Icons name='right' size={32} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 24
    },
    icon: { 
        padding: 10, 
        borderWidth: 1, borderRadius: 8, borderColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 40
    }
})