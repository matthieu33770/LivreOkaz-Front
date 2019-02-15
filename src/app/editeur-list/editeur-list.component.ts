import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { Editeur } from '../Model/editeur';
import { Router } from '@angular/router';
import { EditeurDataService } from '../editeur-data.service';
import { Genre } from '../Model/genre';

@Component({
  selector: 'app-editeur-list',
  templateUrl: './editeur-list.component.html',
  styleUrls: ['./editeur-list.component.css']
})
export class EditeurListComponent implements OnInit {

  editeurList: BehaviorSubject<Editeur[]>;

  displayedColumns: string[] = ['select', 'idEditeur', 'nomEditeur'];
  displayedColumnsGenre: string[] = ['select', 'idGenre', 'typeGenre'];
  dataSource = new MatTableDataSource<Editeur>();
  dataSourceGenre = new MatTableDataSource<Genre>();
  selection = new SelectionModel<Editeur>(false, []);
  selectionGenre = new SelectionModel<Genre>(false, []);

  constructor(private router: Router, private editeurService: EditeurDataService) { }

  ngOnInit() {
    this.getEditeur();
    console.log(this.getEditeur);
    this.getGenre();
  }

  getEditeur(): void {
    this.editeurService.getEditeurs().subscribe(Editeurs => this.dataSource = new MatTableDataSource<Editeur>(Editeurs));
  }

  onEdit(selected: Editeur[]) {
    this.router.navigate(['detailediteur/' + selected[0].idEditeur]);
  }

  delete(selected: Editeur[]) {
    console.log(selected);
    if (selected.length !== 0) {
      console.log(this.editeurService.availableEditeur);
      this.editeurService.availableEditeur.splice(this.editeurService.availableEditeur.indexOf(selected[0]), 1);
      this.getEditeur();
      this.selection = new SelectionModel<Editeur>(false, []);
    }
  }

  getGenre(): void {
    this.editeurService.getGenres().subscribe(Genres => this.dataSourceGenre = new MatTableDataSource<Genre>(Genres));
  }

  onEditGenre(selected: Genre[]) {
    this.router.navigate(['detailgenre/' + selected[0].idGenre]);
  }

  deleteGenre(selected: Genre[]) {
    if (selected.length !== 0) {
      this.editeurService.availableGenre.splice(this.editeurService.availableGenre.indexOf(selected[0]), 1);
      this.getGenre();
      this.selectionGenre = new SelectionModel<Genre>(false, []);
    }
  }

}
