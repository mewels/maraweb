import * as db from '$lib/server/database.js';
import {listAll} from '$lib/server/database.js';
import { fail } from '@sveltejs/kit'

export async function load() {
    const recipes = await listAll();
    return {
        recipes: recipes
        };
}

export const actions = {
    clear: async () => {
        db.clearRecipes();
    },
    
    create: async ({request}) => {
        const data = await request.formData();
        const recipe =  data.get("compiledrecipe");

        // console.log(recipe);
        try {
            await db.addRecipe(recipe);
        } catch(error) {
            console.error(error)
            return fail(500, {message: 'could not save recipe'});
        }
    },

    list: async () => {
        db.listRecipes();
    },
}   
