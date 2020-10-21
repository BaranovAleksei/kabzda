import React from 'react';
import { UncontrolledRating, RatingValueType } from './UncontrolledRating';
import { action } from '@storybook/addon-actions';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating
};

const callback = action('rating changed inside rating');

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue = { 0 } onChange = {callback}/>;
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue = { 1 } onChange = {callback}/>;
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue = { 2 } onChange = {callback}/>;
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue = { 3 } onChange = {callback}/>;
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue = { 4 } onChange = {callback}/>;
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue = { 5 } onChange = {callback}/>;



