// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {DATA} from "../data/usersData"

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

    {DATA.map((user, index) => (
      <View key={index} style={styles.userContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Image source={{ uri: user.img }} style={styles.userImage} />
        <View>
        <Text style={styles.userDesc}>{user.country}</Text>
        {/* <Text style={styles.userName}>{user.likes}</Text> */}
        </View>
      </View>
    ))}
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  userContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center',
  },
  userImage: {
    width: 450 ,
    height: 450,
    borderRadius: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDesc: {
    fontSize: 16,
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
