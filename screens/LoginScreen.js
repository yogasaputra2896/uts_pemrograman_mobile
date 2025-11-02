// Import modul React
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Komponen utama LoginScreen
export default function LoginScreen({ navigation }) {

  // State untuk menampung input username dan password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Dapatkan lebar layar untuk menyesuaikan ukuran logo 
  const screenWidth = Dimensions.get('window').width;

  // Fungsi login sederhana untuk validasi username dan password
  const handleLogin = () => {
    if (username === 'yogasaputra' && password === '411222034') {
      navigation.navigate('Input'); 
    } else {
      Alert.alert('Login Gagal', 'Username atau password salah!'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // agar form naik saat keyboard muncul
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled" // agar input tetap aktif saat keyboard terbuka
        >
          {/* === Logo === */}
          <View style={styles.logoWrapper}>
            <Image
              source={require('../assets/logo_undira.png')} // lokasi file logo
              style={[
                styles.logo,
                {
                  width: screenWidth * 0.8,   // ukuran proporsional sesuai layar
                  height: screenWidth * 0.35,
                },
              ]}
              resizeMode="contain" // agar gambar tidak terpotong
            />
          </View>

          {/* === Form login === */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login Aplikasi UTS</Text>

            {/* Input Username */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="#999"
            />

            {/* Input Password */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry // menyembunyikan teks password
              placeholderTextColor="#999"
            />

            {/* Tombol Login */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Masuk </Text>
              <MaterialIcons name="login" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Keterangan kecil di bawah form */}
            <Text style={styles.hint}>&copy; Universitas Dian Nusantara</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// === Bagian Style  ===
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  logoWrapper: {
    alignItems: 'center',
    marginTop: -150, 
    marginBottom: 55, 
  },

  formContainer: {
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14488e', 
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
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

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

  hint: {
    color: '#777',
    marginTop: 10,
    fontSize: 13,
  },
  
});
