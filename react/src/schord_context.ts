import * as React from 'react';
import {SchordService} from './schord_service';

const schordService = new SchordService();

export const state = {
  schordService,
};

export const SchordContext = React.createContext(state);
