import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.autotrics.app',
  appName: 'Autotrics',
  webDir: 'dist',

  android: {
    useLegacyBridge: true,
  },

  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"],
    },
  },
};

export default config;