import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
    setPokemon(response.data);
  };

  return (
    <View>
      <Text>Search for a pokemon</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={query}
        onChangeText={(e) => setQuery(e)}
      />
      <Button title="Search" onPress={getPokemon} />

      {pokemon && (
        <>
          <View style={styles.container}>
            <Text> {pokemon.name} </Text>
            <Image
              style={styles.image}
              source={{
                uri: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
