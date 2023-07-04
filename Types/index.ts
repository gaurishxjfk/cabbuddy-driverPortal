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
  export interface CabDetails {
    id: string;
    title: string;
    img: string;
    reg_no: string;
    car_model: string;
    driver_name: string;
  }
  export interface RideHistoryCardProps {
    rideObj: {
      id: string;
      cab_details: CabDetails;
      ride_status: string;
      ratings: number;
    };
  }

 export interface CustomInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    type: string;
    error?: string;
    touched?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    max?: string;
  }
  interface Option {
    value: string;
    label: string;
  }
  
  export interface CustomDropdownProps {
    label: string;
    name: string;
    value: string;
    error?: string ;
    touched?: boolean ;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    options: Option[];
    className?: string;
  }

  export interface CustomFileUploadProps {
    name: string;
    label: string;
    value: File | null;
    error?: string ;
    touched?: boolean ;
    handleChange: (type:string, imgFile: File | undefined) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
  }
  
  export interface DriverFormValues {
    name: string;
    email: string;
    licenseNo: string;
    mobileNo: string;
    DOB: string;
    address: string;
    state: string;
    pincode: string;
    terms: boolean;
    licenseImage: File | null ;
  }

  export interface FileWithSizeAndType extends File {
    size: number;
    type: string;
  }
  export interface DriverProfileValues {
    mobileNo: string;
    address: string;
    state: string;
    pincode: string;
    profileImage: File | null ;
  }