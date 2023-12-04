

export const SET_FORM_DATA = "SET_FORM_DATA";

interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: {
    name: string;
    email: string;
    number: string;
    companyName: string;
    selectedService: string;
    projectBudget: string;
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

const initialState: FormState = {
  name: "",
  email: "",
  number: "",
  companyName: "",

  selectedService: "",
  projectBudget: "",
};

const formReducer = (
  state = initialState,
  action: FormActionTypes
): FormState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number,
        companyName: action.payload.companyName,
        selectedService: action.payload.selectedService,
        projectBudget: action.payload.projectBudget,
      };
    // Handle other cases if needed
    default:
      return state;
  }
};

export default formReducer;
