import * as React from 'react';

import {IInputs} from "./generated/ManifestTypes";
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { TooltipHost, ITooltipHostStyles } from 'office-ui-fabric-react/lib/Tooltip';
import { concatStyleSetsWithProps } from 'office-ui-fabric-react/lib/Styling';

export interface IProps {
    value:  string | null ,
    tooltip: string | null ,
    valueChanged: (newValue: string) => void; 
}

export const TooltipedControlCompoment : React.FC<IProps> = (props) => {        

    // react hook to store the field value.
    const [value, setValue] = React.useState("");

    const onChangeValue = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) =>   {
        setValue(newValue == undefined ? "" : newValue );

        if (props.valueChanged != null) {
            props.valueChanged(newValue == undefined ? "" : newValue) ;
        }

    }
    
    return (
            <TooltipHost content = { props.tooltip != null ? props.tooltip : "" } >
                <TextField defaultValue = { props.value != null ? props.value : undefined } onChange={onChangeValue} />
            </TooltipHost>
    );
};