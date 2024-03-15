import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { receipt } from '../styles' 
import DatePicker from 'react-native-date-picker'



const currencies = ["£", "€", "$"]
const d = new Date();

export default function ReceiptData({ navigation }) {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(true)

  return (
    <View style={receipt.container}>

      {/* The title bar */}
      <View style={receipt.containerTitle}>
        <Text style={receipt.textTitle}>Your Receipt</Text>
      </View>

      {/* Data values associated with receipt */}
      <View style={receipt.dataValuesPanel}> 
        
        {/* amount/currency */}
        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Amount:</Text>

          
          <View style={receipt.moneyRow}>

            <SelectDropdown
	            data={currencies}
	            onSelect={(selectedItem, index) => {
		          console.log(selectedItem, index)}}
              defaultValueByIndex={0}
              buttonStyle={{backgroundColor: "black", width: 40, height: 40, borderRadius: 5}}
              buttonTextStyle={{color: "white"}}/>

            <TextInput style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5}}/>

          </View>

        </View>


        {/* amount/currency */}
        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Date:</Text>

          
          <View style={receipt.moneyRow}>

            <TouchableOpacity style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5, height: 40}}> 
                <Text style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5, textAlign: "center", fontSize: 20}}>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Text>   

                <DatePicker modal open={open} date={date} 
                            onConfirm={(date) => {
                            setOpen(true)
                            setDate(date)
                          }}
                          onCancel={() => {
                            setOpen(false)
                          }}/>

            </TouchableOpacity>

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