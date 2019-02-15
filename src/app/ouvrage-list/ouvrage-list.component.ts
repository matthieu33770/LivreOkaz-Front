import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ouvrage } from '../Model/ouvrage';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-ouvrage-list',
  templateUrl: './ouvrage-list.component.html',
  styleUrls: ['./ouvrage-list.component.css']
})
export class OuvrageListComponent implements OnInit {

  ouvrageList: BehaviorSubject<Ouvrage[]>;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.ouvrageList = this.dataService.availableOuvrages$;
  }
}
