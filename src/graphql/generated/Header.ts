/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Header
// ====================================================

export interface Header_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface Header {
  __typename: "Cabecalho";
  links: (Header_links | null)[] | null;
}
