import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    function loadResourcesAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 3000);
      async function loadResourcesAndDataAsync() {
        try {
          await Font.loadAsync({
            Kanit: require("../assets/fonts/Kanit-ExtraBold.ttf"),
            "Kanit-Bold": require("../assets/fonts/Kanit-Bold.ttf"),
          });
        } catch (e) {
          console.warn(e);
        } finally {
          setIsLoadingComplete(true);
        }
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
