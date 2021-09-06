/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL fragment: Footer
// ====================================================

export interface Footer_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface Footer_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (Footer_links_link | null)[] | null;
}

export interface Footer_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface Footer {
  __typename: "Rodape";
  links: (Footer_links | null)[] | null;
  social: (Footer_social | null)[] | null;
}
