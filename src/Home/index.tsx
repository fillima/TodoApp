import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Logo = require("../../assets/Logo.png");

import { colors } from "../Colors/colors";
import { styles } from "./styles";
import { useFonts, Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Tarefa } from "../Components/Tarefa";

export default function Home() {
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Image
            source={Logo}
            style={styles.logo}
        />
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray300}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text>
                    <AntDesign name="pluscircleo" size={18} color={colors.gray100} />
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.status}>
            <View style={styles.boxStatus}>
                <Text style={styles.created}>Criadas</Text>
                <Text style={styles.count}>0</Text>
            </View>
            <View style={styles.boxStatus}>
                <Text style={styles.finished}>Concluídas</Text>
                <Text style={styles.count}>0</Text>
            </View>
        </View>
        <View style={styles.hr} />
        <Tarefa />
        <View style={styles.empty}>
            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={100} color={colors.gray200} />
            <Text style={styles.textEmptyBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    );
}