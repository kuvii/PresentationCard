import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image 
        style={styles.image}
        source= {require('./src/images/fotoPerfil.jpg')}
        >
    </Image>
        <Text style={styles.profileText}>
          Aday Enrique Vera Ayala
        </Text>
        </View>
      <View style={styles.centerContainer}>
        <Text>
          Hola Mundo!
          Mi nombre es Aday Enrique Vera Ayala,
          Actualmente estoy estudiando el Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma 
          en el instituto Salesianos La Cuesta.
          Me encanta la informatica, los videojuegos, el anime y sobretodo, entender como funciona todo en la vida
        </Text>
        </View>
      <View style={styles.bottomContainer}>
        <Text>Qr</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'grey',
    width:'100%'
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '100%'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'blue',
    width: '100%'
  },
  image: {
    width:100,
    height:100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,

  },
  profileText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto'
  }
});
