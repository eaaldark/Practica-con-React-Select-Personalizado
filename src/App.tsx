import * as React from 'react';
import './style.css';
import Select, { components, StylesConfig } from 'react-select';
import base from 'react-select/dist/declarations/src/base';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Menu = (props) => {
  return (
    <React.Fragment>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
          <button
            className={'change-data'}
            onClick={props.selectProps.changeOptionsData}
          >
            Change data
          </button>
        </div>
      </components.Menu>
    </React.Fragment>
  );
};

const Styles: StylesConfig = {
  control: (...props) => {
    console.log('holea', props);
  },
};

export default function App() {
  return (
    <div>
      <Select
        options={options}
        components={{ Menu }}
        styles={Styles}
        // theme={(theme) => {
        //   return {
        //     ...theme,
        //     borderRadius: 0,
        //     colors: {
        //       ...theme.colors,
        //       text: 'ffffff',
        //       primary25: 'blue',
        //       primary: '#454654',
        //     },
        //   };
        // }}
      />
    </div>
  );
}
