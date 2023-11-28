import type { NextApiRequest, NextApiResponse } from "next";
import { GBG, MALMO, STHLM } from "../../constants/offices";
import {
  Donation,
  DonatorsResponse,
  OfficeData,
  TotalResponse,
} from "../../types";
import { findTopD } from "../../utils";

export type Data = {
  totalAmount: number;
  topD: Donation | null;
  offices: OfficeData[];
};

export const config = {
  regions: ["arn1"],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Fetch total amounts from Musikhjälpen
  const gbgTotalResp = <TotalResponse>await (await fetch(GBG.TOTAL_URL)).json();
  const malmoTotalResp = <TotalResponse>(
    await (await fetch(MALMO.TOTAL_URL)).json()
  );
  const sthlmTotalResp = <TotalResponse>(
    await (await fetch(STHLM.TOTAL_URL)).json()
  );

  // Fetch number of donations
  const gbgNumOfDonos: number = await (
    await fetch(GBG.NUM_OF_DONOS_URL)
  ).json();
  const malmoNumOfDonos: number = await (
    await fetch(MALMO.NUM_OF_DONOS_URL)
  ).json();
  const sthlmNumOfDonos: number = await (
    await fetch(STHLM.NUM_OF_DONOS_URL)
  ).json();

  // Calculate number of paginations available
  const gbgNumOfPags = Math.trunc(gbgNumOfDonos / 5);
  const malmoNumOfPags = Math.trunc(malmoNumOfDonos / 5);
  const sthlmNumOfPags = Math.trunc(sthlmNumOfDonos / 5);

  // Fetch initial donator lists from Musikhjälpen
  let gbgDonos = <DonatorsResponse>(
    await (await fetch(`${GBG.DONOS_URL}/0`)).json()
  );
  let malmoDonos = <DonatorsResponse>(
    await (await fetch(`${MALMO.DONOS_URL}/0`)).json()
  );
  let sthlmDonos = <DonatorsResponse>(
    await (await fetch(`${STHLM.DONOS_URL}/0`)).json()
  );

  // Fetch extra paginations
  for (let i = 1; i <= gbgNumOfPags; i++) {
    gbgDonos = [
      ...gbgDonos,
      ...(await (await fetch(`${GBG.DONOS_URL}/${i * 5}`)).json()),
    ];
  }

  for (let i = 1; i <= malmoNumOfPags; i++) {
    malmoDonos = [
      ...malmoDonos,
      ...(await (await fetch(`${MALMO.DONOS_URL}/${i * 5}`)).json()),
    ];
  }

  for (let i = 1; i <= sthlmNumOfPags; i++) {
    sthlmDonos = [
      ...sthlmDonos,
      ...(await (await fetch(`${STHLM.DONOS_URL}/${i * 5}`)).json()),
    ];
  }

  // Build response object
  const data: Data = {
    totalAmount:
      gbgTotalResp.amount + malmoTotalResp.amount + sthlmTotalResp.amount,
    topD: findTopD([...gbgDonos, ...malmoDonos, ...sthlmDonos]),
    offices: [
      {
        name: GBG.name,
        image: GBG.image,
        donoUrl: GBG.MH_PAGE_URL,
        qr: GBG.qr,
        totalAmount: gbgTotalResp.amount,
        topD: findTopD(gbgDonos),
        allDonos: gbgDonos,
        milestone1: GBG.milestone1,
        milestone2: GBG.milestone2,
        milestone3: GBG.milestone3,
        milestone4: GBG.milestone4,
        milestone5: GBG.milestone5,
        milestone6: GBG.milestone6,
        milestone7: GBG.milestone7,
        milestone8: GBG.milestone8,
        milestone9: GBG.milestone9,
        milestone10: GBG.milestone10,
      },
      {
        name: MALMO.name,
        image: MALMO.image,
        qr: MALMO.qr,
        donoUrl: MALMO.MH_PAGE_URL,
        totalAmount: malmoTotalResp.amount,
        topD: findTopD(malmoDonos),
        allDonos: malmoDonos,
        milestone1: MALMO.milestone1,
        milestone2: MALMO.milestone2,
        milestone3: MALMO.milestone3,
        milestone4: MALMO.milestone4,
        milestone5: MALMO.milestone5,
        milestone6: MALMO.milestone6,
        milestone7: MALMO.milestone7,
        milestone8: MALMO.milestone8,
        milestone9: MALMO.milestone9,
        milestone10: MALMO.milestone10,
      },
      {
        name: STHLM.name,
        image: STHLM.image,
        qr: STHLM.qr,
        donoUrl: STHLM.MH_PAGE_URL,
        totalAmount: sthlmTotalResp.amount,
        topD: findTopD(sthlmDonos),
        allDonos: sthlmDonos,
        milestone1: STHLM.milestone1,
        milestone2: STHLM.milestone2,
        milestone3: STHLM.milestone3,
        milestone4: STHLM.milestone4,
        milestone5: STHLM.milestone5,
        milestone6: STHLM.milestone6,
        milestone7: STHLM.milestone7,
        milestone8: STHLM.milestone8,
        milestone9: STHLM.milestone9,
        milestone10: STHLM.milestone10,
      },
    ],
  };

  res.status(200).json(data);
}
