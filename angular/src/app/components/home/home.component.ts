import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchControl = new FormControl();
  searchOptions = ['dummy1', 'dummy2'];
  filteredSearch: Observable<string[]>;

  ngOnInit() {
    this.filteredSearch = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.getSearchResults(value)));
  }
  getSearchResults(filterValue) {
    return this.searchOptions;
  }
}
