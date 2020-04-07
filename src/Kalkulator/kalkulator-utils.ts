import { Sykefraværshistorikk, SykefraværshistorikkType } from '../api/sykefraværshistorikk';
import { number } from 'prop-types';

const summerTall = (tall: number[]) => tall.reduce((a, b) => a + b);

export const getAntallTapteDagsverkSiste4Kvartaler = (
    historikkListe: Sykefraværshistorikk[]
): number | 'erMaskertEllerHarIkkeNokData' => {
    const alleProsenter = [
        ...historikkListe.find(historikk => historikk.type === SykefraværshistorikkType.VIRKSOMHET)!
            .kvartalsvisSykefraværsprosent,
    ];
    alleProsenter.reverse();

    const prosenterForSiste4Kvartaler = alleProsenter
        .filter((sammenligning, index) => index < 4)
        .filter(prosent => !prosent.erMaskert);

    if (prosenterForSiste4Kvartaler.length !== 4) {
        return 'erMaskertEllerHarIkkeNokData';
    }
    const tapteDagsverkForSiste4Kvartaler = prosenterForSiste4Kvartaler.map(
        prosent => prosent.tapteDagsverk!
    );
    return Math.round(summerTall(tapteDagsverkForSiste4Kvartaler));
};
export const getNåværendeSykefraværsprosent = (
    historikkListe: Sykefraværshistorikk[]
): number | 'erMaskertEllerHarIkkeNokData' => {
    const alleProsenter = [
        ...historikkListe.find(historikk => historikk.type === SykefraværshistorikkType.VIRKSOMHET)!
            .kvartalsvisSykefraværsprosent,
    ];
    alleProsenter.reverse();
    if (alleProsenter[0].erMaskert) {
        return 'erMaskertEllerHarIkkeNokData';
    } else {
        return alleProsenter[0].prosent as number;
    }
};
