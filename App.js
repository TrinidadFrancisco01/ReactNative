import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado></Encabezado>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
    </View>
  
  );
}

export const Encabezado = () => {
  return [
    <View style={styles.encabezado} key="encabezado">
      {/* Contenido del encabezado */}
    </View>,
  ];
};

export const Cuerpo = () => {
  return [
    <View style={styles.cuerpo} key="cuerpo">
      <Text style={styles.texto}>Sign in to Wattpad</Text>
      <View style={styles.botones}>
        <TouchableOpacity style={styles.btnFacebook}>
          <Text style={styles.textoBoton}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoogle}>
          <Text style={styles.textoBtnGoogle}>Google</Text>
        </TouchableOpacity>
      </View>
      <Text>OR</Text>
      <Text style={styles.texto2}>Username or Email</Text>
      <TextInput placeholder="Username" style={styles.inputs} />
      <Text style={styles.texto2}>Password</Text>
      <TextInput placeholder="Password" style={styles.inputs}/>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.textoBoton}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.bajo}>Forgot password?</Text>
      <Text>Don't have an account? Sign up</Text>
    </View>,
  ];
};

export const Pie = () => {
  return [
    <View style={styles.pie} key="pie">
      {/* Contenido del pie */}
    </View>,
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  encabezado: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor : 'white',
    padding:15,
    flexDirection:'row'
  },
  pie:{
    flex:1,
    justifyContent: 'center',
    backgroundColor : 'white',
    justifyContent: 'space-around',
    alignItems : 'center',
    flexDirection:'row',
  },
  cuerpo:{
    flex:8,
    alignItems:'center',
    backgroundColor : 'white',
    //borderWidth:1
  },
  texto:{
    color:'black',
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  texto2:{
    color:'black',
    fontSize: 20,
    textAlign:'left',
    alignSelf:'flex-start',
    padding:30
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10,

  },
  btnFacebook: {
    backgroundColor: '#1877f2', // Color de fondo de Facebook
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width:150,
  },

  btnGoogle: {
    backgroundColor: 'white', // Color de fondo de Google
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,  // Añade un borde de ancho 1
    borderColor: 'black',  // Color del borde
    width:150,
  },

  btnLogin: {
    backgroundColor: 'orange', // Puedes cambiar el color según tus preferencias
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 350,
    padding:15,
  },

  textoBoton: {
    color: 'white',
    textAlign: 'center',
  },
  textoBtnGoogle: {
    color: 'black',
    textAlign: 'center',
  },
  inputs:{
    color:'black',
    fontSize: 20,
    textAlign:'left',
    alignSelf:'flex-start',
    left:30,
  },
  bajo:{
   padding:15,
  }
});

