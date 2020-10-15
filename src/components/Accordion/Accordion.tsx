import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: ( ) => void
};

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
};


function Accordion (props: AccordionPropsType) {
  return <div>
      <AccordionTitle title={props.title}
                      onChange={props.onChange}
      />
      { !props.collapsed && <AccordionBody />}
  </div>

};

function AccordionTitle (props: AccordionTitlePropsType) {
  return  (<h2 onClick={props.onChange}> ---{props.title}--- </h2>)
};

type  AccordionBodyPropsType = {

}

function AccordionBody (props: AccordionBodyPropsType){
  return ( <ul>
    <li> меню 1 </li>
    <li> меню 2 </li>
    <li> меню 3 </li>
    <li> меню 4 </li>
    <li> меню 5 </li>
  </ul>);
};

export default Accordion;


