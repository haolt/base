import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: './statistics/statistics.module#StatisticsModule'
    //   },
    //   {
    //     path: 'announcements',
    //     loadChildren: './announcement/announcement.module#AnnouncementModule'
    //   },
    //   {
    //     path: 'requests',
    //     loadChildren: './request/request.module#RequestModule'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
