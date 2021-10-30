import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.extradata;
        console.log(this.data);
      }
    });

  }

  ngOnInit() {
  }

  clickSubcategory(row){
    /* this.dataService.setData(innerdata.CategoryId, innerdata);
    this.router.navigateByUrl('/subcategories/' + innerdata.CategoryId); */
    let navigationExtras: NavigationExtras = {
      state: {
        extradata: row 
      }
    };
    this.router.navigate(['/home/booknow'], navigationExtras);
  
   } 

}
