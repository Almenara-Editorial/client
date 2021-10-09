/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createNewsletterInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationNewsletter
// ====================================================

export interface MutationNewsletter_createNewsletter_newsletter {
  __typename: "Newsletter";
  id: string;
}

export interface MutationNewsletter_createNewsletter {
  __typename: "createNewsletterPayload";
  newsletter: MutationNewsletter_createNewsletter_newsletter | null;
}

export interface MutationNewsletter {
  createNewsletter: MutationNewsletter_createNewsletter | null;
}

export interface MutationNewsletterVariables {
  input: createNewsletterInput;
}
