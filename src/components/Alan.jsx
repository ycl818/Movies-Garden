import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const Alan = () => {
  useEffect(() => {
    alanBtn({
        key: '57d6f25349ca8deaf47a4e37bfc596c22e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);
  
  return (
    <div>Alan</div>
  )
}

export default Alan