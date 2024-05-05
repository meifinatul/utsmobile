import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Makanan = ({navigation}) => {
  return (
    <View>
      <Text> Selamat Datang Di Produk Kami</Text>
      <Text> Menu Maknan </Text>
      <Text> 1. Ayam Gerprek 2. Sate Ayam 3. Nasi Goreng</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profil')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Makanan;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});