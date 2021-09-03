/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryFooter
// ====================================================

export interface QueryFooter_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryFooter_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryFooter_rodape_links_link | null)[] | null;
}

export interface QueryFooter_rodape {
  __typename: "Rodape";
  links: (QueryFooter_rodape_links | null)[] | null;
}

export interface QueryFooter {
  rodape: QueryFooter_rodape | null;
}
