import 'package:flutter/material.dart';

void main() {
  runApp(const PeervalSplashDemo());
}

class PeervalSplashDemo extends StatelessWidget {
  const PeervalSplashDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Peerval',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF4F7443)),
        useMaterial3: true,
      ),
      home: const LoginPreviewPage(),
    );
  }
}

class LoginPreviewPage extends StatelessWidget {
  const LoginPreviewPage({super.key});

  static const _green = Color(0xFF4F7443);
  static const _darkGreen = Color(0xFF3F5F36);
  static const _lightGreen = Color(0xFFCDEFC1);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF4FAF1),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 28),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Spacer(),
              Container(
                width: 126,
                height: 126,
                margin: const EdgeInsets.only(bottom: 28),
                decoration: BoxDecoration(
                  color: _green,
                  borderRadius: BorderRadius.circular(36),
                  boxShadow: [
                    BoxShadow(
                      color: _green.withValues(alpha: 0.28),
                      blurRadius: 30,
                      offset: const Offset(0, 18),
                    ),
                  ],
                ),
                child: const Icon(
                  Icons.groups_rounded,
                  color: Colors.white,
                  size: 70,
                ),
              ),
              const Text(
                'Peerval',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: _darkGreen,
                  fontSize: 46,
                  fontWeight: FontWeight.w900,
                ),
              ),
              const SizedBox(height: 10),
              const Text(
                'Evaluacion entre pares simple, clara y colaborativa.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Color(0xFF4B5563),
                  fontSize: 17,
                  height: 1.35,
                ),
              ),
              const SizedBox(height: 42),
              TextField(decoration: _inputDecoration('Correo')),
              const SizedBox(height: 16),
              TextField(
                obscureText: true,
                decoration: _inputDecoration('Contrasena'),
              ),
              const SizedBox(height: 24),
              FilledButton(
                style: FilledButton.styleFrom(
                  backgroundColor: _green,
                  foregroundColor: Colors.white,
                  minimumSize: const Size.fromHeight(54),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                  ),
                ),
                onPressed: () {},
                child: const Text(
                  'Ingresar',
                  style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800),
                ),
              ),
              const SizedBox(height: 18),
              const Text(
                'Splash creado con flutter_native_splash',
                textAlign: TextAlign.center,
                style: TextStyle(color: _green, fontWeight: FontWeight.w700),
              ),
              const Spacer(),
              Container(
                height: 7,
                margin: const EdgeInsets.only(bottom: 18),
                decoration: BoxDecoration(
                  color: _lightGreen,
                  borderRadius: BorderRadius.circular(999),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  InputDecoration _inputDecoration(String label) {
    return InputDecoration(
      labelText: label,
      filled: true,
      fillColor: Colors.white,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide.none,
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: const BorderSide(color: _green, width: 1.5),
      ),
    );
  }
}
