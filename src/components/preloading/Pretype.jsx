import React from 'react'
import Typewriter from "typewriter-effect";

const Pretype = () => {
  return (
    <Typewriter
      options={{
        strings: [
            "while (alive) {\
                <br/>&emsp;&emsp;eat();\<br/>&emsp;&emsp;sleep();\<br/>&emsp;&emsp;code();\<br/>&emsp;&emsp;repeat();\<br/>};",
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
        delay: 15,
      }}
    />
  )
}

export default Pretype
