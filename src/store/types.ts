// store/types.ts

export const SET_FORM_DATA = "SET_FORM_DATA";

interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: {
    name: string;
    email: string;
    number: string;
    companyName: string;
    
    // selectedService: string;
    // projectBudget: string;
  };
}

export type FormActionTypes = SetFormDataAction;

export interface FormState {
  name: string;
  email: string;
  number: string;
  companyName: string;

  selectedService: string;
  projectBudget: string;
}

export interface RootState {
  form: FormState;
}
