import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultScreen({ route, navigation }) {
  // Ambil data nilai terkecil dari parameter navigasi
  const { nilaiTerkecil } = route.params;
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultBox}>
        {/* === Gambar centang sukses === */}
        <Image
          source={require('../assets/success.png')}
          style={{
            width: screenWidth * 0.4,
            height: screenWidth * 0.4,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />

        {/* === Teks hasil pencarian === */}
        <Text style={styles.title}>Hasil Pencarian</Text>
        <Text style={styles.resultText}>Nilai Terkecil adalah:</Text>
        <Text style={styles.resultValue}>{nilaiTerkecil}</Text>

        {/* Tombol untuk kembali ke halaman input */}
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Input')}>
          <MaterialIcons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.buttonText}> Kembali</Text>
        </TouchableOpacity>

        {/* Tombol untuk kembali ke login */}
        <TouchableOpacity style={[styles.button, styles.backButton]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Logout </Text>
              <MaterialIcons name="logout" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// === Style Desain Halaman ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultBox: {
    alignItems: 'center',
    padding: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14488e',
    marginBottom: 10,
  },

  resultText: {
    fontSize: 20,
    color: '#333',
  },

  resultValue: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1aab4e',
    marginVertical: 20,
  },

  button: {
    backgroundColor: '#1aab4e',
    paddingVertical: 12,
    borderRadius: 10,
    width: 220,
    marginTop: 10,
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButton: {
    backgroundColor: '#14488e',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
});
