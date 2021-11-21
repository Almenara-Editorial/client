/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryUser
// ====================================================

export interface QueryUser_me {
  __typename: "UsersPermissionsMe";
  fullName: string;
  documentNumber: string | null;
  email: string;
}

export interface QueryUser {
  me: QueryUser_me | null;
}
