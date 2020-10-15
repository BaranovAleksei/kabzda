import React, {useState} from 'react';

type PropsType = {
  //on: boolean
}

export function UncontrolledOnOff (props: PropsType) {

  //const on = false;
  console.log('OnOff rendering');
  let [on , setOn] = useState(false);
  console.log ('on: ' + on);

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    background: on ? 'green' : 'white'
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    background: on ? 'white' : 'red'
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    padding: '2px',
    background: on ? 'green' : 'red'
  };

  return (
    <div>
      <div style = {onStyle} onClick = { () => { setOn(true) } }> On </div>
      <div style = {offStyle} onClick = { () => { setOn(false) } }> Off </div>
      <div style = {indicatorStyle}></div>
    </div>
  );
}