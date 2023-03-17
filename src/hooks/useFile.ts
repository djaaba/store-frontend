import React from 'react'

import { useValidation } from './useValidation';

export const useFile = (initialValue: any, validation: any) => {
    const [value, setValue] = React.useState<string>('');
    const [isDirty, setDirty] = React.useState<boolean>(false);

    const valid = useValidation(value, validation)

    const onChange = (e: any) => {
        setValue(e.target.files[0])
    }

    const onBlur = (e: any) => {
        setDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}