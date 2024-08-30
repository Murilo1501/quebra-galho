import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react';

//biblioteca para criar o select
import {Picker} from '@react-native-picker/picker';

//Icons de fechar modal
import Feather from '@expo/vector-icons/Feather';

// estilo do componenet 
import styles from './styles'

export default function Editprofile({closeModal}) {
    const [generos, setGeneros] = useState(["Masculino", "Feminino", "Outro"]);
    const [generoSelecionado, setGeneroSelecionado] = useState([]);

    return(
        <View style={styles.container}>
            <View style={styles.containerEdit}>
                <Feather name="x" style={styles.buttonClose} onPress={closeModal} />
                <View style={styles.fieldInput}>
                    <TextInput style={styles.input}/>
                    <Text style={styles.label}>Nome:</Text>
                </View>
                <View style={styles.fieldInput}>
                    <TextInput style={styles.input}/>
                    <Text style={styles.label}>Especialidade:</Text>
                </View>
                <View style={styles.fieldInput}>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>Descrição do profissional:</Text>
                </View>

                <View style={styles.fieldSelect}>
                    <Picker
                        selectedValue={generoSelecionado}
                        style={styles.select}
                        onValueChange={(itemValue, itemIndex) =>
                            setGeneroSelecionado(itemValue)
                        }>
                         {
                            generos.map(gr => {
                                return <Picker.Item label={gr} value={gr} />
                            })
                         }
                    </Picker>
                    <Text style={styles.label}>Gênero:</Text>
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Adicionar experiencia</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}