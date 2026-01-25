import React, { useId } from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { IconToggleLeft, IconToggleRight } from '@pittorica/icons-react';
import { Text } from '@pittorica/text-react';

import {
  switchContainer,
  switchHiddenInput,
  switchIndicatorRecipe,
  switchLabelStyle,
} from './switch.css.js';

export type SwitchContainerProps = Omit<
  BoxProps,
  'as' | 'children' | 'onChange' | 'onSelect' | 'onError'
>;

export type SwitchProps = SwitchContainerProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    label?: React.ReactNode;
    hasError?: boolean;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
  };

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    label,
    hasError = false,
    className,
    checked = false,
    disabled = false,
    id,
    onChange,
    value,
    defaultValue,
    name,
    form,
    ...containerProps
  } = props;

  const inputId = id || useId();

  const indicatorClass = switchIndicatorRecipe({
    error: hasError,
    disabled: disabled,
  });

  const renderIcon = () => {
    const iconProps = { width: '2rem' };

    if (checked) {
      return <IconToggleRight {...iconProps} />;
    }
    return <IconToggleLeft {...iconProps} />;
  };

  return (
    <Box
      as="label"
      htmlFor={inputId}
      className={clsx(switchContainer, className)}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      {...containerProps}
    >
      <input
        type="checkbox"
        role="switch"
        id={inputId}
        className={switchHiddenInput}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        name={name}
        form={form}
      />

      <div className={indicatorClass} aria-hidden="true">
        {renderIcon()}
      </div>

      {label && (
        <Text as="span" className={switchLabelStyle}>
          {label}
        </Text>
      )}
    </Box>
  );
};
