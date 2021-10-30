/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_wishlist_books_authors {
  __typename: "Author";
  name: string | null;
}

export interface MutationCreateWishlist_createWishlist_wishlist_books_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface MutationCreateWishlist_createWishlist_wishlist_books {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: MutationCreateWishlist_createWishlist_wishlist_books_authors[];
  image: MutationCreateWishlist_createWishlist_wishlist_books_image[];
}

export interface MutationCreateWishlist_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  books: MutationCreateWishlist_createWishlist_wishlist_books[];
}

export interface MutationCreateWishlist_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutationCreateWishlist_createWishlist_wishlist | null;
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null;
}

export interface MutationCreateWishlistVariables {
  input: createWishlistInput;
}
