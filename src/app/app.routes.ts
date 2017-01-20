import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

const routes1 = [
  {path: '', component: HomeComponent}
];

export default RouterModule.forRoot(routes);
