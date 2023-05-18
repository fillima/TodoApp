import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { colors } from "../../Colors/colors";

type Props = {
    name: string,
    onRemove: () => void;
}

export function Tarefa({name, onRemove}: Props) {
    const [checked, setChecked] = useState("unfinished");

    function finishedTask(checked: string) {
        if (checked === "finished") {
            setChecked("unfinished")
        } else {
            setChecked("finished")
        }
    }

    return(
        <View style={styles.container}>
            <RadioButton
                value={checked}
                status={checked === "finished" ? "checked" : "unchecked"}
                onPress={() => finishedTask(checked)}
                uncheckedColor={colors.blue}
                color={colors.purple}
            />
            <Text style={styles.description}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Ionicons name="trash-outline" size={24} color={colors.gray300} />
            </TouchableOpacity>
        </View>
    )
}