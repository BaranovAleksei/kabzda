import React, {useState} from 'react';
import s from './Select.module.css';

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: number
  onChange: (value: number) => void
  items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

  const selectedItems = props.items.find(el => el.value === props.value);

  const [active, setActive] = useState <boolean>( false)

  const selectCollapsed = () => { setActive( !active ) };

  const onItemClick = (value: number) => {
    props.onChange(value);
    selectCollapsed()
  };

  return (
    <div>
      <h3 onClick={ selectCollapsed }>--- {selectedItems && selectedItems.title} ---</h3>
      <div className={s.overlaySelect}> {
        active && props.items.map( (el, index) => <div key = {el.value}
                                                       onClick  = { () => onItemClick(el.value) }
                                                  >{el.title}</div>) }
      </div>
    </div>

  )}