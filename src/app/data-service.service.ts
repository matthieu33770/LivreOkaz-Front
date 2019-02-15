import { Injectable } from '@angular/core';
import { Ouvrage } from './Model/ouvrage';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // La liste des ouvrages de l'application
  private availableOuvrages: Ouvrage [];

  // La liste observable que l'on rend visible partout dans l'application
  availableOuvrages$: BehaviorSubject<Ouvrage[]> = new BehaviorSubject(this.availableOuvrages);

  constructor(private httpClient: HttpClient) { }

  /**
   * La fonction getOuvrages() est privée car elle n'a besoin d'être appellée que dans le service.
   */
  private getOuvrages(): Observable<Ouvrage[]> {
    return this.httpClient.get<Ouvrage[]>('http://localhost:8080/homebook/allbooks');
  }

  public publishOuvrages() {
    this.getOuvrages().subscribe(
      ouvrageList => {
        this.availableOuvrages = ouvrageList;
        this.availableOuvrages$.next(this.availableOuvrages);
      });
  }

  /**
   * Cette fonction permet de trouver un ouvrage dans la liste des ouvrages chargés par l'application
   * grâce à son ID.
   * @param idOuvrage l'id qu'il faut rechercher dans la liste.
   */
  public findOuvrage(idOuvrage: number): Observable<Ouvrage> {
    if (idOuvrage) {
      if (!this.availableOuvrages) {
        return this.getOuvrages().pipe(map(ouvrages => ouvrages.find(ouvrage => ouvrage.idOuvrage === idOuvrage)));
      }
      return of(this.availableOuvrages.find(ouvrage => ouvrage.idOuvrage === idOuvrage));
    } else {
      return of(new Ouvrage(null, '', '', '', '', '', '', 0, 0, 0, 0, null, null, null));
    }
  }

  /**
   * Fonction de création d'un nouveau livre.
   * Elle met à jour notre liste d'ouvrages et notre liste observable.
   * @param newOuvrage le nouveau livre à créer
   */
  public createOuvrage(newOuvrage: Ouvrage) {
    console.log(newOuvrage);
    this.httpClient.post<Ouvrage>('http://localhost:8080/homebook/createbook', newOuvrage).subscribe(
      createOuvrage => {
        this.availableOuvrages.push(createOuvrage);
      }
    );
  }

  /**
   * Fonction de mise à jour d'un ouvrage
   * @param ouvrage l'ouvrage à mettre à jour
   */
  public updateOuvrage(ouvrage: Ouvrage) {
    this.httpClient.put<Ouvrage>(`http://localhost:8080/homebook/modifybook/${ouvrage.idOuvrage}`, ouvrage).subscribe(
      updateOuvrage => {
        this.availableOuvrages$.next(this.availableOuvrages);
      }
    );
  }

  /**
   * Fonction de suppression d'un ouvrage
   * @param ouvrage l'ouvrage à supprimer
   */
  public deleteOuvrage(ouvrage: Ouvrage) {
      this.httpClient.delete<Ouvrage>(`http://localhost:8080/homebook/delete/${ouvrage.idOuvrage}`).subscribe(
        deleteOuvrage => {
          this.availableOuvrages = this.availableOuvrages.splice(this.availableOuvrages.indexOf(ouvrage), 1);
        }
      );
  }
}


