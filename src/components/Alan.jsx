import React, { useContext, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

import { fetchToken} from '../utils';
import { ColorModeContext } from '../utils/ToggleColorMode';

const useAlan = () => {

  const { setMode } =  useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
        key: '57d6f25349ca8deaf47a4e37bfc596c22e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({command, mode}) => {
          if (command === 'changeMode') {
            if (mode ==='light') {
              setMode('light');
            } else {
              setMode('dark');
            }
          } else if (command === 'login') {
            fetchToken();
          } else if (command === 'logout') {
            localStorage.clear();
            window.location.href = '/';
          }


        }
    });
  }, []);

}

export default useAlan;