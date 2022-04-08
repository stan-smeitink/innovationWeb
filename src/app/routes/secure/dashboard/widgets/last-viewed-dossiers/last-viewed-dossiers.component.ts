import { Component, OnInit } from '@angular/core';
import {DossiersService} from "../../../../../services/dossiers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-last-viewed-dossiers',
  templateUrl: './last-viewed-dossiers.component.html',
  styleUrls: ['./last-viewed-dossiers.component.scss']
})
export class LastViewedDossiersComponent implements OnInit {

  public dossiers = [];
  constructor(
    private dossierService: DossiersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getLastViewedDossiers();
    });
  }

  private getLastViewedDossiers() {
    this.dossierService.getLastViewedDossiers().subscribe({
      next: (data: { result: any }) => {
        if (data['data'].length > 0) {
          this.dossiers = data['data'];
        }
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }
}
