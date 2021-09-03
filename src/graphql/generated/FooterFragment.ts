/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FooterFragment
// ====================================================

export interface FooterFragment_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface FooterFragment_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (FooterFragment_links_link | null)[] | null;
}

export interface FooterFragment {
  __typename: "Rodape";
  links: (FooterFragment_links | null)[] | null;
}
