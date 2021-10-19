/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationContact
// ====================================================

export interface MutationContact_createContact_contact {
  __typename: "Contact";
  created_at: any;
}

export interface MutationContact_createContact {
  __typename: "createContactPayload";
  contact: MutationContact_createContact_contact | null;
}

export interface MutationContact {
  createContact: MutationContact_createContact | null;
}

export interface MutationContactVariables {
  input: createContactInput;
}
