import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB } from "react-native-elements/dist/buttons/FAB";
import { useDispatch, useSelector } from "react-redux";
import GridItem from "../components/GridItem";
import { selectCategory } from "../store/actions/category.actions";
import { AntDesign } from "@expo/vector-icons";

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
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <FAB
        icon={<AntDesign name='shoppingcart' size={24} color='#fff' />}
        placement='right'
        color={"#333"}
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
