export type TotalResponse = {
  amount: number;
  prev_amount: number;
};

export type Donation = {
  amount: number;
  hidden_amount: boolean;
  public: boolean;
  name: string;
  message: string;
  timestamp: string;
};

export type DonatorsResponse = Array<Donation>;

export type OfficeData = {
  name: string;
  image: string;
  donoUrl: string;
  qr: string;
  totalAmount: number;
  topD: Donation | null;
  allDonos: Donation[];
  milestone1: string;
  milestone2: string;
  milestone3: string;
  milestone4: string;
  milestone5: string;
  milestone6: string;
  milestone7: string;
  milestone8: string;
  milestone9: string;
  milestone10: string;
};
