import 'package:flutter_test/flutter_test.dart';
import 'package:peerval_splash_demo/main.dart';

void main() {
  testWidgets('renders Peerval login preview', (tester) async {
    await tester.pumpWidget(const PeervalSplashDemo());

    expect(find.text('Peerval'), findsOneWidget);
    expect(find.text('Ingresar'), findsOneWidget);
    expect(
      find.text('Splash creado con flutter_native_splash'),
      findsOneWidget,
    );
  });
}
