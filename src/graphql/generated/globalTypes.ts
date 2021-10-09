/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGESOCIAL_NAME {
  email = "email",
  facebook = "facebook",
  instagram = "instagram",
  telegram = "telegram",
  whatsapp = "whatsapp",
  youtube = "youtube",
}

export enum ENUM_ORDER_STATUS {
  Aprovado = "Aprovado",
  Pendente = "Pendente",
  Processando = "Processando",
  Rejeitado = "Rejeitado",
}

export interface NewsletterInput {
  email: string;
  name: string;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface createNewsletterInput {
  data?: NewsletterInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
