This solution uses `Linking.getInitialURL` to handle the initial deep link and then uses `Linking.addEventListener` to handle subsequent deep links. This ensures that deep links are handled correctly regardless of whether the app is launched from a deep link or already running.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      setInitialUrl(initialUrl);
    };
    handleUrl();
  }, []);

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      setUrl(event.url);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      //Handle initial deep link
      console.log('Initial URL:', initialUrl);
      // Perform actions based on initialUrl
    }
  }, [initialUrl]);

  useEffect(() => {
    if (url) {
      //Handle subsequent deep links
      console.log('Subsequent URL:', url);
      // Perform actions based on url
    }
  }, [url]);

  return (
    <View>
      <Text>App is running</Text>
    </View>
  );
}
```