import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Logo = require("../../assets/Logo.png");

import { colors } from "../Colors/colors";
import { styles } from "./styles";
import { useFonts, Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Tarefa } from "../Components/Tarefa";

export default function Home() {
    const [tarefas, setTarefas] = useState<string[]>([]);
    const [tarefaName, setTarefaName] = useState("");
    const [countTotal, setCountTotal] = useState(0);

    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function removeTarefa(name: string) {
        Alert.alert("Excluir", `Deseja excluir a tarefa ${name}?`, [
        {
            text: "Sim",
            onPress: () => setTarefas(
                prevState => prevState.filter(tarefa => tarefa !== name)
            )
        },
        {
            text: "Não",
            style: "cancel"
        }
        ]);
    }

    function addTarefa() {
        if(tarefaName == '') {
            return Alert.alert("Campo vazio", "Digite uma descrição para sua tarefa");
        }
    
        setTarefas(prevState => [...prevState, tarefaName]);
        setTarefaName("");
        setCountTotal(tarefas.length + 1);
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
                onChangeText={setTarefaName}
                value={tarefaName}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTarefa}>
                <Text>
                    <AntDesign name="pluscircleo" size={18} color={colors.gray100} />
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.status}>
            <View style={styles.boxStatus}>
                <Text style={styles.created}>Criadas</Text>
                <Text style={styles.count}>{countTotal}</Text>
            </View>
            <View style={styles.boxStatus}>
                <Text style={styles.finished}>Concluídas</Text>
                <Text style={styles.count}></Text>
            </View>
        </View>
        <View style={styles.hr} />
        <FlatList
            data={tarefas}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Tarefa
                key={item}
                name={item}
                onRemove={() => removeTarefa(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View style={styles.empty}>
                    <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={100} color={colors.gray200} />
                    <Text style={styles.textEmptyBold}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            )}
        />
        
      </View>
    );
}