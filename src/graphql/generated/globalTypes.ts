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

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface InputID {
  id: string;
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
  fullName: string;
}

export interface createContactInput {
  data?: ContactInput | null;
}

export interface createNewsletterInput {
  data?: NewsletterInput | null;
}

export interface editUserInput {
  username?: string | null;
  email?: string | null;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  fullName?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
