import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from './dashboard/dashboard.component'
    import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
//import { IngredientsComponent } from './ingredients/ingredients.component';

    const routes: Routes = [
        {
            path: 'dashboard',
            component: DashboardComponent
        },{
            path:'add-recipe',
            component: AddRecipeComponent
        }//,{
        //     path: 'ingredients',
        //     component: IngredientsComponent
        // }
        ,{
            path: 'recipe/:id',
            component: RecipeComponent
        },
        {
            path: 'recipe',
            component: RecipeComponent
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    