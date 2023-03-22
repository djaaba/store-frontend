import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import React from "react";

import styles from "./Dictaphone.module.css";
import { DictaphoneProps } from "./Dictaphone.props";

import { MicrophoneIcon, FontAwesomeIcon } from "../";

export const Dictaphone = ({
    className,
    setText,
    ...props
}: DictaphoneProps): JSX.Element => {
    const [isListening, setIsListening] = React.useState<boolean>(false);

    const { transcript, listening, browserSupportsSpeechRecognition } =
        useSpeechRecognition();

    React.useEffect(() => {
        setText(transcript);
        setIsListening(!isListening);
    }, [transcript]);

    function handleClick() {
        setIsListening(!isListening);
        if (isListening == true) {
            console.log("startListening");
            return SpeechRecognition.startListening();
        }
        console.log("stopListening");
        return SpeechRecognition.stopListening();
    }

    return (
        <div {...props} className={className}>
            <FontAwesomeIcon
                onClick={() => handleClick()}
                className={listening ? styles.on : styles.off}
                icon={MicrophoneIcon}
            />
        </div>
    );
};
