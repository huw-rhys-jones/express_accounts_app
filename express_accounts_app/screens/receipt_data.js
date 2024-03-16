import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { receipt } from '../styles' 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { currencies, expense_categories } from '../constants/arrays'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ReceiptData({ navigation }) {

  const [date, setDate] = useState(new Date())
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };

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
              buttonStyle={{backgroundColor: "black", width: 50, height: 40, borderRadius: 5}}
              buttonTextStyle={{color: "white"}}/>

            <TextInput placeholder={"Amount on Receipt"} keyboardType='numeric' style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5}}/>

          </View>

        </View>


        {/* Date */}
        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Date:</Text>

          
          <View style={receipt.moneyRow}>

            <TouchableOpacity onPress={showDatePicker} style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5, height: 40}}> 
                <Text style={{backgroundColor: "#b3bac0", flex: 0.75, marginLeft: 5, borderRadius: 5, padding: 5, textAlign: "center", fontSize: 20}}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>   

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={new Date()}
                />

            </TouchableOpacity>

          </View>

        </View>


        {/* category */}
        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Category:</Text>

          
          <View style={receipt.moneyRow}>

            <SelectDropdown
	            data={expense_categories}
	            onSelect={(selectedItem, index) => {
		          console.log(selectedItem, index)}}
              defaultValueByIndex={0}
              buttonStyle={{backgroundColor: "black", width: 200, height: 40, borderRadius: 5}}
              buttonTextStyle={{color: "white"}}/>

          </View>

        </View>

      </View>

      {/* Pictures of the receipt(s) */}
      <View style={receipt.receiptPanel}>

        <TouchableOpacity style={{flex: 0.8, width: "25%", backgroundColor: "#d9d9d9", margin: 10, justifyContent: "center", alignItems: "center"}}>
          
          <View style={{backgroundColor: "grey", padding: 5, borderRadius: 20, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
            <Icon 
              name="plus" 
              size={15} 
              color={"white"} 
              // style={styles.topBarButtonIcon.style} 
            />
          </View>  

        </TouchableOpacity>

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