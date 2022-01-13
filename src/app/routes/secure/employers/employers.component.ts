import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployersService} from "../../../services/employers.service";
import {CustomModalComponent, ModalConfig} from "../../../shared/custom-modal";

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {
  employersArray = [];
  modalConfig: ModalConfig = {
    modalTitle: 'Hallo ik ben een Modal',
    closeButtonLabel: 'Close',
    dismissButtonLabel: 'Dismiss'
  };
  isSuccessful = false;
  successMessage = '';
  errorMessage = '';

  constructor(private employers: EmployersService) {
  };

  ngOnInit(): void {
    this.employers.all().subscribe({
      next: (result) => {
        this.employersArray = result['data'];
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  @ViewChild('modal') private modalComponent: CustomModalComponent

  async openModal() {
    return await this.modalComponent.open()
  }

  public delete(id) {
    this.employers.delete(id).subscribe({
      next: (result: { message: any; }) => {
        this.ngOnInit();
        this.successMessage = result.message;
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;

      }
    });
  }

  public removeMessages(){
    setTimeout(()=>{
      this.successMessage = '';
      this.errorMessage = '';
    }, 1500);
  }
}
