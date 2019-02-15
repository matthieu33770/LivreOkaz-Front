import { Injectable } from '@angular/core';
import { Editeur } from './Model/editeur';
import { Genre } from './Model/genre';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditeurDataService {

  // La liste des éditeurs de l'application
  public availableEditeur: Editeur [];
  // La liste des genres de l'application
  public availableGenre: Genre [];

  // La liste observable que l'on rend visible partout dans l'application
  availableEditeur$: BehaviorSubject<Editeur[]> = new BehaviorSubject(this.availableEditeur);
  // La liste observable que l'on rend visible partout dans l'application
  availableGenre$: BehaviorSubject<Genre[]> = new BehaviorSubject(this.availableGenre);

  constructor(private httpClient: HttpClient) { }

   /**
   * La fonction getEditeurs() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  public getEditeurs(): Observable<Editeur[]> {
    return this.httpClient.get<Editeur[]>('http://localhost:8080/homeediteur/get/alleditors');
  }

  public publishEditeurs() {
    this.getEditeurs().subscribe(
      editeurList => {
        this.availableEditeur = editeurList;
        this.availableEditeur$.next(this.availableEditeur);
      });
  }

  /**
   * Cette fonction permet de trouver un editeur dans la liste des editeurs chargés par l'application
   * grâce à son ID.
   * @param idEditeur l'id qu'il faut rechercher dans la liste.
   */
  public findEditeur(idEditeur: number): Observable<Editeur> {
    if (idEditeur) {
      if (!this.availableEditeur) {
        return this.getEditeurs().pipe(map(editeurs => editeurs.find(editeur => editeur.idEditeur === idEditeur)));
      }
      return of(this.availableEditeur.find(editeur => editeur.idEditeur === idEditeur));
    } else {
      return of(new Editeur(null, ''));
    }
  }

  /**
   * Fonction de création d'un nouveau livre.
   * Elle met à jour notre liste d'ouvrages et notre liste observable.
   * @param newEditeur le nouveau livre à créer
   */
  public createEditeur(newEditeur: Editeur) {
    this.httpClient.post<Editeur>('http://localhost:8080/homeediteur/post', newEditeur).subscribe(
      createEditeur => {
        this.availableEditeur.push(createEditeur);
      }
    );
  }

  getEditeurByName(nomEditeur: string): Observable<Editeur> {
    return of(this.availableEditeur.find(editeur => editeur.nomEditeur === nomEditeur));
  }

  /**
   * La fonction getGenres() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  public getGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>('http://localhost:8080/homegenre/get/allgenres');
  }

  public publishGenre() {
    this.getGenres().subscribe(
      genreList => {
        this.availableGenre = genreList;
        this.availableGenre$.next(this.availableGenre);
      });
  }

  /**
   * Cette fonction permet de trouver un editeur dans la liste des editeurs chargés par l'application
   * grâce à son ID.
   * @param idGenre l'id qu'il faut rechercher dans la liste.
   */
  public findGenre(idGenre: number): Observable<Genre> {
    if (idGenre) {
      if (!this.availableGenre) {
        return this.getGenres().pipe(map(genres => genres.find(genre => genre.idGenre === idGenre)));
      }
      return of(this.availableGenre.find(genre => genre.idGenre === idGenre));
    } else {
      return of(new Genre(null, ''));
    }
  }

  /**
   * Fonction de création d'un nouveau livre.
   * Elle met à jour notre liste d'ouvrages et notre liste observable.
   * @param newGenre le nouveau livre à créer
   */
  public createGenre(newGenre: Genre) {
    this.httpClient.post<Genre>('http://localhost:8080/homegenre/post', newGenre).subscribe(
      createGenre => {
        this.availableGenre.push(createGenre);
      }
    );
  }
}
