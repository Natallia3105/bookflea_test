'use client';

import { HTMLInputTypeAttribute } from 'react';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

type Props = {
  name: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
};

export const FormInput = ({ inputType, name, placeholder, label }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

  const inputClasses = classNames(
    'border rounded-lg w-full py-3 px-3 border-gray-300 text-gray-700 focus:outline-none focus:shadow-outline placeholder:font-light',
    {
      'border-red-500 mb-2': error,
    },
  );

  return (
    <div className="pb-6 relative">
      <label className="block mb-2 text-black-900">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        className={inputClasses}
        autoFocus
        id={name}
        type={inputType}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className="ml-1 text-red-500 text-xs">{error}</p>}
    </div>
  );
};
