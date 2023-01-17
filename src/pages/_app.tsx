import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { datadogRum } from '@datadog/browser-rum';

export default function App({ Component, pageProps }: AppProps) {

  datadogRum.init({
    applicationId: '1b306aaa-a19c-4b94-b835-c799adb4a241',
    clientToken: 'pub67debd9629696b11f68a618da7d36476',
    site: 'datadoghq.com',
    service: 'govmart-fe',

    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input'
  });

  datadogRum.startSessionReplayRecording();

  return <Component {...pageProps} />
}
