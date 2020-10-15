import React, {useState} from 'react';


type AccordionPropsType = {
  title: string
  // collapsed: boolean
};

// type AccordionBodyPropsType = {
//   value: number
// };

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
};

function UncontrolledAccordion(props: AccordionPropsType) {

  let [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <AccordionTitle title={ props.title} onClick = { () => { setCollapsed( !collapsed ) } } />
      { !collapsed && <AccordionBody/> }
    </div>
  )

};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (<h2 onClick={ () => { props.onClick() } }> ---{props.title}--- </h2>)
};

function AccordionBody( ) {
  return (<ul>
    <li> меню 1</li>
    <li> меню 2</li>
    <li> меню 3</li>
    <li> меню 4</li>
    <li> меню 5</li>
  </ul>);
};

export default UncontrolledAccordion;