import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'eTraze',
  webDir: 'www',
  server: {
    androidScheme: 'http'
  },  
  plugins: {
    // SplashScreen: {
    //   "launchShowDuration": 0,
    //   "launchAutoHide": true,
    //   "launchFadeOutDuration": 0,
    //   "backgroundColor": "#ffffffff",
    //   "androidSplashResourceName": "splash",
    //   "androidScaleType": "CENTER_CROP",
    //   "showSpinner": true,
    //   "androidSpinnerStyle": "large",
    //   "iosSpinnerStyle": "small",
    //   "spinnerColor": "#999999",
    //   "splashFullScreen": true,
    //   "splashImmersive": true,
    //   "layoutName": "launch_screen",
    //   "useDialog": true
    // }
  }
};




export default config;
