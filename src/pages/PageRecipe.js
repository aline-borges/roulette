import React from 'react';
import Container from '../components/Containers/Container';
import Background from '../components/Containers/Background/Background';
import Recipe from '../components/Containers/Recipe/Recipe';
import Row from '../components/Containers/Row';

 export const PageRecipe = () => {
  return(
    <Container>
      <Row>
        <Background />
        <Recipe />
      </Row>
    </Container>
  )
}

export default PageRecipe