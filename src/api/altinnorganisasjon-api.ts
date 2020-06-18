import { getRestStatus, RestRessurs, RestStatus } from './api-utils';
import { createContext, useEffect, useState } from 'react';
import * as Sentry from '@sentry/browser';
import { BASE_PATH } from '../konstanter';

export type RestAltinnOrganisasjoner = RestRessurs<AltinnOrganisasjon[]>;

export interface AltinnOrganisasjon {
    Name: string;
    Type: string;
    OrganizationNumber: string;
    OrganizationForm: string;
    Status: string;
    ParentOrganizationNumber: string;
}

const hentAltinnOrganisasjonerBrukerHarTilgangTil = async (
    url: string
): Promise<AltinnOrganisasjon[]> => {
    const respons = await fetch(url);
    const restStatus: RestStatus = getRestStatus(respons.status);

    if (restStatus !== RestStatus.Suksess) {
        const error = {
            status: restStatus,
        };

        return Promise.reject(error);
    }
    return await respons.json();
};

export const hentAltinnOrganisasjoner = async (
    url: string
): Promise<RestRessurs<AltinnOrganisasjon[]>> => {
    try {
        const altinnOrganisasjoner = await hentAltinnOrganisasjonerBrukerHarTilgangTil(url);
        return {
            status: RestStatus.Suksess,
            data: altinnOrganisasjoner,
        };
    } catch (error) {
        Sentry.captureException(error);
        return { status: error.status || RestStatus.Feil };
    }
};
