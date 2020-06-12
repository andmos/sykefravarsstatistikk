import amplitude from 'amplitude-js';
import { RestStatus } from '../api/api-utils';
import { useContext } from 'react';
import { RestBedriftsmetrikker } from '../api/bedriftsmetrikker';
import { bedriftsmetrikkerContext } from './bedriftsmetrikkerContext';

const getApiKey = () => {
    return window.location.hostname === 'arbeidsgiver.nav.no'
        ? '3a6fe32c3457e77ce81c356bb14ca886'
        : '55477baea93c5227d8c0f6b813653615';
};

const instance = amplitude.getInstance();
instance.init(getApiKey(), '', {
    apiEndpoint: 'amplitude.nav.no/collect',
    saveEvents: false,
    includeUtm: true,
    batchEvents: false,
    includeReferrer: true,
});

export const sendEvent = (område: string, hendelse: string, data?: Object): void => {
    if (hendelse === '') {
        // Ikke riktig bruk av loggingen. Hendelse skal alltid med.
        instance.logEvent(['#sykefravarsstatistikk', område].join('-'), data);
    } else {
        instance.logEvent(['#sykefravarsstatistikk', område, hendelse].join('-'), data);
    }
};

type SendEvent = (område: string, hendelse: string, data?: Object) => void;

export const useSendEvent = (): SendEvent => {
    const restBedriftsmetrikker = useContext<RestBedriftsmetrikker>(bedriftsmetrikkerContext);

    if (restBedriftsmetrikker.status === RestStatus.Suksess) {
        return (område: string, hendelse: string, data?: Object) =>
            sendEvent(område, hendelse, {
                næring2siffer: restBedriftsmetrikker.data.næringskode5Siffer.kode.substring(0, 2),
                bransje: restBedriftsmetrikker.data.bransje,
                ...data,
            });
    } else {
        return (område: string, hendelse: string, data?: Object) =>
            sendEvent(område, hendelse, data);
    }
};
