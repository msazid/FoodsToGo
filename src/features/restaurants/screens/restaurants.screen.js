import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchbarComponents } from "../../../components/SearchbarComponent";
import { RestaurantCard } from "../components/restaurants-info-card";

export const RestaurantScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <SearchbarComponents />
            </View>
            <View style={styles.list}>
                <RestaurantCard />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 20,
    },
    list: {
        flex: 1,
        padding: 16,
    }
});