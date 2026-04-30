import { ExpoRoot } from 'expo-router';
import { registerRootComponent } from 'expo';
export function App() {
// @ts-ignore
const ctx = require.context('./app');
return <ExpoRoot context={ctx} />;
}
registerRootComponent(App);
/**
* O // @ts-ignore é um comentário de diretiva do TypeScript.
* No React Native — que utiliza o TypeScript como padrão — ele
* serve para instruir o compilador a ignorar qualquer erro de
* tipagem na linha imediatamente seguinte, permitindo que o código
* seja compilado mesmo com inconsistências nos tipos.
*/