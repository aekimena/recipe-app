import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserProfileProps} from '../../../types/profile.types';
import {RecipeProps} from '../../../types/bookmark.type';
import {UserSearchView} from './UserSearchView';
import {RecipeSearchView} from './RecipeSearchView';

type ApiResponseItem = UserProfileProps | RecipeProps;

const RenderSearchResults = ({item}: {item: ApiResponseItem}) => {
  function isUser() {
    return (item as UserProfileProps).email !== undefined;
  }

  function isRecipe() {
    return (item as RecipeProps).title !== undefined;
  }

  if (isUser()) {
    return <UserSearchView user={item as UserProfileProps} />;
  }

  if (isRecipe()) {
    return <RecipeSearchView recipe={item as RecipeProps} />;
  }
  return <View />;
};

export {RenderSearchResults};

const styles = StyleSheet.create({});
