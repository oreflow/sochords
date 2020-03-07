import * as React from 'react';

import {SchordService} from './service/schord_service';
import theme from './theme';

const schordService = new SchordService();

export const state = {
  schordService,
  theme,
};

export const SchordContext = React.createContext(state);
