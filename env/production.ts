import IConfig from '../src/types/IConfig';
import { firebaseConfigProduction } from '../src/env';

const ProductionEnvironment: IConfig = {
  environment: 'production',
  apiUrl: firebaseConfigProduction,
  rootLink: '',
};
export default ProductionEnvironment;
