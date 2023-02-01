import {AppRegistry, StatusBar, SafeAreaView} from "react-native";
import App from "./App";
import {name as appName} from "./app.json";

const AppContainer = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <App />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
