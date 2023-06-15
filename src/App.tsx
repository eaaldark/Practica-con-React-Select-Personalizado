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
  control: (base) => {
    console.clear();
    console.log(base);

    const newBase = {
      ...base,
      '&:hover': { borderColor: 'hsl(0, 0%, 100%)' },
      backgroundColor: '#F8F8F8',
      borderStyle: 'none',
      borderRadius: 30,
      borderColor: 'hsl(0, 0%, 100%)',
      boxShadow: '0px 5px 10px hsl(0, 0%, 88%);',
      minHeight: '2.5rem',
    };
    console.log(newBase);

    return newBase;
  },
};

export default function App() {
  return (
    <div>
      <Select options={options} styles={Styles} isClearable={true} />
    </div>
  );
}
