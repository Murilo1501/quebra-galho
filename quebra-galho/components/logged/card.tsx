import { View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('./../../assets/images/air.jpg')}
                    style={styles.image}
                />
                <View style={styles.info}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Icon style={styles.icon} name="star" size={40} color="#FFC907" />
                            <Text style={styles.numberRating}>5.0</Text>
                            <Text style={styles.quantityRating}>(5)</Text>
                        </View>
                        <Icon style={styles.icon} name="heart" size={40} color="#FF5C5C" />
                    </View>
                    <Text>Ar condicionado soltou a base ...</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 40,
        width: 350,
        height: 150,
        marginLeft: "5%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
    },

    card: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        borderRadius: 10,

    },

    image: {
        width: "40%",
        height: "100%",
    },

    info: {
        width: "60%",
        padding: 10,
        justifyContent: "center",
    },

    rating: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        justifyContent: "space-between",
    },

    icon: {
        fontSize: 30,
    },

    star: {
        flexDirection: "row",
        alignItems: "center",
    },

    numberRating: {
        fontSize: 15,
        paddingLeft: 5,
    },

    quantityRating: {
        fontSize: 10,
        color: "#9B9B9B",
    }
});
