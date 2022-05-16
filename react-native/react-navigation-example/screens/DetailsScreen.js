import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { getPokemons } from "../services/pokemons";

export default function DetailsScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const list = await fetchPokemons();
    setPokemons(list);
  }, []);

  const fetchPokemons = async () => {
    const response = await getPokemons();

    const data = response.results;
    const pokemonList = [];

    data.map((item) => pokemonList.push(item));

    return pokemonList;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemones</Text>
      {/* <Text style={styles.description}>
        Voluptate ipsum consequat ea eiusmod. Commodo labore qui minim ullamco
        dolore veniam cillum nostrud. Commodo ad excepteur ut id nisi duis
        eiusmod. In pariatur minim ea aliquip Lorem minim est aliquip eiusmod
        mollit duis in Lorem ea. Aute eu elit cillum eu eiusmod anim aliquip ut
        in excepteur nulla sunt. Sit qui cillum laboris laborum non ad laboris
        Lorem commodo enim et id. Et enim velit quis labore nisi esse.
      </Text>
      <View style={styles.buttonContainer}> */}
      <FlatList
        styles={styles.listContainer}
        data={pokemons}
        renderItem={(pokemon) => (
          <Text style={styles.listItem}>{pokemon.item.name}</Text>
        )}
        keyExtractor={(item) => pokemons.indexOf(item)}
        numColumns={2}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Volver al inicio"
          onPress={() => navigation.goBack()}
          color="teal"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    marginBottom: "10%",
  },
  description: {
    fontSize: 18,
    color: "gray",
  },
  buttonContainer: {
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: "50%",
    padding: 20,
  },
});
