import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TabOneScreen() {
  const items = [
    { id: 1, image: require("../../assets/images/pizza.jpg") },
    { id: 2, image: require("../../assets/images/fastfood.jpg") },
    { id: 3, image: require("../../assets/images/convenient.jpg") },
    { id: 4, image: require("../../assets/images/mexican.jpg") },
    { id: 5, image: require("../../assets/images/lastdeals.jpg") },
    { id: 6, image: require("../../assets/images/burger.jpg") },
    { id: 7, image: require("../../assets/images/deal.jpg") },
    { id: 8, image: require("../../assets/images/pasta.jpg") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput style={styles.input}>Search</TextInput>
        <AntDesign
          name="filter"
          style={styles.filter}
          size={40}
          color="white"
        />
      </View>
      <View style={styles.categories}>
        <ScrollView horizontal={true}>
          <View style={styles.category1}>
            <Text> All categories</Text>
          </View>
          <View style={styles.category}>
            <Text> Top categories</Text>
          </View>
          <View style={styles.category}>
            <Text> Popular</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.grid}>
        {items.map((item) => (
          <ImageBackground
            source={item.image}
            key={item.id}
            style={styles.itemBackground}
          >
            {/* <Text style={styles.item}>{item.name}</Text> */}
          </ImageBackground>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  searchbar: {
    flexDirection: "row",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    width: "75%",
  },
  filter: {
    backgroundColor: "#D60E64",
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  categories: {
    flexDirection: "row",
    padding: 20,
    flexWrap: "wrap",
  },
  category: {
    height: 40,
    width: 140,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    fontWeight: "bold",
  },
  category1: {
    height: 40,
    width: 140,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: "#D60E64",
    color: "white",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    fontSize: 25,
    margin: 5,
    padding: 5,
    height: 200,
    width: 190,
    textAlign: "center",

    borderWidth: 2,
  },
  itemBackground: {
    width: 190,
    height: 200,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
