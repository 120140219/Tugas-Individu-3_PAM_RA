import React from "react";
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Elang',
    waktu : '22 Oktober 2022, 10.00',

  },
  {
    id: '2',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Tapis Air',
    waktu : '22 Oktober 2022, 14.00',
  },
  {
    id: '3',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Maja Air',
    waktu : '22 Oktober 2022, 12.00',
  },
  {
    id: '4',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'AirAsia',
    waktu : '22 Oktober 2022, 18:00',
  },
];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanAsal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <Entypo name="aircraft" size={24} color="black" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={Jadwal}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
        <View>
              <Text style={styles.copyright}>Copyright Muh Rafi Irfan Lubis -120140219</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5f072',
  },
  header:{
    width:'100%',
    backgroundColor: '#a5f072',
    padding:20,
    
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: 'black',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 120,
    textAlign: 'center',
  },
});

export default Penerbangan;