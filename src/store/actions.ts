import { SET_FORM_DATA, FormActionTypes } from "./types";

export const setFormData = (formData: {
         name: string;
         email: string;
         number: string;
         companyName: string;
         selectedService: string;
         projectBudget: string;
       }): FormActionTypes => ({
         type: SET_FORM_DATA,
         payload: formData,
       });
