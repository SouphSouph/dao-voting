import { ReactElement } from "react";
import { useWeb3React } from '@web3-react/core';
import { Provider } from '../utils/provider';

export function SignContract(): ReactElement{
    const context = useWeb3React<Provider>()

    return(
        <>
        </>
    )

}