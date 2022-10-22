import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../../theme/theme'

const Card: FC<{title:string, count:number}> = ({title, count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.signetPrimary,
        width:"48%",
        borderRadius:8,
        padding:15,
        marginBottom:15

    },
    title:{
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        textAlign: 'left',
        color: colors.white,
        fontFamily: 'Poppins-Regular',
    },
    count:{
        fontSize: 40,
        lineHeight: 60,
        fontWeight: '400',
        textAlign: 'left',
        color: colors.yellowPrimary,
        fontFamily: 'Poppins-Regular',
    }
})