/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ORDER_STATUS, ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryOrders_cabecalho {
  __typename: "Cabecalho";
  links: (QueryOrders_cabecalho_links | null)[] | null;
}

export interface QueryOrders_orders_books_book {
  __typename: "Livro";
  slug: string;
}

export interface QueryOrders_orders_books {
  __typename: "ComponentOrderOrderProduct";
  book: QueryOrders_orders_books_book | null;
}

export interface QueryOrders_orders {
  __typename: "Order";
  id: string;
  books: (QueryOrders_orders_books | null)[] | null;
  status: ENUM_ORDER_STATUS | null;
  total: number;
  created_at: any;
}

export interface QueryOrders_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryOrders_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryOrders_rodape_links_link | null)[] | null;
}

export interface QueryOrders_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryOrders_rodape {
  __typename: "Rodape";
  links: (QueryOrders_rodape_links | null)[] | null;
  social: (QueryOrders_rodape_social | null)[] | null;
}

export interface QueryOrders {
  cabecalho: QueryOrders_cabecalho | null;
  orders: QueryOrders_orders[];
  rodape: QueryOrders_rodape | null;
}

export interface QueryOrdersVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
