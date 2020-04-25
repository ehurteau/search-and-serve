import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },{
        path:'add-recipe',
        component: AddRecipeComponent
    },{
            path: 'ingredients',
            component: IngredientsListComponent
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
    