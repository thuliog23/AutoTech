import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo-autotech.png')}
        style={{ width: 350, height: 175}}/>
        <Text style={styles.logo}>AutoTech</Text>
        <Text style={styles.subtitle}>Agendamento de serviços automotivos</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.desc}>Entre com sua conta para continuar</Text>

        <TouchableOpacity style={styles.btnGoogle}
          onPress={() => router.replace('/(client)/home')}>
          <Text style={styles.btnGoogleText}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPrimary}
          onPress={() => router.replace('/(client)/home')}>
          <Text style={styles.btnPrimaryText}>Entrar como Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}
          onPress={() => router.replace('/(partner)/dashboard')}>
          <Text style={styles.btnOutlineText}>Entrar como Parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/(admin)/dashboard')}>
          <Text style={styles.linkAdmin}>Acesso Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.brand 
  },

  header: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 32 },

  logo: { fontSize: 36, 
    fontWeight: '800', 
    color: '#fff', 
    marginBottom: 8 },
  subtitle: { fontSize: 14, 
    color: 'rgba(255,255,255,0.7)', 
    textAlign: 'center' },

  body: { flex: 2, 
    backgroundColor: Colors.bg, 
    borderTopLeftRadius: 28, 
    borderTopRightRadius: 28, 
    padding: 28 },

  title: { fontSize: 24, 
    fontWeight: '700', 
    color: Colors.text, 
    marginBottom: 6 },

  desc: { fontSize: 14, 
    color: Colors.muted, 
    marginBottom: 32 },

  btnGoogle: { backgroundColor: '#fff', 
    borderWidth: 1.5, 
    borderColor: Colors.border, 
    borderRadius: 12, 
    padding: 14, 
    alignItems: 'center', 
    marginBottom: 12 },

  btnGoogleText: { fontSize: 15, 
    fontWeight: '600', 
    color: Colors.text },

  btnPrimary: { backgroundColor: Colors.brand2, 
    borderRadius: 12, 
    padding: 14, 
    alignItems: 'center', 
    marginBottom: 12 },

  btnPrimaryText: { fontSize: 15, 
    fontWeight: '600', 
    color: '#fff' },

  btnOutline: { borderWidth: 1.5, 
    borderColor: Colors.brand2, 
    borderRadius: 12, 
    padding: 13, 
    alignItems: 'center', 
    marginBottom: 24 },

  btnOutlineText: { fontSize: 15, 
    fontWeight: '600', 
    color: Colors.brand2 },

  linkAdmin: { textAlign: 'center', 
    color: Colors.muted, 
    fontSize: 13 },
});