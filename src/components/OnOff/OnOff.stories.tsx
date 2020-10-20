import React, {useState} from 'react';
import { OnOff } from './OnOff';
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'OnOff button',
  component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={ callback}/>;
export const OffMode = () => <OnOff on={false} onChange={ callback }/>;

export const  ModeChanging = () => {
  const[ value, setValue ] = useState<boolean> (true) ;
  return <OnOff on = { value } onChange = { setValue }/>
}