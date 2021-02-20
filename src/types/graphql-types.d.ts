/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSession
// ====================================================

export interface CreateSession_createSession_user_avatar {
  __typename: "Image";
  id: string;
  url: string;
  width: number | null;
  height: number | null;
}

export interface CreateSession_createSession_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  avatar: CreateSession_createSession_user_avatar | null;
}

export interface CreateSession_createSession {
  __typename: "Session";
  user: CreateSession_createSession_user;
  token: string;
}

export interface CreateSession {
  createSession: CreateSession_createSession;
}

export interface CreateSessionVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  __typename: "User";
  id: string;
}

export interface CreateUser {
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  name: string;
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserCharacter
// ====================================================

export interface CreateUserCharacter_createUserCharacter {
  __typename: "UserCharacter";
  id: string;
  userCharacterStatus: UserCharacterStatus;
}

export interface CreateUserCharacter {
  createUserCharacter: CreateUserCharacter_createUserCharacter;
}

export interface CreateUserCharacterVariables {
  userId: string;
  characterId: string;
  userCharacterStatus: UserCharacterStatus;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUserCharacter
// ====================================================

export interface DeleteUserCharacter_deleteUserCharacter {
  __typename: "UserCharacter";
  id: string;
  userCharacterStatus: UserCharacterStatus;
}

export interface DeleteUserCharacter {
  deleteUserCharacter: DeleteUserCharacter_deleteUserCharacter;
}

export interface DeleteUserCharacterVariables {
  userId: string;
  characterId: string;
  userCharacterStatus: UserCharacterStatus;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCharacter
// ====================================================

export interface ListCharacter_character {
  __typename: "Character";
  id: string;
  name: string;
  age: number | null;
  description: string | null;
  isFavorited: boolean | null;
  isFollowed: boolean | null;
  coverImageUrl: string | null;
  bannerImageUrl: string | null;
}

export interface ListCharacter {
  character: ListCharacter_character | null;
}

export interface ListCharacterVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUserMediasFavorites
// ====================================================

export interface ListUserMediasFavorites_user_userMedias_edges_node {
  __typename: "Media";
  id: string;
  type: MediaType;
  title: string;
  authors: string[] | null;
  coverImageUrl: string | null;
}

export interface ListUserMediasFavorites_user_userMedias_edges {
  __typename: "UserMedia";
  id: string;
  node: ListUserMediasFavorites_user_userMedias_edges_node;
}

export interface ListUserMediasFavorites_user_userMedias {
  __typename: "UserMediaConnection";
  edges: ListUserMediasFavorites_user_userMedias_edges[];
}

export interface ListUserMediasFavorites_user {
  __typename: "User";
  id: string;
  userMedias: ListUserMediasFavorites_user_userMedias;
}

export interface ListUserMediasFavorites {
  user: ListUserMediasFavorites_user;
}

export interface ListUserMediasFavoritesVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListAllMedias
// ====================================================

export interface ListAllMedias_page_medias {
  __typename: "Media";
  id: string;
  title: string;
  authors: string[] | null;
  coverImageUrl: string | null;
}

export interface ListAllMedias_page {
  __typename: "Page";
  medias: ListAllMedias_page_medias[];
}

export interface ListAllMedias {
  page: ListAllMedias_page;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListSeasonMedias
// ====================================================

export interface ListSeasonMedias_page_medias {
  __typename: "Media";
  id: string;
  title: string;
  authors: string[] | null;
  coverImageUrl: string | null;
}

export interface ListSeasonMedias_page {
  __typename: "Page";
  medias: ListSeasonMedias_page_medias[];
}

export interface ListSeasonMedias {
  page: ListSeasonMedias_page;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUserMediasCurrent
// ====================================================

export interface ListUserMediasCurrent_user_userMedias_edges_node {
  __typename: "Media";
  id: string;
  type: MediaType;
  title: string;
  authors: string[] | null;
  coverImageUrl: string | null;
}

export interface ListUserMediasCurrent_user_userMedias_edges {
  __typename: "UserMedia";
  id: string;
  node: ListUserMediasCurrent_user_userMedias_edges_node;
}

export interface ListUserMediasCurrent_user_userMedias {
  __typename: "UserMediaConnection";
  edges: ListUserMediasCurrent_user_userMedias_edges[];
}

export interface ListUserMediasCurrent_user {
  __typename: "User";
  id: string;
  userMedias: ListUserMediasCurrent_user_userMedias;
}

export interface ListUserMediasCurrent {
  user: ListUserMediasCurrent_user;
}

export interface ListUserMediasCurrentVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser_avatar {
  __typename: "Image";
  id: string;
  url: string;
  width: number | null;
  height: number | null;
}

export interface UpdateUser_updateUser {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  avatar: UpdateUser_updateUser_avatar | null;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  id: string;
  name?: string | null;
  email?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserMedia
// ====================================================

export interface CreateUserMedia_createUserMedia {
  __typename: "UserMedia";
  id: string;
}

export interface CreateUserMedia {
  createUserMedia: CreateUserMedia_createUserMedia;
}

export interface CreateUserMediaVariables {
  userId: string;
  mediaId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUserMedia
// ====================================================

export interface DeleteUserMedia_deleteUserMedia {
  __typename: "UserMedia";
  id: string;
}

export interface DeleteUserMedia {
  deleteUserMedia: DeleteUserMedia_deleteUserMedia;
}

export interface DeleteUserMediaVariables {
  userId: string;
  mediaId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMediaForQuery
// ====================================================

export interface ListMediaForQuery_media {
  __typename: "Media";
  id: string;
}

export interface ListMediaForQuery {
  media: ListMediaForQuery_media | null;
}

export interface ListMediaForQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListMedia
// ====================================================

export interface ListMedia_media_categories_edges_node {
  __typename: "Category";
  id: string;
  name: string;
}

export interface ListMedia_media_categories_edges {
  __typename: "MediaCategory";
  id: string;
  score: number;
  node: ListMedia_media_categories_edges_node;
}

export interface ListMedia_media_categories {
  __typename: "CategoryConnection";
  edges: ListMedia_media_categories_edges[];
}

export interface ListMedia_media_characters_edges_node {
  __typename: "Character";
  id: string;
  name: string;
  coverImageUrl: string | null;
}

export interface ListMedia_media_characters_edges {
  __typename: "MediaCharacter";
  id: string;
  role: CharacterRole;
  node: ListMedia_media_characters_edges_node;
}

export interface ListMedia_media_characters {
  __typename: "CharacterConnection";
  edges: ListMedia_media_characters_edges[];
}

export interface ListMedia_media {
  __typename: "Media";
  id: string;
  type: MediaType;
  title: string;
  authors: string[] | null;
  description: string | null;
  isFavorited: boolean | null;
  coverImageUrl: string | null;
  bannerImageUrl: string | null;
  episodesAmount: number | null;
  categories: ListMedia_media_categories;
  characters: ListMedia_media_characters;
}

export interface ListMedia {
  media: ListMedia_media | null;
}

export interface ListMediaVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuerySearch
// ====================================================

export interface QuerySearch_page_medias {
  __typename: "Media";
  id: string;
  title: string;
  authors: string[] | null;
  coverImageUrl: string | null;
}

export interface QuerySearch_page {
  __typename: "Page";
  medias: QuerySearch_page_medias[];
}

export interface QuerySearch {
  page: QuerySearch_page;
}

export interface QuerySearchVariables {
  search: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CharacterRole {
  BACKGROUND = "BACKGROUND",
  MAIN = "MAIN",
  SUPPORTING = "SUPPORTING",
}

export enum MediaType {
  ANIME = "ANIME",
  MANGA = "MANGA",
}

export enum UserCharacterStatus {
  FAVORITE = "FAVORITE",
  FOLLOW = "FOLLOW",
  HATE = "HATE",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
