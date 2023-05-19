import { StyleSheet } from "react-native";
import { colors } from "../../Colors/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.gray400,
        marginTop: 20,
        borderRadius: 8,
        height: "auto",
        padding: 12,
        alignItems: "center"
    },
    description: {
        color: colors.gray100,
        textAlign: "left",
        width: "78%",
        marginLeft: 15,
        marginRight: 10,
        textDecorationLine: "none"
    },
    descriptionChecked: {
        color: colors.gray300,
        textAlign: "left",
        width: "78%",
        marginLeft: 15,
        marginRight: 10,
        textDecorationLine: "line-through"
    },
    checkbox: {
        borderRadius: 999,
        width: 24,
        height: 24
    }
})