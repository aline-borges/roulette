import React from 'react';
import RecipeBox from './style';
import TitleRecipe from '/Cmder/roulette/src/components/Texts/TitleRecipe';
import Ingredients from '/Cmder/roulette/src/components/Lists/Ingredients';
import Item from '/Cmder/roulette/src/components/Lists/Item';
import PhotoFood from '/Cmder/roulette/src/components/Images/PhotoFood';

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