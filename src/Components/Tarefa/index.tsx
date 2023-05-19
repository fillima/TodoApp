import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { colors } from "../../Colors/colors";
import Checkbox from "expo-checkbox";

type Props = {
    name: string,
    onFinished: () => void,
    onRemove: () => void;
}

export function Tarefa({name, onRemove, onFinished}: Props) {
    const [checked, setChecked] = useState<boolean>(false);

    function finishedTask(e: boolean) {
        if (checked === true) {
            setChecked(false);
            onFinished(e);
        } else {
            setChecked(true);
            onFinished(e);
        }
    }

    return(
        <View style={styles.container}>
            <Checkbox
                value={checked}
                onValueChange={(e) => finishedTask(e)}
                color={checked ? colors.purple : colors.blue}
                style={styles.checkbox}
            />
            <Text style={[styles.description, checked === true && styles.descriptionChecked]}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Ionicons name="trash-outline" size={24} color={colors.gray300} />
            </TouchableOpacity>
        </View>
    )
}