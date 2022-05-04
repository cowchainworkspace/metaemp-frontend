import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { generalActions } from 'store/general';

const allActions = {
  ...generalActions,
};

//eslint-disable-next-line
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
