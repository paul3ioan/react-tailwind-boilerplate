import { RootState } from '..';

export const exampleLoadingSelector = (state: RootState): boolean => state.example.loading;

// const marketProdcutsSelectors = marketProductsAdapter.getSelectors(( state: RootState) => state.marketProducts);
