import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

export default function Search() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* ── CABEÇALHO COM BUSCA ── */}
      <View style={styles.header}>

        {/* Campo de busca */}
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar serviço ou oficina..."
            placeholderTextColor={Colors.muted}
          />
        </View>

        {/* Filtros por categoria */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          {['Todos', 'Óleo', 'Pneus', 'Freios', 'Funilaria', 'Elétrica'].map((f, i) => (
            <TouchableOpacity
              key={f}
              style={[styles.filter, i === 0 && styles.filterActive]}
            >
              <Text style={[styles.filterText, i === 0 && styles.filterTextActive]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── MAPA PLACEHOLDER ── */}
        {/* Aqui vai o mapa real depois de integrar o Google Maps */}
        <View style={styles.mapBox}>
          <Text style={styles.mapPin}>📍</Text>
          <Text style={styles.mapText}>Mapa — Em breve</Text>
        </View>

        <Text style={styles.sectionTitle}>3 OFICINAS ENCONTRADAS</Text>

        {/* ── LISTA DE OFICINAS ── */}
        {[
          {
            nome: 'AutoTech Mendanha',
            endereco: 'Rua Mendanha, 225 — Aberto até 18h',
            distancia: '1.2 km',
            distanciaCor: '#DCFCE7',
            distanciaTexto: '#15803D',
            estrelas: '★★★★★',
            nota: '5.0',
            avaliacoes: '48',
          },
          {
            nome: 'Master Auto Center',
            endereco: 'Av. Contorno, 890 — Aberto até 17h',
            distancia: '2.8 km',
            distanciaCor: '#DBEAFE',
            distanciaTexto: '#1E40AF',
            estrelas: '★★★★☆',
            nota: '4.2',
            avaliacoes: '31',
          },
          {
            nome: 'TopCar Service',
            endereco: 'Rua das Acácias, 55 — Abre 07h30',
            distancia: '4.1 km',
            distanciaCor: '#FEF3C7',
            distanciaTexto: '#92400E',
            estrelas: '★★★★★',
            nota: '4.9',
            avaliacoes: '22',
          },
        ].map((oficina) => (
          <View key={oficina.nome} style={styles.card}>

            {/* Nome + distância */}
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{oficina.nome}</Text>
              <View style={[styles.badge, { backgroundColor: oficina.distanciaCor }]}>
                <Text style={[styles.badgeText, { color: oficina.distanciaTexto }]}>
                  {oficina.distancia}
                </Text>
              </View>
            </View>

            {/* Endereço */}
            <Text style={styles.cardAddress}>{oficina.endereco}</Text>

            {/* Estrelas + botão agendar */}
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.stars}>{oficina.estrelas}</Text>
                <Text style={styles.starsLabel}>
                  {oficina.nota} ({oficina.avaliacoes} avaliações)
                </Text>
              </View>
              <TouchableOpacity style={styles.scheduleBtn}>
                <Text style={styles.scheduleBtnText}>Agendar</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },

  header: {
    backgroundColor: Colors.card,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 24,
    color: Colors.muted,
    lineHeight: 28,
  },

  searchInput: {
    flex: 1,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: Colors.text,
  },

  filtersScroll: { marginBottom: 4 },

  filter: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 8,
  },

  filterActive: {
    backgroundColor: Colors.brand2,
    borderColor: Colors.brand2,
  },

  filterText: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '500',
  },

  filterTextActive: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },

  scroll: { flex: 1, padding: 16 },

  // Mapa placeholder
  mapBox: {
    backgroundColor: '#C8D8E8',
    borderRadius: 12,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    gap: 6,
  },

  mapPin: { fontSize: 28 },

  mapText: {
    fontSize: 14,
    color: Colors.muted,
    fontWeight: '500',
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.muted,
    letterSpacing: 0.5,
    marginBottom: 12,
  },

  // Cartão de oficina
  card: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 12,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  cardAddress: {
    fontSize: 12,
    color: Colors.muted,
    marginBottom: 12,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  stars: {
    fontSize: 14,
    color: '#F59E0B',
  },

  starsLabel: {
    fontSize: 12,
    color: Colors.muted,
  },

  scheduleBtn: {
    backgroundColor: Colors.brand2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  scheduleBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});