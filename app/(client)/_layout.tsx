import { Stack } from 'expo-router';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import Colors from '../../constants/Colors';

// Barra de navegação inferior
function BottomNav() {
  const router = useRouter();
  const path = usePathname();

  const tabs = [
    { name: 'Início', route: '/(client)/home', icon: '🏠' },
    { name: 'Buscar', route: '/(client)/search', icon: '🔍' },
    { name: 'Agenda', route: '/(client)/appointments', icon: '📅' },
    { name: 'Chat', route: '/(client)/chat', icon: '💬' },
  ];

  // Telas que NÃO mostram a barra de navegação
  const hideNav = [
    '/shop', '/schedule', '/confirm',
    '/success', '/vehicle', '/terms',
  ];

  const shouldHide = hideNav.some(r => path.includes(r));
  if (shouldHide) return null;

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const active = path.includes(tab.route.replace('/(client)', ''));
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => router.push(tab.route as any)}
          >
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text style={[styles.navLabel, active && styles.navLabelActive]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function ClientLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 60,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    gap: 2,
    padding: 8,
  },
  navIcon: { fontSize: 20 },
  navLabel: {
    fontSize: 10,
    color: Colors.muted,
    fontWeight: '500',
  },
  navLabelActive: {
    color: Colors.brand2,
    fontWeight: '700',
  },
});