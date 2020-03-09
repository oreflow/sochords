import * as React from 'react';

import SchordService from 'src/service/schord_service';
import theme from 'src/theme';

const schordService = new SchordService();

export const state = {
  schordService,
  theme,
};

export const SchordContext = React.createContext(state);
