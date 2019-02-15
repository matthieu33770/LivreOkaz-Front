import { Component, OnInit } from '@angular/core';
import { Ouvrage } from '../Model/ouvrage';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-ouvrage-consultation',
  templateUrl: './ouvrage-consultation.component.html',
  styleUrls: ['./ouvrage-consultation.component.css']
})
export class OuvrageConsultationComponent implements OnInit {

  idOuvrage: number;
  detailedBook: Ouvrage = new Ouvrage(0, '', '', '', '', '', '', 0, 0, 0, 0, null, null, null);

  constructor(private route: ActivatedRoute,
              private dataService: DataServiceService,
              private router: Router) { }

  ngOnInit() {
    this.idOuvrage = +this.route.snapshot.params.idOuvrage;
    console.log(this.idOuvrage);

    this.dataService.findOuvrage(this.idOuvrage).subscribe(ouvrage => {
      this.detailedBook = ouvrage;
      console.log(this.detailedBook);
    });
  }
}
