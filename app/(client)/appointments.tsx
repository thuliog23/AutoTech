import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

export default function Appointments() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* ── CABEÇALHO ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meus agendamentos</Text>
      </View>

      {/* ── FILTROS ── */}
      <View style={styles.filters}>
        <TouchableOpacity style={[styles.filter, styles.filterActive]}>
          <Text style={styles.filterTextActive}>Próximos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Histórico</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── AGENDAMENTO CONFIRMADO ── */}
        <View style={styles.card}>
          {/* Linha topo: status + data */}
          <View style={styles.cardTop}>
            <View style={[styles.badge, { backgroundColor: '#DCFCE7' }]}>
              <Text style={[styles.badgeText, { color: '#15803D' }]}>✓ Confirmado</Text>
            </View>
            <Text style={styles.cardDate}>Amanhã, 10:00</Text>
          </View>

          {/* Nome do serviço */}
          <Text style={styles.cardService}>Troca de óleo</Text>
          <Text style={styles.cardShop}>AutoTech Mendanha</Text>

          {/* Linha inferior: carro + valor */}
          <View style={styles.cardFooter}>
            <Text style={styles.cardCar}>🚗 HB20 — ABC-1D23</Text>
            <Text style={styles.cardPrice}>R$ 120</Text>
          </View>

          {/* Divisor */}
          <View style={styles.divider} />

          {/* Botões de ação */}
          <View style={styles.cardActions}>
            <TouchableOpacity
              style={styles.btnChat}
              onPress={() => router.push('/(client)/chat')}
            >
              <Text style={styles.btnChatText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel}>
              <Text style={styles.btnCancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── AGENDAMENTO AGUARDANDO ORÇAMENTO ── */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={[styles.badge, { backgroundColor: '#FEF3C7' }]}>
              <Text style={[styles.badgeText, { color: '#92400E' }]}>⏳ Orçamento</Text>
            </View>
            <Text style={styles.cardDate}>Aguardando</Text>
          </View>

          <Text style={styles.cardService}>Funilaria</Text>
          <Text style={styles.cardShop}>2 propostas recebidas</Text>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Ver propostas</Text>
          </TouchableOpacity>
        </View>

        {/* ── AGENDAMENTO CONCLUÍDO ── */}
        <View style={[styles.card, { opacity: 0.7 }]}>
          <View style={styles.cardTop}>
            <View style={[styles.badge, { backgroundColor: '#F1F5F9' }]}>
              <Text style={[styles.badgeText, { color: '#475569' }]}>✓ Concluído</Text>
            </View>
            <Text style={styles.cardDate}>10/05/2025</Text>
          </View>

          <Text style={styles.cardService}>Alinhamento e balanceamento</Text>
          <Text style={styles.cardShop}>TopCar Service</Text>

          <View style={styles.cardFooter}>
            <Text style={styles.stars}>★★★★★</Text>
            <Text style={styles.cardPrice}>R$ 180</Text>
          </View>
        </View>

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

  // Cabeçalho
  header: {
    backgroundColor: Colors.card,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },

  // Filtros próximos/histórico
  filters: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    paddingBottom: 8,
  },

  filter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
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

  // Cartão de agendamento
  card: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 12,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  // Badge de status
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  cardDate: {
    fontSize: 13,
    color: Colors.muted,
  },

  cardService: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },

  cardShop: {
    fontSize: 13,
    color: Colors.muted,
    marginBottom: 10,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardCar: {
    fontSize: 13,
    color: Colors.muted,
  },

  cardPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.brand2,
  },

  stars: {
    fontSize: 16,
    color: '#F59E0B',
  },

  // Linha divisória
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 12,
  },

  // Botões de ação
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },

  btnChat: {
    borderWidth: 1,
    borderColor: Colors.brand2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  btnChatText: {
    color: Colors.brand2,
    fontSize: 13,
    fontWeight: '600',
  },

  btnCancel: {
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  btnCancelText: {
    color: '#991B1B',
    fontSize: 13,
    fontWeight: '600',
  },

  btnPrimary: {
    backgroundColor: Colors.brand2,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },

  btnPrimaryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});