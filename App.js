import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return <WebView source={{ uri: "https://shop-list-rho.vercel.app/" }} />;
}
