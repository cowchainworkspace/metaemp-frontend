import { RootState } from 'store';
import { Connectors } from 'store/general';

export const connectorsSelector = (state: RootState): Connectors => {
  return state.general;
};
