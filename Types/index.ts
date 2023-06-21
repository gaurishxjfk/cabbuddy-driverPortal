export interface CabCardProps extends CabObj {
  setSelectedCab: React.Dispatch<React.SetStateAction<CabObj>>;
}

export type CabObj = {
    title: string;
    price: number;
    img: string;
    description: string;
    id: string;
    seating: number;
  }
  export interface ConfirmBookingCard extends CabObj {
    setSelectedCab: React.Dispatch<React.SetStateAction<CabObj>>

  }

 