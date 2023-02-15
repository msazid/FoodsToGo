import React from "react";
import { Searchbar } from "react-native-paper";

export const SearchbarComponents = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
}