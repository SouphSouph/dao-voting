import { ReactElement } from "react";
import { useWeb3React } from '@web3-react/core';
import { Provider, getProvider } from '../utils/provider';
import React from 'react';

export function SignContract(): ReactElement{
    async function handlesigner(){
        const provider = getProvider()
        const signer = provider.getSigner().signMessage("Hello ! Message signed !")
        window.alert("Success")
    }
    return(
        <>
        <button onClick={handlesigner}/>
        </>
    )

}