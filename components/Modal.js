import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";

const ModalItem = ({ modalVisible, itemSelected, onConfirm, onCancel }) => {
  // console.log(itemSelected);
  return (
    <Modal animationType='fade' visible={modalVisible} transparent={true}>
      <View style={styles.background}>
        <View style={styles.alertContainer}>
          <View>
            <Text style={styles.alertTitle}>
              Esta seguro que desea borrar el item de la lista?
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.alertDescription}>
              El item{" "}
              <Text styles={styles.alertItem}>{itemSelected.name} </Text>
              sera eliminado de la lista para siempre siempre.
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity onPress={onConfirm} style={styles.primaryButton}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.sescondaryButton, marginTop: 10 }}
              onPress={onCancel}>
              <Text style={{ ...styles.buttonText, color: "#918868" }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  alertContainer: {
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 10,
    textAlign: "center",
  },
  alertTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: "#333",
  },
  alertDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  alertItem: {
    textDecorationLine: "underline",
    color: "red",
  },
  primaryButton: {
    backgroundColor: "#918868",
    borderRadius: 3,
    paddingVertical: 10,
    alignItems: "center",
  },
  sescondaryButton: {
    borderRadius: 3,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
