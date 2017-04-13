import * as React from 'react';
import {SyntheticEvent} from "react";

const HelloMessageButton = ({text, callback} : {text:string, callback : () => void}) => {
    return <div>
        <button
            onClick={() => callback()}>
            {text}
        </button>
    </div>
}

export default HelloMessageButton;