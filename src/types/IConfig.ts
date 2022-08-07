export interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
interface IConfig {
  environment: string;
  apiUrl: IFirebaseConfig;
  rootLink: string;
}
export default IConfig;
