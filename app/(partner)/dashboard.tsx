import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default function PartnerDashboard() {

  return (
    <View style={styles.container}>

      {/* ── CABEÇALHO ── */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSub}>Painel parceiro</Text>
          <Text style={styles.headerTitle}>AutoTech Mendanha</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>● Aberto</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── CARDS DE MÉTRICAS ── */}
        <View style={styles.metricsGrid}>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Hoje</Text>
            <Text style={[styles.metricValue, { color: Colors.brand2 }]}>5</Text>
            <Text style={styles.metricDesc}>agendamentos</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Receita hoje</Text>
            <Text style={[styles.metricValue, { color: Colors.green }]}>R$620</Text>
            <Text style={styles.metricDesc}>confirmado</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Orçamentos</Text>
            <Text style={[styles.metricValue, { color: Colors.amber }]}>3</Text>
            <Text style={styles.metricDesc}>pendentes</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Avaliação</Text>
            <Text style={[styles.metricValue, { color: Colors.text }]}>5.0</Text>
            <Text style={styles.metricDesc}>★ 48 avaliações</Text>
          </View>

        </View>

        {/* ── AGENDAMENTOS DE HOJE ── */}
        <Text style={styles.sectionTitle}>AGENDAMENTOS DE HOJE</Text>

        {/* Agendamento 1 */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentLeft}>
            <Text style={styles.appointmentService}>Troca de óleo</Text>
            <Text style={styles.appointmentClient}>Carlos M. — HB20</Text>
          </View>
          <View style={styles.appointmentRight}>
            <View style={styles.timeBadge}>
              <Text style={styles.timeBadgeText}>08:00</Text>
            </View>
            <Text style={styles.appointmentPrice}>R$ 120</Text>
          </View>
        </View>

        {/* Agendamento 2 */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentLeft}>
            <Text style={styles.appointmentService}>Troca de pneus (4x)</Text>
            <Text style={styles.appointmentClient}>Ana P. — Onix</Text>
          </View>
          <View style={styles.appointmentRight}>
            <View style={styles.timeBadge}>
              <Text style={styles.timeBadgeText}>10:00</Text>
            </View>
            <Text style={styles.appointmentPrice}>R$ 500</Text>
          </View>
        </View>

        {/* Agendamento 3 */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentLeft}>
            <Text style={styles.appointmentService}>Alinhamento</Text>
            <Text style={styles.appointmentClient}>Pedro S. — Gol</Text>
          </View>
          <View style={styles.appointmentRight}>
            <View style={styles.timeBadge}>
              <Text style={styles.timeBadgeText}>13:00</Text>
            </View>
            <Text style={styles.appointmentPrice}>R$ 80</Text>
          </View>
        </View>

        {/* ── ORÇAMENTOS PENDENTES ── */}
        <Text style={styles.sectionTitle}>ORÇAMENTOS PENDENTES</Text>

        {/* Orçamento 1 */}
        <View style={styles.quoteCard}>
          <View style={styles.quoteTop}>
            <View>
              <Text style={styles.quoteService}>Funilaria — para-choque</Text>
              <Text style={styles.quoteClient}>Carlos M. — HB20 2021</Text>
            </View>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>Novo</Text>
            </View>
          </View>

          {/* Descrição do cliente */}
          <View style={styles.quoteDescBox}>
            <Text style={styles.quoteDesc}>
              "Amassado no para-choque traseiro após batida leve."
            </Text>
          </View>

          {/* Botões de ação */}
          <View style={styles.quoteActions}>
            <TouchableOpacity style={styles.btnSendQuote}>
              <Text style={styles.btnSendQuoteText}>Enviar proposta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnViewChat}>
              <Text style={styles.btnViewChatText}>Ver chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Orçamento 2 */}
        <View style={styles.quoteCard}>
          <View style={styles.quoteTop}>
            <View>
              <Text style={styles.quoteService}>Pintura — porta lateral</Text>
              <Text style={styles.quoteClient}>Maria L. — Civic 2020</Text>
            </View>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>Novo</Text>
            </View>
          </View>

          <View style={styles.quoteDescBox}>
            <Text style={styles.quoteDesc}>
              "Arranhão profundo na porta do motorista."
            </Text>
          </View>

          <View style={styles.quoteActions}>
            <TouchableOpacity style={styles.btnSendQuote}>
              <Text style={styles.btnSendQuoteText}>Enviar proposta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnViewChat}>
              <Text style={styles.btnViewChatText}>Ver chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* ── BARRA DE NAVEGAÇÃO INFERIOR ── */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={[styles.navLabel, { color: Colors.brand2 }]}>Painel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navLabel}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Relatório</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navLabel}>Config</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },

  // Cabeçalho azul
  header: {
    backgroundColor: Colors.brand,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginBottom: 4,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  // Badge "Aberto"
  statusBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: '#15803D',
    fontSize: 13,
    fontWeight: '600',
  },

  scroll: { flex: 1, padding: 16 },

  // Grade 2x2 de métricas
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },

  metricCard: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
  },

  metricLabel: {
    fontSize: 12,
    color: Colors.muted,
    marginBottom: 6,
  },

  metricValue: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 2,
  },

  metricDesc: {
    fontSize: 12,
    color: Colors.muted,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.muted,
    letterSpacing: 0.5,
    marginBottom: 12,
  },

  // Card de agendamento do dia
  appointmentCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appointmentLeft: { flex: 1 },

  appointmentService: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  appointmentClient: {
    fontSize: 12,
    color: Colors.muted,
  },

  appointmentRight: {
    alignItems: 'flex-end',
    gap: 6,
  },

  // Badge de horário
  timeBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  timeBadgeText: {
    color: '#1E40AF',
    fontSize: 12,
    fontWeight: '600',
  },

  appointmentPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.brand2,
  },

  // Card de orçamento pendente
  quoteCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 12,
  },

  quoteTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  quoteService: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  quoteClient: {
    fontSize: 12,
    color: Colors.muted,
  },

  // Badge "Novo"
  newBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  newBadgeText: {
    color: '#92400E',
    fontSize: 12,
    fontWeight: '600',
  },

  // Caixa com descrição do cliente
  quoteDescBox: {
    backgroundColor: Colors.bg,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },

  quoteDesc: {
    fontSize: 13,
    color: Colors.muted,
    fontStyle: 'italic',
  },

  quoteActions: {
    flexDirection: 'row',
    gap: 8,
  },

  btnSendQuote: {
    flex: 1,
    backgroundColor: Colors.brand2,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },

  btnSendQuoteText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  btnViewChat: {
    borderWidth: 1,
    borderColor: Colors.brand2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  btnViewChatText: {
    color: Colors.brand2,
    fontSize: 13,
    fontWeight: '600',
  },

  // Barra de navegação inferior
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
  },

  navIcon: { fontSize: 20 },

  navLabel: {
    fontSize: 10,
    color: Colors.muted,
    fontWeight: '500',
  },
});