import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,  // Sobe o conteúdo quando o teclado abre
  Platform,              // Detecta se é iOS ou Android
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

export default function Chat() {
  const router = useRouter();

  return (
    // KeyboardAvoidingView evita o teclado cobrir o campo de texto
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      {/* ── CABEÇALHO ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        {/* Info da oficina */}
        <View style={styles.shopInfo}>
          <View style={styles.shopAvatar}>
            <Text style={styles.shopAvatarText}>AT</Text>
          </View>
          <View>
            <Text style={styles.shopName}>AutoTech Mendanha</Text>
            <Text style={styles.shopStatus}>🟢 Online agora</Text>
          </View>
        </View>
      </View>

      {/* ── MENSAGENS ── */}
      <ScrollView
        style={styles.messages}
        showsVerticalScrollIndicator={false}
      >

        {/* Mensagem recebida (oficina) */}
        <View style={styles.msgGroup}>
          <Text style={styles.msgTime}>AutoTech • 09:30</Text>
          <View style={styles.bubbleIn}>
            <Text style={styles.bubbleInText}>Olá! Como posso ajudar?</Text>
          </View>
        </View>

        {/* Mensagem enviada (cliente) */}
        <View style={[styles.msgGroup, styles.msgGroupOut]}>
          <Text style={[styles.msgTime, styles.msgTimeOut]}>Você • 09:32</Text>
          <View style={styles.bubbleOut}>
            <Text style={styles.bubbleOutText}>
              Gostaria de um horário especial para troca de embreagem no sábado.
            </Text>
          </View>
        </View>

        {/* Mensagem recebida */}
        <View style={styles.msgGroup}>
          <Text style={styles.msgTime}>AutoTech • 09:35</Text>
          <View style={styles.bubbleIn}>
            <Text style={styles.bubbleInText}>
              Claro! Temos sábado às 08h disponível. Serviço leva em média 3h. Posso confirmar?
            </Text>
          </View>
        </View>

        {/* ── CARD DE PROPOSTA ── */}
        {/* Quando a oficina envia uma proposta de agendamento pelo chat */}
        <View style={styles.msgGroup}>
          <Text style={styles.msgTime}>AutoTech • 09:36</Text>
          <View style={styles.proposalCard}>
            <Text style={styles.proposalTitle}>📋 Proposta de agendamento</Text>
            <View style={styles.divider} />

            <View style={styles.proposalRow}>
              <Text style={styles.proposalLabel}>Serviço</Text>
              <Text style={styles.proposalValue}>Troca de embreagem</Text>
            </View>
            <View style={styles.proposalRow}>
              <Text style={styles.proposalLabel}>Data</Text>
              <Text style={styles.proposalValue}>Sáb, 31/05</Text>
            </View>
            <View style={styles.proposalRow}>
              <Text style={styles.proposalLabel}>Horário</Text>
              <Text style={styles.proposalValue}>08:00</Text>
            </View>
            <View style={styles.proposalRow}>
              <Text style={styles.proposalLabel}>Valor</Text>
              <Text style={[styles.proposalValue, { color: Colors.brand2, fontWeight: '700' }]}>
                R$ 750
              </Text>
            </View>

            <TouchableOpacity style={styles.acceptBtn}>
              <Text style={styles.acceptBtnText}>Aceitar proposta</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 16 }} />
      </ScrollView>

      {/* ── CAMPO DE ENVIO ── */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor={Colors.muted}
          multiline                         // Permite múltiplas linhas
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendIcon}>➤</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
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
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  // Botão voltar
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

  // Info da oficina no topo
  shopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  // Avatar circular com iniciais
  shopAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shopAvatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
  },

  shopName: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
  },

  shopStatus: {
    fontSize: 12,
    color: Colors.green,
  },

  // Área das mensagens
  messages: {
    flex: 1,
    padding: 16,
  },

  // Grupo de mensagem (tempo + bolha)
  msgGroup: {
    marginBottom: 12,
    maxWidth: '75%',                  // Não ocupa tela toda
  },

  msgGroupOut: {
    alignSelf: 'flex-end',            // Alinha à direita
  },

  msgTime: {
    fontSize: 11,
    color: Colors.muted,
    marginBottom: 4,
  },

  msgTimeOut: {
    textAlign: 'right',
  },

  // Bolha recebida (cinza)
  bubbleIn: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    borderBottomLeftRadius: 4,        // Pontinha embaixo à esquerda
    padding: 12,
  },

  bubbleInText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },

  // Bolha enviada (azul)
  bubbleOut: {
    backgroundColor: Colors.brand2,
    borderRadius: 16,
    borderBottomRightRadius: 4,       // Pontinha embaixo à direita
    padding: 12,
  },

  bubbleOutText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },

  // Card de proposta da oficina
  proposalCard: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    maxWidth: 260,
  },

  proposalTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 10,
  },

  proposalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  proposalLabel: {
    fontSize: 13,
    color: Colors.muted,
  },

  proposalValue: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '500',
  },

  // Botão aceitar proposta
  acceptBtn: {
    backgroundColor: Colors.brand2,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  acceptBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  // Linha de envio de mensagem
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },

  input: {
    flex: 1,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: Colors.text,
    maxHeight: 100,                   // Máximo de altura para o campo
  },

  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.brand2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendIcon: {
    color: '#fff',
    fontSize: 16,
  },
});