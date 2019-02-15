import { Auteur } from './auteur';
import { Genre } from './genre';
import { Editeur } from './editeur';

export class Ouvrage {

    constructor(public idOuvrage: number,
                public titre: string,
                public isbn: string,
                public imagecouv: string,
                public sujet: string,
                public description: string,
                public langue: string,
                public anneeParution: number,
                public quantiteStock: number,
                public prixNeuf: number,
                public prixVente: number,
                public auteur: Auteur [],
                public editeur: Editeur,
                public genre: Genre,
    ) {}
}
