import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  private pressButton: () => void = () => {
    Alert.alert('Hola Tocaste la foto!')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.header}>Hola Mundo!! Desde la App de Ramon</Text>

          <Text>Ramón cortandose la peluca...</Text>
          <TouchableHighlight onPress={this.pressButton}>
            <Image source={require('../images/peluca.jpg')} style={styles.images} />
          </TouchableHighlight>

          <Text>Ramón con los amigos...</Text>
          <Image source={require('../images/amigos.jpg')} style={styles.images} />

          <Text>Ramón!!</Text>
          <Image source={require('../images/ramon.jpg')} style={styles.images} />
          <Text style={{ marginBottom: 20 }}>Esto fue la App de Rámon!!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 320,
    height: 340,
    marginBottom: 30,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  header: {
    fontSize: 30,
    fontWeight: "100",
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15
  }});
