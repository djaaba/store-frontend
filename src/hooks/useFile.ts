import React from 'react'

import { useValidation } from './useValidation';

export const useFile = (initialValue: any, validation: any) => {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setDirty] = React.useState<boolean>(false);

    const valid = useValidation(value, validation)

    const onChange = (e: any) => {
        setValue(e.target.files[0])
    }

    const onBlur = (e: any) => {
        setDirty(true)
    }

    const reset = (e: any) => {
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