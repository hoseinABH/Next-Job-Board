import { MetadataRoute } from 'next';
// Configs
import * as appConfig from '@/config/app';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appConfig.appData.appName,
    short_name: appConfig.appData.appName,
    description: appConfig.appData.appDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
