import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />
      <Ionicons name="search-outline" size={24} color="white" style={styles.icon} />
      <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="white" />
      <Ionicons name="notifications-outline" size={24} color="white" style={styles.icon} />
    </View>
  );
};

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="share-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Repost</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="send-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Header />
      <Text style={styles.subtitle}>Work From Home/ Experience & Fresher Jobs</Text>
      <Text style={styles.clickhere}>We are hiring ...</Text>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Image
          source={{
            uri:
              'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/we-are-hiring%2C-work-from-home-jobs%2C-job-flyer-design-template-ec3f0d578fb7e2b1835fbeb09e26ac0e_screen.jpg?ts=1585314886',
          }}
          style={styles.pp}
        />
      </View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#24469C',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#24469C',
    marginLeft: 10,
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
  },
  icon: {
    marginLeft: 10,
  },
  subtitle: {
    marginRight: 248,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clickhere: {
    marginTop: 10,
    marginRight: 50,
    fontSize: 16,
    marginBottom: 50,
    color: 'black',
  },
  pp: {
    marginLeft: 5,
    width: 400,
    height: 400,
    borderRadius: 100 / 2,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
  },
});
