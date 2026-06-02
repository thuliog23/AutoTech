import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,        // Campo de texto editável
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

export default function Search() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* ── CABEÇALHO COM BUSCA ── */}
      <View style={styles.header}>

        {/* Linha com botão voltar + campo de busca */}
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          {/* Campo de texto real */}
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar serviço ou oficina..."
            placeholderTextColor={Colors.muted}
            autoFocus={false}
          />
        </View>

        {/* Filtros por categoria */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          <TouchableOpacity style={[styles.filter, styles.filterActive]}>
            <Text style={styles.filterTextActive}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Óleo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Pneus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Freios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Funilaria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Elétrica</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* ── CONTEÚDO ── */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Mapa placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>📍 Mapa — Em breve</Text>
        </View>

        {/* Quantidade de resultados */}
        <Text style={styles.sectionTitle}>3 OFICINAS ENCONTRADAS</Text>

        {/* ── CARTÃO DE OFICINA 1 ── */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName}>AutoTech Mendanha</Text>
            {/* Badge de distância */}
            <View style={[styles.badge, { backgroundColor: '#DCFCE7' }]}>
              <Text style={[styles.badgeText, { color: '#15803D' }]}>1.2 km</Text>
            </View>
          </View>

          <Text style={styles.cardAddress}>Rua Mendanha, 225 — Aberto até 18h</Text>

          {/* Linha inferior: estrelas + botão */}
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.stars}>★★★★★</Text>
              <Text style={styles.starsLabel}>5.0 (48 avaliações)</Text>
            </View>
            <TouchableOpacity style={styles.scheduleBtn}>
              <Text style={styles.scheduleBtnText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* ── CARTÃO DE OFICINA 2 ── */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName}>Master Auto Center</Text>
            <View style={[styles.badge, { backgroundColor: '#DBEAFE' }]}>
              <Text style={[styles.badgeText, { color: '#1E40AF' }]}>2.8 km</Text>
            </View>
          </View>

          <Text style={styles.cardAddress}>Av. Contorno, 890 — Aberto até 17h</Text>

          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.stars}>★★★★☆</Text>
              <Text style={styles.starsLabel}>4.2 (31 avaliações)</Text>
            </View>
            <TouchableOpacity style={styles.scheduleBtn}>
              <Text style={styles.scheduleBtnText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* ── CARTÃO DE OFICINA 3 ── */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName}>TopCar Service</Text>
            <View style={[styles.badge, { backgroundColor: '#FEF3C7' }]}>
              <Text style={[styles.badgeText, { color: '#92400E' }]}>4.1 km</Text>
            </View>
          </View>

          <Text style={styles.cardAddress}>Rua das Acácias, 55 — Abre 07h30</Text>

          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.stars}>★★★★★</Text>
              <Text style={styles.starsLabel}>4.9 (22 avaliações)</Text>
            </View>
            <TouchableOpacity style={styles.scheduleBtn}>
              <Text style={styles.scheduleBtnText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

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

  // Cabeçalho branco
  header: {
    backgroundColor: Colors.card,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  // Linha de busca
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },

  // Botão voltar circular
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.card,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 24,
    color: Colors.muted,
    lineHeight: 28,
  },

  // Campo de texto de busca
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

  // Scroll horizontal de filtros
  filtersScroll: { marginBottom: 4 },

  // Cada filtro/chip
  filter: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 8,
  },

  // Filtro selecionado (azul)
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
  mapPlaceholder: {
    backgroundColor: '#C8D8E8',
    borderRadius: 12,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  mapText: {
    fontSize: 15,
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

  // Badge colorido (distância)
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

  // Botão agendar
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