import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const pokemons = [
  { name: 'Psyduck', type: 'Water' },
  { name: 'Charmander', type: 'Fire' },
  { name: 'Squirtle', type: 'Water' },
  { name: 'Bulbasaur', type: 'Grass' },
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Eevee', type: 'Normal' },
];

const PokemonList = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>PokemonList</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - type: {item.type}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    borderColor: 'blue',
    borderWidth: 10,
    padding: 60,
  },
  containerStyle: { alignItems: 'center', justifyContent: 'center' },
});
