import './Currency.scss'
import React, {ReactElement} from 'react';
import {formatCurrency} from "../../utils/helpers";

interface CurrencyProps {
    value: number;
}

export const Currency = ({value}: CurrencyProps): ReactElement => {
    const formatedValue = formatCurrency(value);

    return (
        <div className={"Currency"}>
            <span className={"number"}>{formatedValue.split(',')[0]}</span>
            <span className={"float"}>{formatedValue.split(',')[1]}</span>
        </div>
    );
};