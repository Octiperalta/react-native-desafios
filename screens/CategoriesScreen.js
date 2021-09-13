import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GridItem from "../components/GridItem";
import { selectCategory } from "../store/actions/category.actions";

export default function CategoriesScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", { name: item.title });
  };

  const renderGridItem = data => (
    <GridItem item={data.item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
