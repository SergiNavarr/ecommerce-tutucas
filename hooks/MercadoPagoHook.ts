"use server"
import { redirect } from "next/navigation";


import {MercadoPagoConfig, Preference, Payment} from 'mercadopago';
import { PreferenceMP } from "@/types/preference-mp";

const client = new MercadoPagoConfig({
    accessToken: process.env.ACCES_TOKEN_MERCADOPAGO!
});

export async function mercadoPagoHook (props : PreferenceMP[])  {

    const preference = await new Preference(client).create({
        body:{
            items: props
        }
    });

    redirect(preference.init_point!);
}
