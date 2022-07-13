import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './SuperRadion.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };

  const mappedOptions: any[] = options ? options.map((option, index) => (
        <label key={name + '-' + index} className={style.label}>
          <input
            type={'radio'}
            name={name}
            value={option}
            checked={option === value}
            onChange={onChangeCallback}
            className={style.radio}
          />
          {option}
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio
