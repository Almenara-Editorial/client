/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_books_authors {
  __typename: "Author";
  name: string | null;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_books_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_books {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: MutationUpdateWishlist_updateWishlist_wishlist_books_authors[];
  image: MutationUpdateWishlist_updateWishlist_wishlist_books_image[];
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  books: MutationUpdateWishlist_updateWishlist_wishlist_books[];
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null;
}

export interface MutationUpdateWishlistVariables {
  input: updateWishlistInput;
}
