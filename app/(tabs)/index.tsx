import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const VERDE = "#4F7443";
const VERDE_CLARO = "#CDEFC1";
const BLANCO = "#FFFFFF";
const TEXTO = "#202124";
const GRIS = "#6B7280";

const SPLASH_EXAMPLES = [
  {
    title: "Nativa",
    description: "Configurada con expo-splash-screen desde app.json.",
  },
  {
    title: "Fade",
    description: "Ocultada manualmente despues de 3 segundos con hideAsync().",
  },
];

export default function HomeScreen() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const example = SPLASH_EXAMPLES[exampleIndex];

  const nextExample = () => {
    setExampleIndex((current) => (current + 1) % SPLASH_EXAMPLES.length);
  };

  return (
    <SafeAreaView style={styles.loginScreen}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginWelcome}>Bienvenido</Text>
        <Text style={styles.loginHeaderText}>
          Splash controlada con expo-splash-screen
        </Text>
      </View>

      <View style={styles.loginCard}>
        <Text style={styles.badge}>
          Ejemplo {exampleIndex + 1} de {SPLASH_EXAMPLES.length}
        </Text>
        <Text style={styles.loginTitle}>Inicio de Sesion</Text>
        <Text style={styles.loginHint}>{example.title}</Text>
        <Text style={styles.loginDescription}>{example.description}</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Correo</Text>
          <TextInput style={styles.inputUnderline} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Contrasena</Text>
          <TextInput style={styles.inputUnderline} secureTextEntry />
        </View>

        <Pressable style={styles.mainButton} onPress={nextExample}>
          <Text style={styles.mainButtonText}>Ir al siguiente ejemplo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: VERDE,
  },
  loginHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  loginWelcome: {
    color: BLANCO,
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
  },
  loginHeaderText: {
    color: "#EAF4E5",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 8,
    textAlign: "center",
  },
  loginCard: {
    minHeight: "58%",
    backgroundColor: BLANCO,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    paddingHorizontal: 32,
    paddingTop: 34,
    paddingBottom: 34,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF7EA",
    color: VERDE,
    fontWeight: "900",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 18,
    overflow: "hidden",
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: TEXTO,
  },
  loginHint: {
    color: VERDE,
    fontSize: 17,
    fontWeight: "900",
    marginTop: 8,
  },
  loginDescription: {
    color: GRIS,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: 28,
  },
  inputGroup: {
    marginBottom: 26,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "800",
    color: "#2B2B2B",
    marginBottom: 10,
  },
  inputUnderline: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#2B2B2B",
    paddingVertical: 6,
    fontSize: 17,
  },
  mainButton: {
    backgroundColor: VERDE_CLARO,
    borderRadius: 9,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 12,
  },
  mainButtonText: {
    color: VERDE,
    fontSize: 18,
    fontWeight: "900",
  },
});
