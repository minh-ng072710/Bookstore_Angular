import {Component} from '@angular/core'
import { CategoryService } from 'src/app/Services/categories.module'


@Component({
    templateUrl:"categories.component.html",
    selector:"categories",
    providers:[CategoryService]

})

export class CateComponent{
    cat:any=[]
    constructor(private cateservice:CategoryService){
        cateservice.getCategory().subscribe((data)=>{
            this.cat=data
            console.log(this.cat)
        });
    }
    
}