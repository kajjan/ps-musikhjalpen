const MH_BASE_URL = "https://musikhjalpen-franceska.herokuapp.com/server/fundraisers";
const GBG_ID = "3zbSzyyPUPaZnQdAUEmAR9";
const MALMO_ID = "tqU8XdRQlC3NwO5vhMHZm";
const STHLM_ID = "5R3P9egk7JcPR020wtBiJN";

export const GBG = {
  name: "Göteborg",
  image: "gbg.webp",
  qr: "gbg_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-gothenburg-office",
  TOTAL_URL: `${MH_BASE_URL}/${GBG_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}/number-of-donations`,
  milestone1: "Svenskjävel: Jan & Linn",
  milestone2: "Kajsa bakes cookies",
  milestone3: "Amanda & Daan run both bridges",
  milestone4: "Emelie hosts a celebrity quiz",
  milestone5: "Ice-bucket challenge: Filip & Daniel",
  milestone6: "Amanda hosts beverage-tasting AW",
  milestone7: "-",
  milestone8: "-",
  milestone9: "Office Pizza Party!",
  milestone10: "Erik will die his har in a crazy color",  
};

export const MALMO = {
  name: "Malmö",
  image: "malmo.jpeg",
  qr: "malmo_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-malmoe-office",
  TOTAL_URL: `${MH_BASE_URL}/${MALMO_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}/number-of-donations`,
  milestone1: "-",
  milestone2: "-",
  milestone3: "Cludia, Tim & Madeleine will eat a svenskjävel with kaviar",
  milestone4: "Dip in the sea: Marlon & Eduard",
  milestone5: "-",
  milestone6: "-",
  milestone7: "-",
  milestone8: "-",
  milestone9: "-",
  milestone10: "Office Pizza Party!",  
};

export const STHLM = {
  name: "Stockholm",
  image: "sthlm.webp",
  qr: "sthlm_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-stockholm-office",
  TOTAL_URL: `${MH_BASE_URL}/${STHLM_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}/number-of-donations`,
  milestone1: "-",
  milestone2: "-",
  milestone3: "-",
  milestone4: "-",
  milestone5: "-",
  milestone6: "-",
  milestone7: "-",
  milestone8: "-",
  milestone9: "-",
  milestone10: "-",  
};
