import React from 'react';

function SkipLink(props) {
  const [focused,setFocused] = React.useState(false);

  function pressSkip(){
    skipToContent()
  }

  function pressKey(e) {
    if(e.keycode == 13){
      skipToContent()
    }
  }

  function skipToContent() {
    document.querySelector('./o-headercontainer').nextElementSibling.setAttribute('tabindex', '0');
    document.querySelector('./o-headercontainer').nextElementSibling.focus()
  }

  return (
    <h1>Hello, World</h1>
  )
}

export default SkipLink;
