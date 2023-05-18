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
        marginLeft: 10
    }
})