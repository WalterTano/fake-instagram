import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { DiscoverPageComponent } from './components/Discover/discover-page/discover-page.component';
import { ChatsPreviewComponent } from './components/Chats/chats-preview/chats-preview.component';
import { ProfilePageComponent } from './components/Profile/profile-page/profile-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'discoverPage', pathMatch: 'full'},
  {path: 'uploadPhoto', component:UploadPageComponent},
  {path: 'discoverPage', component:DiscoverPageComponent},
  {path: 'chats', component: ChatsPreviewComponent},
  {path: 'chats/:username', component: ChatsPreviewComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'profile/:username', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
