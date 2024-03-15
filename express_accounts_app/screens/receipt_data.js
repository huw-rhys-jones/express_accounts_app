import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { receipt } from '../styles' 


const currencies = ["£", "€", "$"]

export default function ReceiptData({ navigation }) {
  return (
    <View style={receipt.container}>

      {/* The title bar */}
      <View style={receipt.containerTitle}>
        <Text style={receipt.textTitle}>Your Receipt</Text>
      </View>

      {/* Data values associated with receipt */}
      <View style={receipt.dataValuesPanel}> 

        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Amount:</Text>

          <View style={receipt.moneyRow}>

            <SelectDropdown
	            data={currencies}
	            onSelect={(selectedItem, index) => {
		          console.log(selectedItem, index)
	            }}
              defaultValueByIndex={0}
              buttonStyle={{backgroundColor: "black", width: 40, height: 40, borderRadius: 5}}
              buttonTextStyle={{color: "white"}}/>

            <TextInput style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5}}/>

          </View>

        </View>

      </View>

      {/* Buttons at the bottom */}
      <View style={receipt.buttonsBottom}>

        <TouchableOpacity style={receipt.button}>
           <Text style={receipt.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={receipt.button}>
           <Text style={receipt.buttonText}>Save</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
}