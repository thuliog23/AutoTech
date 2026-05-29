import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function Appointments() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Agendamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: Colors.text },
});