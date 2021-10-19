/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryTermsOfUse
// ====================================================

export interface QueryTermsOfUse_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryTermsOfUse_cabecalho {
  __typename: "Cabecalho";
  links: (QueryTermsOfUse_cabecalho_links | null)[] | null;
}

export interface QueryTermsOfUse_termsOfUse {
  __typename: "TermsOfUse";
  content: string | null;
}

export interface QueryTermsOfUse_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryTermsOfUse_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryTermsOfUse_rodape_links_link | null)[] | null;
}

export interface QueryTermsOfUse_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryTermsOfUse_rodape {
  __typename: "Rodape";
  links: (QueryTermsOfUse_rodape_links | null)[] | null;
  social: (QueryTermsOfUse_rodape_social | null)[] | null;
}

export interface QueryTermsOfUse {
  cabecalho: QueryTermsOfUse_cabecalho | null;
  termsOfUse: QueryTermsOfUse_termsOfUse | null;
  rodape: QueryTermsOfUse_rodape | null;
}
