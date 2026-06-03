import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default function AdminDashboard() {

  return (
    <View style={styles.container}>

      {/* ── CABEÇALHO ── */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSub}>Administrador</Text>
          <Text style={styles.headerTitle}>Painel geral</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── MÉTRICAS GERAIS ── */}
        <View style={styles.metricsGrid}>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Parceiros ativos</Text>
            <Text style={[styles.metricValue, { color: Colors.brand2 }]}>12</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Clientes</Text>
            <Text style={[styles.metricValue, { color: Colors.green }]}>348</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Agend. este mês</Text>
            <Text style={[styles.metricValue, { color: Colors.text }]}>127</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Receita (mês)</Text>
            <Text style={[styles.metricValue, { color: Colors.green, fontSize: 22 }]}>
              R$14k
            </Text>
          </View>

        </View>

        {/* ── APROVAÇÃO DE PARCEIROS ── */}
        <Text style={styles.sectionTitle}>APROVAR PARCEIROS</Text>

        {/* Parceiro pendente 1 */}
        <View style={styles.approvalCard}>
          <View style={styles.approvalTop}>
            <View>
              <Text style={styles.approvalName}>Garage Plus BH</Text>
              <Text style={styles.approvalAddress}>Av. Silviano Brandão, 400</Text>
            </View>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>Pendente</Text>
            </View>
          </View>

          {/* Informações do parceiro */}
          <View style={styles.approvalInfo}>
            <Text style={styles.approvalInfoText}>📋 CNPJ: 12.345.678/0001-99</Text>
            <Text style={styles.approvalInfoText}>📞 (31) 99999-1234</Text>
            <Text style={styles.approvalInfoText}>🔧 Serviços: Funilaria, Pintura</Text>
          </View>

          {/* Botões aprovar/recusar */}
          <View style={styles.approvalActions}>
            <TouchableOpacity style={styles.btnApprove}>
              <Text style={styles.btnApproveText}>✓ Aprovar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnReject}>
              <Text style={styles.btnRejectText}>✕ Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── PARCEIROS ATIVOS ── */}
        <Text style={styles.sectionTitle}>PARCEIROS ATIVOS</Text>

        {[
          { iniciais: 'AT', nome: 'AutoTech Mendanha', agend: '47 agend. este mês' },
          { iniciais: 'MC', nome: 'Master Auto Center', agend: '31 agend. este mês' },
          { iniciais: 'TC', nome: 'TopCar Service', agend: '22 agend. este mês' },
        ].map((p) => (
          <View key={p.nome} style={styles.partnerCard}>
            <View style={styles.partnerAvatar}>
              <Text style={styles.partnerAvatarText}>{p.iniciais}</Text>
            </View>
            <View style={styles.partnerInfo}>
              <Text style={styles.partnerName}>{p.nome}</Text>
              <Text style={styles.partnerAgend}>{p.agend}</Text>
            </View>
            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>Ativo</Text>
            </View>
          </View>
        ))}

        {/* ── AÇÕES RÁPIDAS ── */}
        <Text style={styles.sectionTitle}>AÇÕES RÁPIDAS</Text>

        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>➕</Text>
            <Text style={styles.actionLabel}>Novo parceiro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionLabel}>Catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionLabel}>Relatórios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>⚙️</Text>
            <Text style={styles.actionLabel}>Config</Text>
          </TouchableOpacity>
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
          <Text style={styles.navIcon}>🏢</Text>
          <Text style={styles.navLabel}>Parceiros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👥</Text>
          <Text style={styles.navLabel}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Relatórios</Text>
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

  // Avatar do admin
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  scroll: { flex: 1, padding: 16 },

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
    marginBottom: 8,
  },

  metricValue: {
    fontSize: 28,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.muted,
    letterSpacing: 0.5,
    marginBottom: 12,
  },

  // Card de aprovação
  approvalCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 16,
  },

  approvalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  approvalName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },

  approvalAddress: {
    fontSize: 12,
    color: Colors.muted,
  },

  pendingBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  pendingText: {
    color: '#92400E',
    fontSize: 12,
    fontWeight: '600',
  },

  // Informações do parceiro
  approvalInfo: {
    backgroundColor: Colors.bg,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    gap: 4,
  },

  approvalInfoText: {
    fontSize: 13,
    color: Colors.muted,
  },

  approvalActions: {
    flexDirection: 'row',
    gap: 8,
  },

  btnApprove: {
    flex: 1,
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },

  btnApproveText: {
    color: '#15803D',
    fontSize: 13,
    fontWeight: '700',
  },

  btnReject: {
    flex: 1,
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },

  btnRejectText: {
    color: '#991B1B',
    fontSize: 13,
    fontWeight: '700',
  },

  // Card de parceiro ativo
  partnerCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  partnerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  partnerAvatarText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E40AF',
  },

  partnerInfo: { flex: 1 },

  partnerName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 2,
  },

  partnerAgend: {
    fontSize: 12,
    color: Colors.muted,
  },

  activeBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  activeText: {
    color: '#15803D',
    fontSize: 12,
    fontWeight: '600',
  },

  // Grid de ações rápidas
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },

  actionBtn: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },

  actionIcon: { fontSize: 24 },

  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },

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