import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { AgentApiService } from './agent-api-service';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {
  viewContainer: ViewContainerRef;
  factory: ComponentFactory<{}>;
  constructor(private facResolver: ComponentFactoryResolver, private agentServie: AgentApiService) {}

    setViewContainer(viewContainer: ViewContainerRef) {
      this.viewContainer = viewContainer;
    }

    addComponet(compToAdd: any, name: any) {
     this.viewContainer.clear();
     this.factory = this.facResolver.resolveComponentFactory(compToAdd);
     const component = this.factory.create(this.viewContainer.parentInjector);
     this.agentServie.findAllAgents().subscribe();
     this.viewContainer.insert(component.hostView);
   }
}
