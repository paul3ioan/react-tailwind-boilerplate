import IConfig from '../src/types/IConfig';
import { firebaseConfigDevelop } from '../src/env';

const AcceptanceEnvironment: IConfig = {
  environment: 'acceptance',
  apiUrl: firebaseConfigDevelop,
  rootLink: '',
};
export default AcceptanceEnvironment;
