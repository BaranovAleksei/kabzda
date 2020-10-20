import React, {useState} from 'react';
import { Accordion } from './Accordion';
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion title={'Menu'} onChange={callback } collapsed={ true }/>;
export const UncollapsedMode = () => <Accordion title={'Menu'} onChange={callback } collapsed={ false }/>;

export const  ModeChanging = () => {
  const[ value, setValue ] = useState<boolean> (true) ;
  return <Accordion title={'Users'} collapsed={ value } onChange = { () => setValue( !value ) }/>
}