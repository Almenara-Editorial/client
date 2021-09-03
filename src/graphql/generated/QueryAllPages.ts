/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAllPages
// ====================================================

export interface QueryAllPages_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryAllPages_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryAllPages_rodape_links_link | null)[] | null;
}

export interface QueryAllPages_rodape {
  __typename: "Rodape";
  links: (QueryAllPages_rodape_links | null)[] | null;
}

export interface QueryAllPages {
  rodape: QueryAllPages_rodape | null;
}
