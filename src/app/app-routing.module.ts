import {NgModule} from '@angular/core'
import {Routes,RouterModule,Route} from'@angular/router'
import {CommonModule} from '@angular/common'

import { HomeComponent } from './Components/Pages/Home/home.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import {CatComponent} from './Components/Pages/Cate/cate.component'

const routerConfig:Routes=[
    {path:"detail",component:DetailComponent},
    {path:"categories",component:CatComponent},
    {path:"**",component:HomeComponent},

    
]
@NgModule({
    declarations:[
        HomeComponent,
        DetailComponent,
        CatComponent
    ],
    imports:[
        RouterModule.forRoot(routerConfig),
        CommonModule
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{
    
}