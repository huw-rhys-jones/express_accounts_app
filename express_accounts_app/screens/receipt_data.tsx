import React, { useRef, useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput, 
  Modal, 
  ScrollView, StyleSheet, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { receipt, logoStyles } from '../styles' 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { currencies, expense_categories } from '../constants/arrays'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pickImage } from './image_picker'
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome6 } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";

// TODO 
// Noticed that upon pressing the button to move to camera, it sometimes delays before moving
//  allowing the user to press buttons
//  The screen should be replaced with a loading placeholder during the transition



export default function ReceiptData({route, navigation }) {

  const [date, setDate] = useState(new Date())
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([])

  // check if the page has received data from another
  if (route.params) {

    console.log(route)

  }


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: React.SetStateAction<Date>) => {
    setDate(date)
    hideDatePicker();
  };

  const imagePicker = async () => {

    setModalVisible(false)
    const image = await pickImage()
    // navigation.navigate('Process', image)
    if (image) {
      navigation.navigate('Process', image.assets[0].uri)
    }
  }

  const launch_camera = () => {
    setModalVisible(false)
    navigation.navigate('Camera')

  }


  return (
    
    <ScrollView contentContainerStyle={logoStyles.scrollContainer}>
      
      <View style={receipt.container}>



        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22, backgroundColor: '#706464af'}}>
              <View style={{margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2}}}>
                <Text >How would you like to add your receipt?</Text>

                <View style={receipt.buttonsBottom}>

                  <TouchableOpacity onPress={() => launch_camera()}
                    style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
                    <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Camera</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => imagePicker()}
                    style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
                    <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Select Photo</Text>
                  </TouchableOpacity>

                </View>

                <TouchableOpacity
                  style={{borderWidth: 1, padding: 2, borderRadius: 2}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

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

        <ScrollView horizontal={true} contentContainerStyle={{width: "100%"}}>
          <View style={receipt.receiptPanel}>

            {/* Add receipt button */}
            <TouchableOpacity onPress={() => setModalVisible(true)} style={receipt.receiptImageBox}>
              
              <View style={receipt.receiptImageAdd}>
                <Icon 
                  name={receipt.receiptImageIcon.name}
                  size={receipt.receiptImageIcon.size} 
                  color={receipt.receiptImageIcon.color} 
                  // style={styles.topBarButtonIcon.style} 
                />
              </View>  

            </TouchableOpacity>

            {/* Add receipt button */}
            {/* <TouchableOpacity onPress={() => setModalVisible(true)} style={receipt.receiptImageBox}>
              
              <View style={receipt.receiptImageAdd}>
                <Icon 
                  name={receipt.receiptImageIcon.name}
                  size={receipt.receiptImageIcon.size} 
                  color={receipt.receiptImageIcon.color} 
                  // style={styles.topBarButtonIcon.style} 
                />
              </View>  

            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={receipt.receiptImageBox}>
              
              <View style={receipt.receiptImageAdd}>
                <Icon 
                  name={receipt.receiptImageIcon.name}
                  size={receipt.receiptImageIcon.size} 
                  color={receipt.receiptImageIcon.color} 
                  // style={styles.topBarButtonIcon.style} 
                />
              </View>  

            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={receipt.receiptImageBox}>
              
              <View style={receipt.receiptImageAdd}>
                <Icon 
                  name={receipt.receiptImageIcon.name}
                  size={receipt.receiptImageIcon.size} 
                  color={receipt.receiptImageIcon.color} 
                  // style={styles.topBarButtonIcon.style} 
                />
              </View>  

            </TouchableOpacity> */}

            

          </View>

        </ScrollView>

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

    </ScrollView>
  );
}
