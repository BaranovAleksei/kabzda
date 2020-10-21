import React, {useState} from 'react';
import './App.css';

import {Accordion} from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff'
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";

function App() {

  let [ ratingValue, setRatingvalue ] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(true);

  return (
      <div className='overlayApp'>
        <h1>This is SPARTA</h1>
        <hr/>
        <Accordion title={'MENU'}
                   collapsed={ accordionCollapsed }
                   onChange = { () => {setAccordionCollapsed(!accordionCollapsed)} }/>
        <hr/>
        <Rating value={ ratingValue }
                onClick={ setRatingvalue }/>
        <hr/>
        <UncontrolledOnOff />
        <hr/>
        <OnOff on={switchOn}
               onChange={ () => { setSwitchOn(!switchOn) } } />
        <hr/>
        <UncontrolledAccordion title={'TEBY'} />
        <hr/>
        <UncontrolledRating />
        <hr/>
    </div>
  );
}

export default App;
