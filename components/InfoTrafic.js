import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native";

import {getInfosTrafic} from "../helpers/PrimHelper"

 const InfoTrafic = (props) => {
    const [listMsg, setListMsg] = useState([])
    useEffect(() => {
        getInfosTrafic(props.line,props.api_key).then((rowdata) => {
            const templateMsg = []
            rowdata.forEach(element => {
                templateMsg.push(
                    <Text style= {styleInfo.sectionText}>-{">"} {element}</Text>
                )
            });

            setListMsg(templateMsg)
        })
    }, [props.line])
    return (
        <View>
            <Text style={styleInfo.sectionTitle}>Info pour la {props.line}</Text>
            {listMsg}
        </View>
        
    )
 }

 const styleInfo = StyleSheet.create({
    sectionTitle: {
        fontSize:20,
        marginBottom:5,
    },
    sectionText: {
        fontSize:16
    }
 })

 export default InfoTrafic