import { StyleSheet, Text, View, Flatlist, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';

const Data = [
    {id: 1, label: 'Nindia'},
    {id: 2, label: 'Diana'},
    {id: 3, label: 'Mimil'},
    {id: 4, label: 'Liana'},
    {id: 5, label: 'Fina'},
];

const Home = ({navigation}) => {
  return (
    <View>
        <Flatlist
            data={Data}
            renderItem={({item}) => <IconMenu label={item.label} />}
            horizontal={true}
        />
        <TouchableOpacity
          onPress={({item}) => navigation.navigate('About')}
          style={styles.btn}>
          <Text style={styles.txt}>Ke About</Text>
          </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
    };
    txt:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white';
    };
});