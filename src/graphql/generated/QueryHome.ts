/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

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

export interface QueryHome_home_productGroup_livros_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
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
  disccounts: QueryHome_home_productGroup_livros_disccounts[];
}

export interface QueryHome_home_productGroup_link {
  __typename: "ComponentProductLink";
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

export interface QueryHome {
  home: QueryHome_home | null;
}
