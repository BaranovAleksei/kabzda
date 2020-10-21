import React, {useState} from 'react';
import { UncontrolledOnOff } from './UncontrolledOnOff';
import { action } from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'UncontrolledOnOff button',
  component: UncontrolledOnOff
};

const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff defaultOn={ true }  onChange = { callback }/>
export const OffMode = () => <UncontrolledOnOff defaultOn={ false } onChange = { callback }/>

