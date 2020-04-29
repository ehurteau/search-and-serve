import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './INGREDIENTS'; // for mock recipes

let ingredients: Ingredient[] = INGREDIENTS;
let ingredientsMap: Map<Ingredient, { quantity: number, measurement: string }> = new Map([  // for mock recipes
    [ ingredients[0], { quantity: 2, measurement: 'cups' } ],
    [ ingredients[1], { quantity: 5, measurement: 'tbsp' } ],
    [ ingredients[2], { quantity: 1, measurement: 'tsp' } ],
]);


export const RECIPES: Recipe[] = [
    {
        id: 0,
        title: 'recipe1',
        author: 'Joel',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL: "assets/images/image_1.jpg"

    },{
        id: 1,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Katie',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL: "assets/images/image_2.jpg"
    },{
        id: 2,
        title: 'recipe1',
        author: 'Bob',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL: "assets/images/image_2.jpg"

    },{
        id: 3,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Jerry',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL: "assets/images/image_4.jpg"
    },{
        id: 4,
        title: 'recipe1',
        author: 'Rose',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL: "assets/images/image_6.jpg"

    },{
        id: 5,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Blanche',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL: "assets/images/image_4.jpg"
    },{
        id: 6,
        title: 'recipe1',
        author: 'Sophia',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL: "assets/images/image_6.jpg"

    },{
        id: 7,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Dorothy',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_4.jpg"
    },{
        id: 8,
        title: 'recipe1',
        author: 'Stanley',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_6.jpg"

    },{
        id: 9,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Stanley',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_3.jpg"
    },{
        id: 10,
        title: 'recipe1',
        author: 'Spongebob',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_1.jpg"

    },{
        id: 11,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Oscar',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_4.jpg"
    },{
        id: 12,
        title: 'recipe1',
        author: 'Dory',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_1.jpg"

    },{
        id: 13,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Keagan',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_2.jpg"
    },{
        id: 14,
        title: 'recipe1',
        author: 'Kody',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_4.jpg"

    },{
        id: 15,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Tom',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl', 
        imageURL:  "assets/images/image_4.jpg"
    },{
        id: 16,
        title: 'recipe1',
        author: 'Isabelle',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_4.jpg"

    },{
        id: 17,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Gary',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_3.jpg"
    },{
        id: 18,
        title: 'recipe1',
        author: 'Phyllis',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_5.jpg"

    },{
        id: 19,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Gulliver',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_6.jpg"
    },{
        id: 20,
        title: 'recipe1',
        author: 'Timothy',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_2.jpg"

    },{
        id: 21,
        title: 'My Favorite Recipe! My family loves this recipe! I do too!',
        author: 'Bianca',
        timeToPrepare: 120,
        rating: { avgRating: -1, numberOfRatings: 0 },
        diet: 'keto',
        type: 'baked',
        description: 'I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe I love this recipe',
        ingredients: ingredientsMap,
        instructions: 'Mix the dry ingredients in a large bowl',
        imageURL:  "assets/images/image_3.jpg"
    },{
        id: 22,
        title: 'recipe1',
        author: 'Ronald',
        timeToPrepare: 35,
        rating: { avgRating: 5, numberOfRatings: 15 },
        diet: 'halal',
        type: 'breakfast',
        description: 'test recipe please ignore',
        ingredients: ingredientsMap,
        instructions: 'Preheat the oven at 350 degrees Fahrenheit...',
        imageURL:  "assets/images/image_6.jpg"
    }
]