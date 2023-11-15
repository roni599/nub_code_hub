import { View, Text, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';

const window = Dimensions.get('window');
const ratio = window.width/541;

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./../../assets/images/login_image.jpg')} />

      <Text style={styles.logintext}>Login To NUB Coding Hub</Text>


      <Text>Login/Signup</Text>

      <Image style={styles.img2} source={require('./../../assets/images/password.png')} />


      <TouchableOpacity
        // Button Linear Gradient
        style={styles.button}>
          <Image style={styles.img3} source={require('./../../assets/images/google.png')} />
          <Text style={{ color:'black' }}>Login with Google</Text>
        </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  img:{
    width:window.width,
    height: 362 * ratio,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  img2:{
    width:80,
    height:80,
    marginTop:40,
  },
  img3:{
    width:20,
    height:20,
  },

  logintext:{
    padding:30,
    fontWeight:'bold',
    fontSize:20,
  }, 
  button:{
    padding:15,
    paddingHorizontal:30,
    marginTop:50,
    borderRadius:35,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#ebebeb',
    gap:7,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

   
});

export default Login;