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
              buttonStyle={receipt.currencySelector}
              buttonTextStyle={{color: "white"}}/>

            <TextInput placeholder={"Amount on Receipt"} keyboardType='numeric' style={receipt.amountInput}/>

          </View>

        </View>


        {/* Date */}
        <View style={receipt.dataValuesItem}>
          <Text style={receipt.itemTitle}>Date:</Text>

          
          <View style={receipt.moneyRow}>

            <TouchableOpacity onPress={showDatePicker} style={receipt.dateOuter}> 
                <Text style={receipt.dateInner}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>   

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
              buttonStyle={receipt.categoryDropdown}
              buttonTextStyle={receipt.categoryText}/>

          </View>

        </View>

      </View>

      {/* Pictures of the receipt(s) */}
      <View style={receipt.receiptPanel}>

        <TouchableOpacity style={receipt.receiptImageBox}>
          
          <View style={receipt.receiptImageAdd}>
            <Icon 
              name={receipt.receiptImageIcon.name}
              size={receipt.receiptImageIcon.size} 
              color={receipt.receiptImageIcon.color} 
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