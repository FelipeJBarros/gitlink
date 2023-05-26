import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icons from '../Icons';
import { useProfileProvider } from '../../contexts/ProfileContext';

export default function RedirectButton({ icon = null, title, description, redirect }) {

    const { notFound, profileIsMissing } = useProfileProvider();

    const handleRedirect = () => {
        if (!(notFound || profileIsMissing)) redirect();
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {icon}
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <TouchableHighlight
                onPress={handleRedirect} 
                style={{ borderRadius: 1000, padding: 4 }} 
                underlayColor="#DDDDDD55"
            >
                <Icons name='right' size={32} color="black" />
            </TouchableHighlight>
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
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 40
    },
    title: { 
        fontSize: 18, 
        lineHeight: 18, 
        fontWeight: 800 
    },
    description: { 
        fontSize: 12, 
        lineHeight: 16, 
        fontWeight: 700, 
        color: "#CACACA" 
    }
})