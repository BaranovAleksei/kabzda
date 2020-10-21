import React, {useState} from 'react';
import { UncontrolledAccordion } from './UncontrolledAccordion';
import { action } from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
};

export const  ModeChanging = () => {
  return <UncontrolledAccordion title={'Users'} />
}