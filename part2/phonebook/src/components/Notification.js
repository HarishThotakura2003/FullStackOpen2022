import React from 'react'

const Notification = ({notify}) => {
  if(notify.message=={}){return null}
  return(
    <div id={notify.className}>
        {notify.message}
    </div>
  )
}

export default Notification