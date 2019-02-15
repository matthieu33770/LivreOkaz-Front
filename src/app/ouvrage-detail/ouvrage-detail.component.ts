import { Component, OnInit } from '@angular/core';
import { Ouvrage } from '../Model/ouvrage';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { EditeurDataService } from '../editeur-data.service';
import { Editeur } from '../Model/editeur';
import { Genre } from '../Model/genre';

@Component({
  selector: 'app-ouvrage-detail',
  templateUrl: './ouvrage-detail.component.html',
  styleUrls: ['./ouvrage-detail.component.css']
})
export class OuvrageDetailComponent implements OnInit {

  idOuvrage: number;
  idEditeur: number;
  editeurList: Editeur[];
  genreList: Genre[];
  editeurs: Editeur[] = [];
  editeur: Editeur;
  ouvrageList: BehaviorSubject<Ouvrage[]>;
  editedBook: Ouvrage = new Ouvrage(null, '', '', '', '', '', '', 0, 0, 0, 0, null, null, null);

  constructor(private route: ActivatedRoute,
              private dataService: DataServiceService,
              private editeurService: EditeurDataService,
              private router: Router) { }

  ngOnInit() {
    this.idOuvrage = +this.route.snapshot.params.idOuvrage;
    this.idEditeur = +this.route.snapshot.params.idEditeur;
    this.getEditeur();
    this.getGenre();
    this.dataService.findOuvrage(this.idOuvrage).subscribe(ouvrage => {
      this.editedBook = ouvrage;
    });
  }
  getEditeur(): void {
    this.editeurService.getEditeurs().subscribe(Editeurs => this.editeurList = Editeurs);
  }

  getGenre(): void {
    this.editeurService.getGenres().subscribe(Genres => this.genreList = Genres);
  }

  getEditeurByName(nomEditeur: string) {
    this.editeurService.getEditeurByName(nomEditeur).subscribe(editeur => this.editeur = editeur);
  }

  onSave() {
    // Vérifier si on est en édition ou en création
    if (!this.idOuvrage) {
      this.dataService.createOuvrage(this.editedBook);
    } else {
      this.dataService.updateOuvrage(this.editedBook);
    }

    // Utiliser la fonction router.navigate() pour renvoyer sur la liste de timelines
    this.router.navigate(['homebook/allbooks']);
  }

  deleteOuvrage(editedBook) {
    console.log(editedBook.idOuvrage);
    this.dataService.deleteOuvrage(editedBook);
    this.router.navigate(['homebook/allbooks']);
  }

}
