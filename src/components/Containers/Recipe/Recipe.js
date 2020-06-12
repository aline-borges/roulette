import React from 'react';
import RecipeBox from './style';
import TitleRecipe from '../../../components/Texts/TitleRecipe';
import Ingredients from '../../../components/Lists/Ingredients';
import Item from '../../../components/Lists/Item';
import PhotoFood from '../../../components/Images/PhotoFood';

export const Recipe = () => {
  return(
    <RecipeBox>
      <PhotoFood />
      <TitleRecipe />
      <Ingredients>
        <Item />
      </Ingredients>
    </RecipeBox>
  )
}

export default Recipe