import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import BreadItem from "../../components/BreadItem";
import { useDispatch, useSelector } from "react-redux";
import { filterBreads, selectBread } from "../../store/actions/bread.actions";

export default function CategoryBreadScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = useSelector(state => state.breads.filteredBreads);

  const handleSelected = item => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detail", { name: item.name });
  };

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  );

  useEffect(() => {
    dispatch(filterBreads(categoryID));
  }, [categoryID]);

  return (
    <FlatList
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
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
