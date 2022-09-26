import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/theme'

const OwnerDetailsCard:React.FC = () => {
  return (
    <View style={styles.card}>
    <View style={{flexDirection:'row'}}>
      <View style={styles.textSubBox}>
      <Text style={styles.cardText}>{'CREATED BY'}</Text>
      </View>
      <View style={styles.subTextSubBox}>
      <Text style={styles.cardSubText}>{'Distinct Cloud Labs'}</Text>
      </View>
    </View>

    <View style={{flexDirection:'row'}}>
      <View style={styles.textSubBox}>
      <Text style={styles.cardText}>{'OWNER'}</Text>
      </View>
      <View style={styles.subTextSubBox}>
      <Text style={styles.cardSubText}>{'Sadiq Rauf'}</Text>
      </View>
    </View>

    <View style={{flexDirection:'row'}}>
      <View style={styles.textSubBox}>
      <Text style={styles.cardText}>{'PURCHASED ON'}</Text>
      </View>
      <View style={styles.subTextSubBox}>
      <Text style={styles.cardSubText}>{'02 Apr 2022'}</Text>
      </View>
    </View>

    <View style={{flexDirection:'row'}}>
      <View style={styles.textSubBox}>
      <Text style={styles.cardText}>{'MANUFACTURED'}</Text>
      </View>
      <View style={styles.subTextSubBox}>
      <Text style={styles.cardSubText}>{'01 Apr 2022'}</Text>
      </View>
    </View>
    
  </View>
  )
}

export default OwnerDetailsCard

const styles = StyleSheet.create({
    card: {
        padding:10,
        marginTop:6,
        borderRadius:10,
        paddingVertical:15,
        backgroundColor: colors.signetPrimary,
      },
      textSubBox:{
        flex:0.42,
        paddingHorizontal:10
      },
      subTextSubBox:{
        flex:0.48,
        paddingHorizontal:10
      },
      cardText:{
        marginTop:8,
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        textAlign: 'right',
        color: colors.signetSecondary,
        fontFamily: 'Poppins-Regular',
      },
      cardSubText:{
        marginTop:8,
        fontSize: 15,
        lineHeight: 24,
        fontWeight: '400',
        textAlign: 'left',
        color: colors.white,
        fontFamily: 'Poppins-Regular',
      }
})