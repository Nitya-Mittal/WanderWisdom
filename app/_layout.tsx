 import { Stack } from "expo-router";


import { useState } from "react";
import { CreateTripContext } from './../context/CreateTripContext';

export default function RootLayout() {
  const [tripData, setTripData] = useState([]);

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false
        
       }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}

