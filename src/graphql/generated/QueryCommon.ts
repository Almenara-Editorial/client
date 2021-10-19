/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryCommon
// ====================================================

export interface QueryCommon_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryCommon_cabecalho {
  __typename: "Cabecalho";
  links: (QueryCommon_cabecalho_links | null)[] | null;
}

export interface QueryCommon_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryCommon_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryCommon_rodape_links_link | null)[] | null;
}

export interface QueryCommon_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryCommon_rodape {
  __typename: "Rodape";
  links: (QueryCommon_rodape_links | null)[] | null;
  social: (QueryCommon_rodape_social | null)[] | null;
}

export interface QueryCommon {
  cabecalho: QueryCommon_cabecalho | null;
  rodape: QueryCommon_rodape | null;
}
