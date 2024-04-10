import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'shell': 'http://localhost:4200/remoteEntry.json',
  'mfe1': 'http://localhost:4200/remoteEntry.json',
  'mfe3': 'http://localhost:4203/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
