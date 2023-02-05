import {AppRegistry, StatusBar, SafeAreaView} from "react-native";
import App from "./App";
import {name as appName} from "./app.json";

const AppContainer = () => {
  return (
    <>
      <StatusBar backgroundColor={"black"} />
      <App />
    </>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
