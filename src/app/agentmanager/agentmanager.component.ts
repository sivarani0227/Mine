import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild } from '@angular/core';
import { AgentApiService } from '../agent-api-service';
import { TravelAgent } from '../travel-agent';
import { ComponentAdderService } from '../component-adder.service';
import { AgentReviewComponent } from '../agent-review/agent-review.component';

@Component({
  selector: 'app-agentmanager',
  templateUrl: './agentmanager.component.html',
  styleUrls: ['./agentmanager.component.css']
})
export class AgentmanagerComponent implements OnInit {

   agentList: TravelAgent[];
   queryString: '';
   agent: TravelAgent;

   @ViewChild ('placeHolder', {read: ViewContainerRef}) ViewRef: ViewContainerRef;
    constructor(private service: AgentApiService, private adderService: ComponentAdderService) { }
    ngOnInit() {

    this.service.findAllAgents().subscribe(data => this.agentList = data);

    }
    showDetails(id) {
      this.adderService.setViewContainer(this.ViewRef);
      this.adderService.addComponet(AgentReviewComponent, 'siva');
    }
    submit(frmData) {
      this.agent = frmData;
      console.log(this.agent);
      this.service.addAgent(this.agent).subscribe(resp => console.log(resp));
    }

}
