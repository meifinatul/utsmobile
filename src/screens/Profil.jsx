import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/vina.jpeg')}
        style={styles.profileImage}
      />
      <TouchableOpacity
        onPress={() => console.log("Toko VINA")}
        style={styles.editProfileButton}
      >
        <Text style={styles.editProfileButtonText}>Toko VINA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 18,
    marginBottom: 5,
  },
  editProfileButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
