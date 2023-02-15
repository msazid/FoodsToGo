import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ["https://cdn.sortiraparis.com/images/80/95878/693086-photos-mohamed-cheikh-top-chef-2021-a-la-pagode-de-cos-de-la-reserve.jpg"],
        address = '1001 Some random Street',
        isOpen = true,
        openingHours = 10,
        rating = 4.5,
        isClosedTemporarily = true,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Card.Content >
                <Text style={styles.title}>
                    {name}
                </Text>
            </Card.Content>
        </Card>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 0
    },
    cover: {
        padding: 20,
        borderRadius: 0,
        backgroundColor: 'white'
    },
    title: {
        padding: 16,
        borderRadius: 0,
        backgroundColor: 'white'
    }

})