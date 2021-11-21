/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_orders_books_book_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryOrders_orders_books_book_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryOrders_orders_books_book_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryOrders_orders_books_book {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryOrders_orders_books_book_authors[];
  image: QueryOrders_orders_books_book_image[];
  disccounts: QueryOrders_orders_books_book_disccounts[];
}

export interface QueryOrders_orders_books {
  __typename: "ComponentOrderOrderProduct";
  book: QueryOrders_orders_books_book | null;
  price: number | null;
  quantity: number;
}

export interface QueryOrders_orders_status {
  __typename: "OrderStatus";
  name: string | null;
}

export interface QueryOrders_orders_payment {
  __typename: "ComponentOrderPayment";
  total: number | null;
  documentUrl: string | null;
}

export interface QueryOrders_orders {
  __typename: "Order";
  id: string;
  books: (QueryOrders_orders_books | null)[] | null;
  status: QueryOrders_orders_status | null;
  payment: QueryOrders_orders_payment | null;
  created_at: any;
}

export interface QueryOrders {
  orders: QueryOrders_orders[];
}

export interface QueryOrdersVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
