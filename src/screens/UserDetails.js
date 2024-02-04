import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const UserDetailsScreen = ({ route }) =>
{
  const { user } = route.params;

  const navigation = useNavigation();


  const handleArticlePress = (article) =>
  {
    navigation.navigate('ArcticleDetails', { article });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

      <View style={[styles.topContainer, { backgroundColor: user.favColor }]}>
        <Image source={{ uri: user.img }} style={styles.userImage} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.userBio}>Bio:</Text>
        <Text style={styles.userDesc}>{user.desc}</Text>

        {/* Display user details */}
        {user.articles && user.articles.length > 0 && (
          <>
            {user.articles.map((article) => (
              <TouchableOpacity
                key={article.id}
                onPress={() => handleArticlePress(article)}
              >
                <View style={styles.articlesContainer}>
                  <Image source={{ uri: article.url }} style={styles.articlesImage} />
                  <View style={styles.titleContainer}>
                    <Text style={styles.articlesTitle}>{article.title}</Text>
                  </View>
                </View>

              </TouchableOpacity>
            ))}
          </>
        )}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  bottomContainer: {
    alignItems: 'center',
    padding: 20,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',

  },
  userBio: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'flex-start',
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 8,
  },
  userDesc: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'flex-start',
  },
  articlesContainer: {
    backgroundColor: 'gray',
    marginBottom: 20,
    marginTop: 30,
    position: 'relative',
  },
  articlesImage: {
    width: 500,
    height: 500,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // Adjust the alpha value for transparency
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  articlesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // Text color for better contrast
    color: 'white',
  },

  articlesDesc: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserDetailsScreen;