import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.Junior}>
        <View>
          <Text style={styles.Title}>Programador Junior</Text>
        </View>
        <View>
          <Text style={styles.Text}>Um programador júnior é um profissional iniciante ou com pouca experiência na área de desenvolvimento de software. Geralmente,
            ele tem conhecimentos básicos de programação e é capaz de executar tarefas simples, seguir instruções e aprender novas tecnologias com o 
            tempo. O foco do programador júnior é adquirir experiência prática, melhorar suas habilidades e crescer dentro da equipe, recebendo orientação
              de programadores mais experientes.</Text>
        </View>
        <View style={styles.imagem}>
          <Image style={styles.Imagem} source={require("./assets/programador_junior.jpg")}/>
        </View>
      </View>
      <View style={styles.intermediario}>
        <View>
          <Text style={styles.Title}>Programador Intermediário</Text>
        </View>
        <View>
          <Text style={styles.Text}>Um programador intermediário já possui uma boa experiência e domínio de várias tecnologias e linguagens
             de programação. Ele é capaz de lidar com tarefas mais complexas de forma independente, identificar problemas e propor soluções
              eficientes. Embora ainda possa precisar de alguma orientação, o programador intermediário costuma ser mais autossuficiente,
               trabalhar com menos supervisão e contribuir ativamente para projetos maiores. Ele também começa a se envolver em decisões
                técnicas e na melhoria de processos dentro da equipe.</Text>
        </View>
        <View style={styles.imagem}>
          <Image style={styles.imagem} source={require("./assets/programador_intermediario.jpg")}/>
        </View>
      </View>
      <View style={styles.avançado}>
        <View>
          <Text style={styles.Title}>Programador Senior</Text>
        </View>
        <View>
          <Text style={styles.Text}>Um programador júnior é um profissional iniciante ou com pouca experiência na área de desenvolvimento de software. Geralmente,
            ele tem conhecimentos básicos de programação e é capaz de executar tarefas simples, seguir instruções e aprender novas tecnologias com o 
            tempo. O foco do programador júnior é adquirir experiência prática, melhorar suas habilidades e crescer dentro da equipe, recebendo orientação
              de programadores mais experientes.</Text>
        </View>
        <View style={styles.imagem}>
          <Image style={styles.imagem} source={require("./assets/programador_senior.jpg")}/>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 15
  },
  Text: {
    fontSize: 15,
    padding: 25
  },
  imagem: {
    padding: 50
  }
});
