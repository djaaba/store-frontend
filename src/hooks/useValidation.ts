import React from 'react'

export const useValidation = (value: any, validations: any) => {
    const [isEmpty, setEmpty] = React.useState<boolean>(false)
    const [minLengthError, setMinLengthError] = React.useState<boolean>(false)
    const [emailError, setEmailError] = React.useState<boolean>(false)
    const [inputValid, setInputValid] = React.useState<boolean>(false)
    const [numberError, setNumberError] = React.useState<boolean>(false)

    React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    const EMAIL_REGEXP: RegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                    EMAIL_REGEXP.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'isNumber': 
                    const NUMBER_REGEXP: RegExp = /^\d+$/;
                    NUMBER_REGEXP.test(String(value)) ? setNumberError(false) : setNumberError(true)
                    break;
            }
        }
    }, [value])

    React.useEffect(() => {
        if (isEmpty || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, emailError, numberError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        inputValid,
        numberError
    }
}