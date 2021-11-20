/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPage
// ====================================================

export interface QueryPage_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryPage_cabecalho {
  __typename: "Cabecalho";
  links: (QueryPage_cabecalho_links | null)[] | null;
}

export interface QueryPage_pages {
  __typename: "Pages";
  name: string | null;
  content: string | null;
}

export interface QueryPage_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryPage_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryPage_rodape_links_link | null)[] | null;
}

export interface QueryPage_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryPage_rodape {
  __typename: "Rodape";
  links: (QueryPage_rodape_links | null)[] | null;
  social: (QueryPage_rodape_social | null)[] | null;
}

export interface QueryPage {
  cabecalho: QueryPage_cabecalho | null;
  pages: QueryPage_pages[];
  rodape: QueryPage_rodape | null;
}

export interface QueryPageVariables {
  where?: any | null;
}
