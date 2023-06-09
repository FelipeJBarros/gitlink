import { StyleSheet, Text, View } from 'react-native';
import { useProfileProvider } from '../../contexts/ProfileContext';

export default function OutlinedButton({ icon = null, children }) {
  const { resetProfile } = useProfileProvider();
  return (
    <View style={styles.outButton} onTouchStart={resetProfile}>
      {icon}
      <Text style={styles.buttonText}>
        {children}
      </Text>
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
  },
  buttonText: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: "#606060" 
  }
});
