import React, { useState, useEffect } from "react";
import axios from "axios";

//grab info from params
import { useParams } from "react-router-dom";

//chakra-ui components
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

export default function Recipe() {
  const [state, setState] = useState({
    ingredients: [],
    instructions: [],
    nutrition: [],
    title: "",
    readyInMinutes: "",
    image: "",
    servings: ""
  });

  const recipeMock = {
    "ingredients": [
      {
        "name": "bell peppers",
        "amount": 4,
        "unit": "servings"
      },
      {
        "name": "cayenne",
        "amount": 0.5,
        "unit": "tsps"
      },
      {
        "name": "chili powder",
        "amount": 0.25,
        "unit": "tsps"
      },
      {
        "name": "chorizo",
        "amount": 1,
        "unit": "g"
      },
      {
        "name": "cumin",
        "amount": 0.25,
        "unit": "tsps"
      },
      {
        "name": "green onion tops",
        "amount": 4,
        "unit": "servings"
      },
      {
        "name": "jack cheese",
        "amount": 0.25,
        "unit": "ml"
      },
      {
        "name": "lean ground beef",
        "amount": 1,
        "unit": "g"
      },
      {
        "name": "quinoa",
        "amount": 1,
        "unit": "ml"
      }
    ],
    "instructions": [
      {
        "number": 1,
        "step": "The first thing you will want to do is heat the oven to 350, boil the water for the quinoa, and in a separate skillet brown the beef and chorizo together."
      },
      {
        "number": 2,
        "step": "Drain the meat mixture well, and then place into a medium mixing bowl.Once your quinoa is fully cooked, add it to the mixing bowl."
      },
      {
        "number": 3,
        "step": "Add the green onion tops, cumin, cayenne, chili powder, and monterrey jack and cheddar cheese."
      },
      {
        "number": 4,
        "step": "Mix well."
      },
      {
        "number": 5,
        "step": "Cut the tops from your bell peppers and scoop out any remaining seeds.Then take your meat mixture and start stuffing the bell peppers until they are full."
      },
      {
        "number": 6,
        "step": "Sprinkle with a little cheese and then bake in the oven for about 10 minutes until the bell pepper has softened."
      },
      {
        "number": 7,
        "step": "Serve immediately."
      }
    ],
    "nutrition": [
      {
        "name": "Calories",
        "amount": 685.04,
        "unit": "kcal"
      },
      {
        "name": "Fat",
        "amount": 37.03,
        "unit": "g"
      },
      {
        "name": "Carbohydrates",
        "amount": 32.52,
        "unit": "g"
      },
      {
        "name": "Protein",
        "amount": 51.15,
        "unit": "g"
      }
    ],
    "title": "Chorizo and Beef Quinoa Stuffed Pepper",
    "readyInMinutes": 30,
    "image": "https://spoonacular.com/recipeImages/715523-556x370.jpg",
    "servings": 4
  };

  // const { id } = useParams();

  // get data to update state;

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/recipes/${id}`
  //   ).then((res) => {
  //     // console.log("res", res.data);
  //     setState(prev => ({ ...prev, ...res.data }));
  //   });
  // }, []);

  useEffect(() => {
    setState(prev => ({ ...prev, ...recipeMock }));
  }, []);


  console.log('state', state);

  //creates array of ingredients copied from state.ingredients
  const ingredientsArray = [...state.ingredients];

  //maps over ingredientsArray to return list of ingredients
  const ingredientList = ingredientsArray.map((ingredient) => {
    return (
      <ListItem py={2} borderBottom='1px' borderColor='gray.200'>
        {ingredient.amount} {ingredient.unit} {ingredient.name}
        {/* <Divider /> */}
      </ListItem>
    );
  });

  //creates an array of instructions
  const instructionsArray = [...state.instructions];
  console.log('instructionsArray', instructionsArray);

  //maps over instructionsArray to return a list of instructions
  const instructionsList = instructionsArray.map((instruction) => {
    return (
      <ListItem py={2} borderBottom='1px' borderColor='gray.200'>
        {instruction.step}
        {/* <Divider /> */}
      </ListItem>
    );
  });

  //creates an array of nutrition
  const nutritionArray = [...state.nutrition];
  console.log('nutritionArray', nutritionArray);

  //maps over instructionsArray to return a list of instructions
  const nutritionList = nutritionArray.map((nutrient) => {
    return (
      // <ListItem py={2}>
      <Box py={2} borderBottom='1px'  borderColor='gray.200'>
        <Flex>
          <Text fontWeight='semibold'>
            {nutrient.name}
          </Text>
          <Spacer />
          <Text>
            {nutrient.amount} {nutrient.unit}
          </Text>
        </Flex>
        {/* <Divider /> */}
      </Box>
      // </ListItem>
    );
  });



  return (
    <HStack alignItems="start">
      <Container w="40%" py={10}  >
        <Heading as='h2' size='lg' py={2}>{state.title}</Heading>
        <Divider />
        <Text py={2}>Cooking time: {state.readyInMinutes}min</Text>
        {/* <Divider /> */}
        <Text py={2}>Servings: {state.servings}</Text>
        <Image src={state.image} py={5} />
      </Container>

      <Divider orientation='vertical' />

      {/* <VStack> */}
      <Tabs isFitted variant='enclosed' w="60%" py={10} >
        <TabList mb='1em'>
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
          <Tab>Nutrition</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UnorderedList>
              {ingredientList}
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <OrderedList>
              {instructionsList}
            </OrderedList>
          </TabPanel>
          <TabPanel>
            <UnorderedList>
              {nutritionList}
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </HStack>

  );
}
