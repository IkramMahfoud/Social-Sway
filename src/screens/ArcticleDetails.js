import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ArcticleDetails = ({ route }) =>
{
  const { article } = route.params;

  return (
    <View style={styles.container}>

      <Image source={{ uri: article.url }} style={styles.articlesImage} />
      <Text style={styles.articlesTitle}>{article.title}</Text>
      <Text style={styles.articlesDesc}>{article.photoDesc}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  articlesImage: {
    width: 500,
    height: 500,
    marginBottom: 10,
  },
  articlesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  articlesDesc: {
    fontSize: 18,
    margin: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
});

export default ArcticleDetails;
