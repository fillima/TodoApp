import { StyleSheet } from "react-native";
import { colors } from "../Colors/colors";
import { fonts } from "../Fonts/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray700,
        padding: 24
    },
    title: {
        marginTop: 50,
        textAlign: "center"
    },
    logo: {
        marginTop: 50,
        alignSelf: "center"
    },
    input: {
        flex: 1,
        color: colors.gray100,
        backgroundColor: colors.gray500,
        padding: 16,
        height: 54,
        fontSize: 16,
        borderRadius: 6,
        marginRight: 15,
        fontFamily: fonts.interRegular
    },
    addButton: {
        height: 52,
        width: 52,
        backgroundColor: colors.blueDark,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    form: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 50
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 25
    },
    created: {
        color: colors.blue,
        fontSize: 14,
        fontFamily: fonts.interBold,
        marginRight: 10
    },
    count: {
        color: colors.gray200,
        fontFamily: fonts.interBold,
        backgroundColor: colors.gray400,
        width: 25,
        height: 19,
        borderRadius: 999,
        textAlign: "center"
    },
    finished: {
        color: colors.purple,
        fontFamily: fonts.interBold,
        fontSize: 14,
        marginRight: 10
    },
    boxStatus: {
        flexDirection: "row",
    },
    hr: {
        borderBottomColor: colors.gray300,
        borderBottomWidth: 2,
        marginTop: 30
    },
    empty: {
        flex: 1,
        marginTop: 50,
        alignItems: "center"
    },
    textEmptyBold: {
        fontFamily: fonts.interBold,
        color: colors.gray200,
        marginTop: 20
    },
    textEmpty: {
        color: colors.gray200,
        marginTop: 5,
        fontFamily: fonts.interRegular
    }
})