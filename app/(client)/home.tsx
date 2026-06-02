// Importações necessárias do React Native e Expo
import { 
  View,           // Caixa/container (como uma div no HTML)
  Text,           // Texto na tela
  ScrollView,     // Área que permite rolar o conteúdo
  TouchableOpacity, // Botão que reage ao toque
  StyleSheet,     // Onde criamos os estilos (como CSS)
  Image,          // Para exibir imagens
} from 'react-native';

import { useRouter } from 'expo-router'; // Permite navegar entre telas
import Colors from '../../constants/Colors'; // Nossas cores definidas

// ============================================================
// COMPONENTE PRINCIPAL DA HOME DO CLIENTE
// ============================================================
export default function Home() {
  const router = useRouter(); // Hook de navegação

  return (
    // View principal que ocupa a tela toda
    <View style={styles.container}>

      {/* ── CABEÇALHO AZUL ── */}
      <View style={styles.header}>

        {/* Linha superior: saudação + sino de notificação */}
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerGreeting}>Olá,</Text>
            <Text style={styles.headerName}>Carlos Mendes 👋</Text>
          </View>

          {/* Botão de notificações */}
          <TouchableOpacity style={styles.notifBtn}>
            <Text style={styles.notifIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Barra de busca falsa — leva para a tela de busca */}
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => router.push('/(client)/search')}
        >
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchText}>Buscar serviço ou oficina...</Text>
        </TouchableOpacity>

      </View>

      {/* ── CONTEÚDO ROLÁVEL ── */}
      <ScrollView 
        style={styles.scroll}
        showsVerticalScrollIndicator={false} // Esconde a barra de rolagem
      >

        {/* ── BANNERS DE PROMOÇÃO ── */}
        <Text style={styles.sectionTitle}>PROMOÇÕES</Text>
        <ScrollView 
          horizontal                        // Rolagem na horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
        >
          {/* Banner 1 */}
          <TouchableOpacity style={[styles.banner, { backgroundColor: '#1A3C5E' }]}>
            <Text style={styles.bannerTag}>Oferta da semana</Text>
            <Text style={styles.bannerTitle}>Troca de óleo</Text>
            <Text style={styles.bannerDesc}>Sintético 5W30 + filtro incluso</Text>
            <View style={styles.bannerPriceRow}>
              <View>
                <Text style={styles.bannerOldPrice}>R$ 150</Text>
                <Text style={styles.bannerPrice}>R$ 99</Text>
              </View>
              <View style={styles.bannerBtn}>
                <Text style={styles.bannerBtnText}>Ver oferta</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Banner 2 */}
          <TouchableOpacity style={[styles.banner, { backgroundColor: '#065F46' }]}>
            <Text style={styles.bannerTag}>Kit completo</Text>
            <Text style={styles.bannerTitle}>Revisão geral</Text>
            <Text style={styles.bannerDesc}>Óleo + filtros + freios + alinhamento</Text>
            <View style={styles.bannerPriceRow}>
              <View>
                <Text style={styles.bannerOldPrice}>R$ 520</Text>
                <Text style={styles.bannerPrice}>R$ 389</Text>
              </View>
              <View style={[styles.bannerBtn, { backgroundColor: '#6EE7B7' }]}>
                <Text style={[styles.bannerBtnText, { color: '#065F46' }]}>Ver oferta</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Banner 3 */}
          <TouchableOpacity style={[styles.banner, { backgroundColor: '#7C2D12' }]}>
            <Text style={styles.bannerTag}>Imperdível</Text>
            <Text style={styles.bannerTitle}>4 pneus</Text>
            <Text style={styles.bannerDesc}>Aro 15 + balanceamento grátis</Text>
            <View style={styles.bannerPriceRow}>
              <View>
                <Text style={styles.bannerOldPrice}>R$ 1.200</Text>
                <Text style={styles.bannerPrice}>R$ 899</Text>
              </View>
              <View style={[styles.bannerBtn, { backgroundColor: '#FED7AA' }]}>
                <Text style={[styles.bannerBtnText, { color: '#7C2D12' }]}>Ver oferta</Text>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>

        {/* ── SERVIÇOS RÁPIDOS ── */}
        <Text style={styles.sectionTitle}>SERVIÇOS RÁPIDOS</Text>

        {/* Grade 2x2 de serviços */}
        <View style={styles.servicesGrid}>

          {/* Cartão: Troca de óleo */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={() => router.push('/(client)/search')}
          >
            <Text style={styles.serviceIcon}>🛢️</Text>
            <Text style={styles.serviceName}>Troca de óleo</Text>
            <Text style={styles.servicePrice}>a partir de R$ 80</Text>
            <View style={[styles.serviceBadge, { backgroundColor: '#DBEAFE' }]}>
              <Text style={[styles.serviceBadgeText, { color: '#1E40AF' }]}>Preço fixo</Text>
            </View>
          </TouchableOpacity>

          {/* Cartão: Pneus */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={() => router.push('/(client)/search')}
          >
            <Text style={styles.serviceIcon}>⭕</Text>
            <Text style={styles.serviceName}>Pneus</Text>
            <Text style={styles.servicePrice}>a partir de R$ 250</Text>
            <View style={[styles.serviceBadge, { backgroundColor: '#DCFCE7' }]}>
              <Text style={[styles.serviceBadgeText, { color: '#15803D' }]}>Preço fixo</Text>
            </View>
          </TouchableOpacity>

          {/* Cartão: Embreagem */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={() => router.push('/(client)/search')}
          >
            <Text style={styles.serviceIcon}>🔧</Text>
            <Text style={styles.serviceName}>Embreagem</Text>
            <Text style={styles.servicePrice}>a partir de R$ 600</Text>
            <View style={[styles.serviceBadge, { backgroundColor: '#FFEDD5' }]}>
              <Text style={[styles.serviceBadgeText, { color: '#C2410C' }]}>Preço fixo</Text>
            </View>
          </TouchableOpacity>

          {/* Cartão: Funilaria */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={() => router.push('/(client)/search')}
          >
            <Text style={styles.serviceIcon}>🎨</Text>
            <Text style={styles.serviceName}>Funilaria</Text>
            <Text style={styles.servicePrice}>Sob avaliação</Text>
            <View style={[styles.serviceBadge, { backgroundColor: '#F3E8FF' }]}>
              <Text style={[styles.serviceBadgeText, { color: '#7E22CE' }]}>Orçamento</Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* Botão ver todos os serviços */}
        <TouchableOpacity style={styles.allServicesBtn}>
          <Text style={styles.allServicesIcon}>📋</Text>
          <View>
            <Text style={styles.allServicesTitle}>Todos os serviços</Text>
            <Text style={styles.allServicesDesc}>Ver catálogo completo</Text>
          </View>
          <Text style={styles.allServicesArrow}>›</Text>
        </TouchableOpacity>

        {/* Espaço no final para não ficar colado na barra de navegação */}
        <View style={{ height: 20 }} />

      </ScrollView>
    </View>
  );
}

// ============================================================
// ESTILOS — Funciona como o CSS do app
// ============================================================
const styles = StyleSheet.create({

  // Tela toda
  container: {
    flex: 1,                        // Ocupa todo o espaço disponível
    backgroundColor: Colors.bg,
  },

  // Cabeçalho azul escuro
  header: {
    backgroundColor: Colors.brand,  // Azul escuro
    paddingTop: 50,                 // Espaço do topo (status bar)
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  // Linha do topo do cabeçalho
  headerTop: {
    flexDirection: 'row',           // Coloca os filhos lado a lado
    justifyContent: 'space-between',// Um em cada extremo
    alignItems: 'center',
    marginBottom: 16,
  },

  headerGreeting: {
    color: 'rgba(255,255,255,0.7)', // Branco semi-transparente
    fontSize: 13,
  },

  headerName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  // Botão de notificação
  notifBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,               // Círculo perfeito
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notifIcon: { fontSize: 18 },

  // Barra de busca
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },

  searchIcon: { fontSize: 16 },

  searchText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },

  // Área rolável
  scroll: { flex: 1, padding: 16 },

  // Título de seção (ex: "PROMOÇÕES")
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.muted,
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 4,
  },

  // Scroll horizontal dos banners
  bannerScroll: { marginBottom: 16 },

  // Cartão de banner
  banner: {
    width: 280,
    borderRadius: 16,
    padding: 18,
    marginRight: 12,
  },

  bannerTag: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },

  bannerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },

  bannerDesc: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: 12,
  },

  bannerPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bannerOldPrice: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    textDecorationLine: 'line-through', // Risco no preço antigo
  },

  bannerPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFD166',
  },

  bannerBtn: {
    backgroundColor: '#FFD166',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  bannerBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A3C5E',
  },

  // Grade de serviços 2x2
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',               // Quebra para a linha de baixo
    gap: 10,
    marginBottom: 12,
  },

  // Cartão de serviço individual
  serviceCard: {
    width: '48%',                   // Dois por linha
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
  },

  serviceIcon: { fontSize: 24, marginBottom: 8 },

  serviceName: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  servicePrice: {
    fontSize: 12,
    color: Colors.muted,
    marginBottom: 6,
  },

  serviceBadge: {
    alignSelf: 'flex-start',        // Não estica até o fim
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  serviceBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },

  // Botão "Todos os serviços"
  allServicesBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    gap: 12,
  },

  allServicesIcon: { fontSize: 22 },

  allServicesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },

  allServicesDesc: {
    fontSize: 12,
    color: Colors.muted,
  },

  allServicesArrow: {
    fontSize: 24,
    color: Colors.muted,
    marginLeft: 'auto',
  },
});