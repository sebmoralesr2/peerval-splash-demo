import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const VERDE = "#4F7443";
const VERDE_OSCURO = "#3F5F36";
const VERDE_CLARO = "#CDEFC1";
const BLANCO = "#FFFFFF";
const TEXTO = "#202124";
const GRIS = "#6B7280";

export default function HomeScreen() {
  const [mostrandoSplash, setMostrandoSplash] = useState(true);
  const [splashActual, setSplashActual] = useState(0);

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.7)).current;
  const translateY = useRef(new Animated.Value(24)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    iniciarSplash();
  }, [splashActual]);

  const iniciarSplash = () => {
    setMostrandoSplash(true);

    opacity.setValue(0);
    scale.setValue(0.7);
    translateY.setValue(24);
    progress.setValue(0);
    float.setValue(0);

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: 1,
          duration: 1100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 1100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 750,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: 3200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }),
    ]).start();

    setTimeout(() => {
      setMostrandoSplash(false);
    }, 3500);
  };

  const siguienteSplash = () => {
    setSplashActual((prev) => (prev + 1) % 4);
  };

  const barra = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const flotar = float.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -16],
  });

  if (mostrandoSplash) {
    if (splashActual === 0) {
      return (
        <SplashUno
          opacity={opacity}
          scale={scale}
          translateY={translateY}
          barra={barra}
          flotar={flotar}
        />
      );
    }

    if (splashActual === 1) {
      return (
        <SplashDos
          opacity={opacity}
          scale={scale}
          translateY={translateY}
          barra={barra}
          flotar={flotar}
        />
      );
    }

    if (splashActual === 2) {
      return (
        <SplashTres
          opacity={opacity}
          scale={scale}
          translateY={translateY}
          barra={barra}
          flotar={flotar}
        />
      );
    }

    return (
      <SplashCuatro
        opacity={opacity}
        scale={scale}
        translateY={translateY}
        barra={barra}
        flotar={flotar}
      />
    );
  }

  return (
    <LoginMockup
      splashActual={splashActual}
      onNext={siguienteSplash}
      onRepeat={iniciarSplash}
    />
  );
}

function UserIcon({
  size = 58,
  color = VERDE,
}: {
  size?: number;
  color?: string;
}) {
  return <FontAwesome name="user" size={size} color={color} />;
}

function SplashUno({
  opacity,
  scale,
  translateY,
  barra,
  flotar,
}: any) {
  return (
    <LinearGradient
      colors={[VERDE_OSCURO, VERDE, "#5E8750"]}
      style={styles.splashContainer}
    >
      <Animated.View
        style={[styles.circleOne, { transform: [{ translateY: flotar }] }]}
      />

      <Animated.View
        style={[styles.circleTwo, { transform: [{ translateY: flotar }] }]}
      />

      <Animated.View style={styles.bottomWhiteShape} />

      <Animated.View
        style={[
          styles.centerContent,
          {
            opacity,
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <View style={styles.logoOuter}>
          <View style={styles.logoInner}>
            <UserIcon size={58} color={VERDE} />
          </View>
        </View>

        <Text style={styles.splashTitle}>Peerval</Text>
        <Text style={styles.splashSubtitle}>
          Preparando una experiencia simple, limpia y natural
        </Text>

        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: barra }]} />
        </View>

        <Text style={styles.loadingText}>Splash 1 de 4 · Cargando...</Text>
      </Animated.View>
    </LinearGradient>
  );
}

function SplashDos({
  opacity,
  scale,
  translateY,
  barra,
  flotar,
}: any) {
  return (
    <View style={styles.splashTwoContainer}>
      <View style={styles.splashTwoTop} />
      <View style={styles.splashTwoBottom} />

      <Animated.View
        style={[
          styles.userCard,
          {
            opacity,
            transform: [{ scale }, { translateY: flotar }],
          },
        ]}
      >
        <UserIcon size={78} color={VERDE} />
      </Animated.View>

      <Animated.View
        style={[
          styles.splashTwoTextBox,
          {
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.splashTwoTitle}>Peerval</Text>
        <Text style={styles.splashTwoSubtitle}>
          Diseño fresco, claro y orientado a una experiencia de usuario
          confiable.
        </Text>

        <View style={styles.progressContainerDark}>
          <Animated.View style={[styles.progressBarDark, { width: barra }]} />
        </View>

        <Text style={styles.loadingTextDark}>Splash 2 de 4 · Iniciando...</Text>
      </Animated.View>
    </View>
  );
}

function SplashTres({
  opacity,
  scale,
  translateY,
  barra,
  flotar,
}: any) {
  return (
    <LinearGradient
      colors={["#F4FAF1", "#FFFFFF"]}
      style={styles.splashThreeContainer}
    >
      <Animated.View
        style={[
          styles.splashThreeBlob,
          { transform: [{ translateY: flotar }] },
        ]}
      />

      <Animated.View
        style={[
          styles.splashThreeContent,
          {
            opacity,
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <View style={styles.splashThreeIconBox}>
          <UserIcon size={70} color={BLANCO} />
        </View>

        <Text style={styles.splashThreeTitle}>Peerval</Text>
        <Text style={styles.splashThreeSubtitle}>
          Una entrada minimalista con paleta verde y transición suave.
        </Text>

        <View style={styles.splashThreeDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.progressContainerLight}>
          <Animated.View style={[styles.progressBarGreen, { width: barra }]} />
        </View>

        <Text style={styles.loadingTextGreen}>
          Splash 3 de 4 · Preparando...
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

function SplashCuatro({
  opacity,
  scale,
  translateY,
  barra,
  flotar,
}: any) {
  return (
    <View style={styles.splashFourContainer}>
      <Animated.View
        style={[
          styles.splashFourCircleOne,
          { transform: [{ translateY: flotar }] },
        ]}
      />

      <Animated.View style={styles.splashFourCircleTwo} />

      <Animated.View
        style={[
          styles.splashFourCard,
          {
            opacity,
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <View style={styles.splashFourLogo}>
          <UserIcon size={62} color={BLANCO} />
        </View>

        <Text style={styles.splashFourTitle}>Peerval</Text>
        <Text style={styles.splashFourSubtitle}>
          Seguridad, acceso y experiencia visual en una sola pantalla.
        </Text>

        <View style={styles.progressContainerLight}>
          <Animated.View style={[styles.progressBarGreen, { width: barra }]} />
        </View>

        <Text style={styles.loadingTextGreen}>
          Splash 4 de 4 · Finalizando...
        </Text>
      </Animated.View>
    </View>
  );
}

function LoginMockup({
  splashActual,
  onNext,
  onRepeat,
}: {
  splashActual: number;
  onNext: () => void;
  onRepeat: () => void;
}) {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginWelcome}>Bienvenido</Text>
      </View>

      <View style={styles.loginSheet}>
        <Text style={styles.badge}>Splash visto: {splashActual + 1} de 4</Text>

        <Text style={styles.loginTitle}>Inicio de Sesión</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Correo</Text>
          <TextInput style={styles.inputUnderline} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Contraseña</Text>

          <View style={styles.passwordRow}>
            <TextInput style={styles.inputPassword} secureTextEntry />
            <Text style={styles.eyeIcon}>◉̶</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.mainButton} onPress={onNext}>
          <Text style={styles.mainButtonText}>Siguiente Splash</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onRepeat}>
          <Text style={styles.repeatText}>Repetir este Splash</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          No tienes cuenta? <Text style={styles.registerLink}>Registrate</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  centerContent: {
    alignItems: "center",
    paddingHorizontal: 34,
  },
  circleOne: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(255,255,255,0.11)",
    top: 85,
    right: -80,
  },
  circleTwo: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "rgba(205,239,193,0.22)",
    bottom: 155,
    left: -55,
  },
  bottomWhiteShape: {
    position: "absolute",
    bottom: -95,
    width: "120%",
    height: 230,
    backgroundColor: BLANCO,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    opacity: 0.14,
  },
  logoOuter: {
    width: 158,
    height: 158,
    borderRadius: 79,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.32)",
    marginBottom: 26,
  },
  logoInner: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: BLANCO,
    alignItems: "center",
    justifyContent: "center",
  },
  splashTitle: {
    fontSize: 44,
    fontWeight: "900",
    color: BLANCO,
    marginBottom: 8,
    textAlign: "center",
  },
  splashSubtitle: {
    fontSize: 16,
    color: "#EAF4E5",
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 30,
  },
  progressContainer: {
    width: 265,
    height: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.25)",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: VERDE_CLARO,
    borderRadius: 999,
  },
  loadingText: {
    color: "#EAF4E5",
    marginTop: 14,
    fontSize: 14,
    fontWeight: "700",
  },

  splashTwoContainer: {
    flex: 1,
    backgroundColor: BLANCO,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splashTwoTop: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "50%",
    backgroundColor: VERDE,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  splashTwoBottom: {
    position: "absolute",
    bottom: -70,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#EEF7EA",
  },
  userCard: {
    width: 165,
    height: 165,
    borderRadius: 42,
    backgroundColor: BLANCO,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 8,
    marginBottom: 38,
  },
  splashTwoTextBox: {
    alignItems: "center",
    paddingHorizontal: 38,
  },
  splashTwoTitle: {
    fontSize: 42,
    fontWeight: "900",
    color: TEXTO,
    marginBottom: 8,
  },
  splashTwoSubtitle: {
    fontSize: 16,
    color: GRIS,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 28,
  },
  progressContainerDark: {
    width: 260,
    height: 12,
    borderRadius: 999,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressBarDark: {
    height: "100%",
    backgroundColor: VERDE,
    borderRadius: 999,
  },
  loadingTextDark: {
    color: VERDE,
    marginTop: 14,
    fontSize: 14,
    fontWeight: "800",
  },

  splashThreeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splashThreeBlob: {
    position: "absolute",
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: VERDE_CLARO,
    opacity: 0.55,
    top: -95,
    left: -100,
  },
  splashThreeContent: {
    alignItems: "center",
    paddingHorizontal: 38,
  },
  splashThreeIconBox: {
    width: 126,
    height: 126,
    borderRadius: 63,
    backgroundColor: VERDE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 7,
  },
  splashThreeTitle: {
    fontSize: 42,
    fontWeight: "900",
    color: VERDE_OSCURO,
    marginBottom: 8,
  },
  splashThreeSubtitle: {
    fontSize: 16,
    color: GRIS,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 24,
  },
  splashThreeDots: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: VERDE,
  },
  progressContainerLight: {
    width: 260,
    height: 12,
    borderRadius: 999,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressBarGreen: {
    height: "100%",
    backgroundColor: VERDE,
    borderRadius: 999,
  },
  loadingTextGreen: {
    color: VERDE_OSCURO,
    marginTop: 14,
    fontSize: 14,
    fontWeight: "800",
  },

  splashFourContainer: {
    flex: 1,
    backgroundColor: "#EEF7EA",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splashFourCircleOne: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: VERDE,
    top: -75,
    right: -70,
  },
  splashFourCircleTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: VERDE_CLARO,
    bottom: -55,
    left: -45,
  },
  splashFourCard: {
    width: "82%",
    backgroundColor: BLANCO,
    borderRadius: 38,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 22,
    elevation: 8,
  },
  splashFourLogo: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: VERDE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  splashFourTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: VERDE_OSCURO,
    marginBottom: 8,
  },
  splashFourSubtitle: {
    fontSize: 15,
    color: GRIS,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 26,
  },

  loginContainer: {
    flex: 1,
    backgroundColor: VERDE,
  },
  loginHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginWelcome: {
    color: BLANCO,
    fontSize: 36,
    fontWeight: "800",
  },
  loginSheet: {
    backgroundColor: BLANCO,
    minHeight: "54%",
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    paddingHorizontal: 38,
    paddingTop: 38,
    paddingBottom: 26,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF7EA",
    color: VERDE,
    fontWeight: "800",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 18,
    overflow: "hidden",
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: TEXTO,
    marginBottom: 34,
  },
  inputGroup: {
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2B2B2B",
    marginBottom: 14,
  },
  inputUnderline: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#2B2B2B",
    paddingVertical: 6,
    fontSize: 17,
  },
  passwordRow: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#2B2B2B",
    flexDirection: "row",
    alignItems: "center",
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 6,
    fontSize: 17,
  },
  eyeIcon: {
    fontSize: 26,
    color: "#BDBDBD",
    marginRight: 12,
  },
  mainButton: {
    backgroundColor: VERDE_CLARO,
    borderRadius: 9,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 35,
  },
  mainButtonText: {
    color: VERDE,
    fontSize: 20,
    fontWeight: "900",
  },
  repeatText: {
    textAlign: "center",
    color: GRIS,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 18,
  },
  registerText: {
    marginTop: 26,
    fontSize: 19,
    textAlign: "center",
    color: TEXTO,
    fontWeight: "800",
  },
  registerLink: {
    color: VERDE,
    fontWeight: "900",
  },
});