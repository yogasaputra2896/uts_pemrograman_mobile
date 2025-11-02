import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function InputScreen({ navigation }) {
  // State untuk menampung 4 nilai angka
  const [nilai1, setNilai1] = useState('');
  const [nilai2, setNilai2] = useState('');
  const [nilai3, setNilai3] = useState('');
  const [nilai4, setNilai4] = useState('');

  // Fungsi untuk mencari nilai terkecil dan pindah ke ResultScreen
  const handleCariTerkecil = () => {
    if (!nilai1 || !nilai2 || !nilai3 || !nilai4) {
      Alert.alert('Peringatan', 'Semua nilai wajib diisi!');
      return;
    }

    const angka = [
      parseFloat(nilai1),
      parseFloat(nilai2),
      parseFloat(nilai3),
      parseFloat(nilai4),
    ];
    const terkecil = Math.min(...angka);

    // Navigasi ke halaman hasil dengan membawa data
    navigation.navigate('Result', { nilaiTerkecil: terkecil });
  };

  const handleReset = () => {
    setNilai1('');
    setNilai2('');
    setNilai3('');
    setNilai4('');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 🧭 KeyboardAvoidingView membuat form naik saat keyboard aktif */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80} // 🔹 jarak tambahan agar pas (bisa diatur)
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formWrapper}>
            <Text style={styles.header}>.123(Min)</Text>
            <Text style={styles.title}>Aplikasi Pencarian Nilai Terkecil</Text>
            <Text style={styles.subtitle}>Masukkan Nilai :</Text>

            {/* Input Nilai 1 */}
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nilai 1"
              keyboardType="numeric"
              value={nilai1}
              onChangeText={setNilai1}
            />

            {/* Input Nilai 2 */}
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nilai 2"
              keyboardType="numeric"
              value={nilai2}
              onChangeText={setNilai2}
            />

            {/* Input Nilai 3 */}
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nilai 3"
              keyboardType="numeric"
              value={nilai3}
              onChangeText={setNilai3}
            />

            {/* Input Nilai 4 */}
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nilai 4"
              keyboardType="numeric"
              value={nilai4}
              onChangeText={setNilai4}
            />

            {/* Tombol Cari Nilai Terkecil */}
            <TouchableOpacity style={styles.button} onPress={handleCariTerkecil}>
              <Text style={styles.buttonText}>Cari </Text>
              <MaterialIcons name="search" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Tombol Reset */}
            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.buttonText}>Reset </Text>
              <MaterialIcons name="autorenew" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Tombol Logout */}
            <TouchableOpacity style={[styles.button, styles.backButton]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Logout </Text>
              <MaterialIcons name="logout" size={20} color="#fff" />
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// === Style Desain Halaman ===
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 40, 
    paddingBottom: 60,
  },

  formWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1aab4e',
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14488e',
    marginBottom: 50,
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center'
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    width: '100%',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#1aab4e',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
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
