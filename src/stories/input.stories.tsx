import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
  title: 'input'
};


// Uncontrolled input

export const UncontrolledInput = () => <input />;

export const UncontrolledInputWithTrackValue = () => {
  const [value, setValue ] = useState('');
  const ONCHANGE = ( event: ChangeEvent<HTMLInputElement> ) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  }

  return <> <input onChange={ ONCHANGE }/> - { value } </>;
};

export const UncontrolledInputWithTrackValueByButtonPress = () => {
  const [value, setValue ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return <> <input ref = {inputRef}/> <button onClick = { save } > save </button> - actual value: { value } </>;
};

// Controlled input

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')

  const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const actualValue = event.currentTarget.value;
    setParentValue(actualValue);
  }
  return <input value = { parentValue } onChange={ onChange }/>
};


export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true)

  const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setParentValue(event.currentTarget.checked);
  }
  return <input type='checkbox' checked = { parentValue }  onChange={ onChange }/>
};

export const ControlledSelected = () => {
  const [parentValue, setParentValue] = useState<string | undefined >(undefined)

  const onChange = ( event: ChangeEvent<HTMLSelectElement> ) => {
    setParentValue(event.currentTarget.value);
  }
  return <select value={parentValue} onChange={onChange}>
    <option value='0'>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moskow</option>
    <option value="3">Kiev</option>
  </select>
};


