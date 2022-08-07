import { createEntityAdapter } from '@reduxjs/toolkit';
import IExample from '../../types/IExample';

const exampleAdapter = createEntityAdapter<IExample>({
  selectId: example => example.id,
});
export default exampleAdapter;
