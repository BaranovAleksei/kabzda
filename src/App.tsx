import React, {useState} from 'react';
import './App.css';

import {Accordion} from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff'
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";
import { Select } from "./components/Select/Select";

function App() {

  let [ ratingValue, setRatingvalue ] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(true);

  let [value, setValue] = useState<number>(1)

  return (
      <div className='overlayApp'>
        <h1>This is SPARTA</h1>
        <hr/>
        <Accordion title = {'MENU'}
                   collapsed = { accordionCollapsed }
                   onChange = { () => {setAccordionCollapsed(!accordionCollapsed)}}
                   items = {[ {title: 'MAHA', value: 1},
                            {title: 'MIHA', value: 2},
                            {title: 'Piha', value: 3},
                            {title: 'Soha', value: 4} ]}
                   onClick={ x => x}
                   />
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

        <Select items = {[{title: 'Minsk', value: 1},
                          {title: 'Moskow', value: 2},
                          {title: 'Warzawa', value: 3},
                          {title: 'Kiev', value: 4} ] }
                value = { value }
                onChange = { setValue }

        />

        <hr/>
    </div>
  );
}

export default App;
