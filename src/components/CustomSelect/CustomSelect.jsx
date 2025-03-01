import Select from 'react-select';
import css from './CustomSelect.module.css';
import { useState } from 'react';

const customStyles = isOpen => ({
  control: provided => ({
    ...provided,
    height: '44px',
    padding: '12px 16px',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    borderRadius: '12px',
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
    '&:focus': {
      borderColor: 'transparent',
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      borderColor: 'transparent',
      boxShadow: 'none',
      outline: 'none',
    },
  }),
  menu: provided => ({
    ...provided,
    padding: '14px 8px 14px 18px',
    background: '#ffffff',
    color: '#8d929a',
    borderRadius: '12px',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#DADDE1',
      borderRadius: '10px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 0,
    marginBottom: '8px',
    backgroundColor: 'transparent',
    color: state.isSelected ? '#101828' : '#8D929A',
    cursor: 'pointer',
    '&:hover': {
      color: '#101828',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),
  singleValue: provided => ({
    ...provided,
    margin: 0,
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 0,
    marginTop: '0',
    color: '#101828',
    fontSize: '16px',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1)',
    '&:hover': {
      color: '#101828',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#101828',
  }),
});

function CustomSelect({ options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Select
      className={css.fieldSelect}
      classNamePrefix="select"
      options={options}
      styles={customStyles(isOpen)}
      components={{ IndicatorSeparator: () => null }}
      placeholder={placeholder}
      onMenuOpen={() => setIsOpen(true)}
      onMenuClose={() => setIsOpen(false)}
    />
  );
}

export default CustomSelect;
