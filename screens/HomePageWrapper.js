import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IPPTtrainer from "./IPPTtrainer";
import HomePage from "./HomePage";
import UploadScores from "./UploadScores";
import BookIPPT from "./BookIPPT";
import HealthCheckUp from "./HealthCheckUp";
import TrainerRun from "./TrainerRun";
import TrainerGuides from "./TrainerGuides";
import TrainerPushUp from "./TrainerPushUp";
import TrainerSitUp from "./TrainerSitUp";
import UploadPushUp from "./UploadPushUp";
import UploadSitUp from "./UploadSitUp";
import UploadRun from "./UploadRun";
import SitUpGuide from "./sitUpGuide";
import PushUpGuide from "./pushUpGuide";
import RunGuide from "./runGuide";

const Stack = createNativeStackNavigator();

function HomePageWrapper() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IPPT Trainer"
        component={IPPTtrainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadScores"
        component={UploadScores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookIPPT"
        component={BookIPPT}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HealthCheckUp"
        component={HealthCheckUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainerRun"
        component={TrainerRun}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainerPushUp"
        component={TrainerPushUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainerSitUp"
        component={TrainerSitUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrainerGuides"
        component={TrainerGuides}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPushUp"
        component={UploadPushUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadSitUp"
        component={UploadSitUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadRun"
        component={UploadRun}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SitUpGuide"
        component={SitUpGuide}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PushUpGuide"
        component={PushUpGuide}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RunGuide"
        component={RunGuide}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomePageWrapper;
