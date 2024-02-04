import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { DATA } from "../data/usersData";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedUser, setSelectedUser] = useState(null);
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {DATA.map((user, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'palevioletred' : 'white',
            },
            styles.userContainer,
          ]}
          onPress={() => {
            setSelectedUser(user);
            setTimeout(() => {
              setSelectedUser(null);
              navigation.navigate('UserDetails', { user });
            }, 200);
          }}
        >
          <Text style={styles.userName}>{user.name}</Text>
          <Image source={{ uri: user.img }} style={styles.userImage} />
          <View>
            <Text style={styles.userDesc}>{user.country}</Text>
          </View>
        </Pressable>
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
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center',
  },
  userImage: {
    width: 450,
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
});

export default HomeScreen;
