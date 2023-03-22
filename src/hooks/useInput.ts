import React from 'react'

import { useValidation } from './useValidation';

export const useInput = (initialValue: any, validation: any) => {
    const [value, setValue] = React.useState<string>(initialValue);
    const [isDirty, setDirty] = React.useState<boolean>(false);

    const valid = useValidation(value, validation)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    const reset = () => {
        setValue('')
        setDirty(false)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        reset,
        ...valid
    }
}