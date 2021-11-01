/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_books_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryWishlist_wishlists_books_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryWishlist_wishlists_books_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryWishlist_wishlists_books {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryWishlist_wishlists_books_authors[];
  image: QueryWishlist_wishlists_books_image[];
  disccounts: QueryWishlist_wishlists_books_disccounts[];
}

export interface QueryWishlist_wishlists {
  __typename: "Wishlist";
  id: string;
  books: QueryWishlist_wishlists_books[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[];
}

export interface QueryWishlistVariables {
  identifier: string;
}
