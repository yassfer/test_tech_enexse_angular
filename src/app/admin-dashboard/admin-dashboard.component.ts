import { Component, OnInit } from '@angular/core';
import { AgentView } from '../entities/AgentView';
import { Status } from '../entities/Status';
import { AdminDashboardService } from './admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  agentView!: AgentView;
  activeAgents: Number = 0;
  disconnectedAgents: Number = 0;
  pendingAgents: Number = 0;
  neverConnectedAgents: Number = 0;
  enum: typeof Status = Status;
  
  constructor(private adminDashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    this.reloadAgentStatus();
  }

  reloadAgentStatus() {
    this.adminDashboardService.getAgentByStatus().subscribe(data => {
      if (data != null) {
        this.agentView = data;
        console.log(this.agentView)
      }
    }, error => {
      console.error(error);
    });
  }

}
