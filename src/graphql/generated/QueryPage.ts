/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPage
// ====================================================

export interface QueryPage_pages {
  __typename: "Pages";
  name: string | null;
  content: string | null;
}

export interface QueryPage {
  pages: QueryPage_pages[];
}

export interface QueryPageVariables {
  where?: any | null;
}
