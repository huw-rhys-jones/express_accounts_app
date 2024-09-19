import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ReceiptDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>express</Text>
        <Text style={styles.subLogo}>accounts</Text>
        <View style={styles.iconContainer}>
          <View style={styles.menuIcon} />
          <View style={styles.profileIcon} />
        </View>
      </View>

      {/* Receipt Image */}
      <View style={styles.receiptContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100x200' }} // Add your receipt image URL here
          style={styles.receiptImage}
        />
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Receipt Details */}
      <Text style={styles.detailsTitle}>Receipt details found</Text>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Currency</Text>
        <TextInput style={styles.value} defaultValue="£" editable={false} />
        <Text style={styles.checkmark}>✔</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.value} defaultValue="13.35" editable={false} />
        <Text style={styles.checkmark}>✔</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Date</Text>
        <TextInput style={styles.value} defaultValue="24/05/06" editable={false} />
        <Text style={styles.checkmark}>✔</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.value} defaultValue="SUBSISTENCE" editable={false} />
        <Text style={styles.checkmark}>✔</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retryButton}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 32,
    color: '#9f0050',
    fontWeight: 'bold',
  },
  subLogo: {
    fontSize: 16,
    color: '#9f0050',
    letterSpacing: 1.5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  menuIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#999',
    marginRight: 10,
    borderRadius: 5,
  },
  profileIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#999',
    borderRadius: 15,
  },
  receiptContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  receiptImage: {
    width: 100,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#ff0000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#9f0050',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    width: '30%',
  },
  value: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginRight: 10,
  },
  checkmark: {
    fontSize: 24,
    color: '#00b300',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  retryButton: {
    backgroundColor: '#9f0050',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  acceptButton: {
    backgroundColor: '#003399',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReceiptDetailsScreen;
