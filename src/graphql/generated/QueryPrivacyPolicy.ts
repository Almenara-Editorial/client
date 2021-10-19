/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPrivacyPolicy
// ====================================================

export interface QueryPrivacyPolicy_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryPrivacyPolicy_cabecalho {
  __typename: "Cabecalho";
  links: (QueryPrivacyPolicy_cabecalho_links | null)[] | null;
}

export interface QueryPrivacyPolicy_privacyPolicy {
  __typename: "PrivacyPolicy";
  content: string | null;
}

export interface QueryPrivacyPolicy_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryPrivacyPolicy_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryPrivacyPolicy_rodape_links_link | null)[] | null;
}

export interface QueryPrivacyPolicy_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryPrivacyPolicy_rodape {
  __typename: "Rodape";
  links: (QueryPrivacyPolicy_rodape_links | null)[] | null;
  social: (QueryPrivacyPolicy_rodape_social | null)[] | null;
}

export interface QueryPrivacyPolicy {
  cabecalho: QueryPrivacyPolicy_cabecalho | null;
  privacyPolicy: QueryPrivacyPolicy_privacyPolicy | null;
  rodape: QueryPrivacyPolicy_rodape | null;
}
