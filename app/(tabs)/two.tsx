import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.tile}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/pizzaorder.png")}
            />
          </View>
          <View style={styles.ordercontent}>
            <Text style={styles.orderTitle}>Veggie</Text>
            <Text style={styles.details}>Large 10" Traditional Crust</Text>
            <View style={styles.extrasContainer}>
              <Text style={styles.extras}>Added: Extra sauce, pepperoni</Text>
              {/* Offer text */}
              <Text style={styles.offerText}>25% off on 5 pizzas</Text>
              {/* Plus and minus buttons view */}
              <View style={styles.plusMinusContainer}>
                {/* Minus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                {/* Number */}
                <Text style={styles.number}>1</Text>
                {/* Plus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tile}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/mexican.jpg")}
            />
          </View>
          <View style={styles.ordercontent}>
            <Text style={styles.orderTitle}>Mexican Tortillas</Text>

            <View style={styles.extrasContainer}>
              <Text style={styles.extras}>1pc(s)</Text>
              {/* Offer text */}
              <Text style={styles.offerText}>25% off on 5 tortillas</Text>
              {/* Plus and minus buttons view */}
              <View style={styles.plusMinusContainer}>
                {/* Minus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                {/* Number */}
                <Text style={styles.number}>2</Text>
                {/* Plus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tile}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/burger.jpg")}
            />
          </View>
          <View style={styles.ordercontent}>
            <Text style={styles.orderTitle}>Burger</Text>
            <Text style={styles.details}>Veg Grilled Burger</Text>
            <View style={styles.extrasContainer}>
              <Text style={styles.extras}>Added: Extra onions, lettuce</Text>
              {/* Offer text */}
              <Text style={styles.offerText}>25% off on 2 burgers</Text>
              {/* Plus and minus buttons view */}
              <View style={styles.plusMinusContainer}>
                {/* Minus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                {/* Number */}
                <Text style={styles.number}>1</Text>
                {/* Plus button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 2,
          backgroundColor: "gray",
        }}
      />
      <View>
        <View style={styles.offerCode}>
          <Text style={{ justifyContent: "center" }}>
            <MaterialIcons name="verified" size={16} color="green" />
            LPP58
          </Text>
          <Text style={styles.promo}> Promo Code Accepted</Text>
        </View>
      </View>
      <View style={styles.party}>
        <Text style={{fontWeight: "bold", paddingTop: 10, textAlign: "center"}}>Pizza Party! Grab your offer now!! Refer your friends and earn credit upto 100 Points! </Text>
      </View>
      <Text style={styles.change}>Change Promo Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  tile: {
    flexDirection: "row",

    width: "100%",
    height: 160,
    marginBottom: 15,
  },
  image: {
    height: 140,
  },
  ordercontent: {
    flexDirection: "column",
    marginLeft: 15,
    flex: 1,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingTop: 10,
  },
  details: {
    color: "gray",
    paddingBottom: 5,
  },
  extrasContainer: {
    flexWrap: "wrap",
  },
  extras: {
    fontSize: 15,
    flexWrap: "wrap",
    paddingBottom: 5,
  },
  offerText: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  plusMinusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  number: {
    fontSize: 18,
    marginRight: 10,
  },
  offerCode: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  promo: {
    borderWidth: 2,
    borderColor: "green",
    color: "green",
    fontWeight: "bold",
  },
  party:{
    paddingTop: 10,
    
  },
  change:{
    textAlign: "center",
    paddingTop: 30,
    fontWeight: "bold",
    color: "#29CAD4",
    fontSize: 17
  }
});
