import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchbarComponents } from "../../../components/SearchbarComponent";
import { RestaurantCard } from "../components/restaurants-info-card";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

`
const SearchContainer = styled(View)`
    padding: 20px;
`

const ListContainer = styled(View)`
    flex: 1;
    padding: 16px;
`

export const RestaurantScreen = () => {
    return (
        <SafeArea >
            <SearchContainer>
                <SearchbarComponents />
            </SearchContainer>
            <ListContainer>
                <RestaurantCard />
            </ListContainer>
        </SafeArea>
    )
}


