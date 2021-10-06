/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryHome_cabecalho {
  __typename: "Cabecalho";
  links: (QueryHome_cabecalho_links | null)[] | null;
}

export interface QueryHome_home_banner_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_banner {
  __typename: "ComponentHomeBanner";
  image: QueryHome_home_banner_image | null;
  url: string | null;
}

export interface QueryHome_home_productGroup_livros_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryHome_home_productGroup_livros_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryHome_home_productGroup_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryHome_home_productGroup_livros_authors[];
  image: QueryHome_home_productGroup_livros_image[];
}

export interface QueryHome_home_productGroup_link {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryHome_home_productGroup {
  __typename: "ComponentHomeProductGroup";
  id: string;
  title: string;
  livros: QueryHome_home_productGroup_livros[];
  link: QueryHome_home_productGroup_link | null;
}

export interface QueryHome_home {
  __typename: "Home";
  banner: (QueryHome_home_banner | null)[] | null;
  productGroup: (QueryHome_home_productGroup | null)[] | null;
}

export interface QueryHome_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryHome_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryHome_rodape_links_link | null)[] | null;
}

export interface QueryHome_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryHome_rodape {
  __typename: "Rodape";
  links: (QueryHome_rodape_links | null)[] | null;
  social: (QueryHome_rodape_social | null)[] | null;
}

export interface QueryHome {
  cabecalho: QueryHome_cabecalho | null;
  home: QueryHome_home | null;
  rodape: QueryHome_rodape | null;
}
