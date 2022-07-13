import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import style from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any = options?.map((option, index) => <option className={style.option} key={index}>{option}</option>)

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.currentTarget.value)
  };

  const finalClassName = `${style.select} ${className ? className : ''}`
  return (
    <select className={finalClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
