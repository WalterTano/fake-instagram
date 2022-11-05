import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PostImageComponent } from './components/Discover/post-image/post-image.component';
import { PostCarouselComponent } from './components/Discover/post-carousel/post-carousel.component';
import { DiscoverPageComponent } from './components/Discover/discover-page/discover-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { UploadPageButtonComponent } from './components/upload-page/upload-page-button/upload-page-button.component';
import { UploadDecriptionBarComponent } from './components/upload-page/upload-decription-bar/upload-decription-bar.component';
import { FullSizeImageComponent } from './components/full-size-image/full-size-image.component';
import { ChatsPreviewComponent } from './components/Chats/chats-preview/chats-preview.component';
import { ChatComponent } from './components/Chats/chats-preview/chat/chat.component';
import { ProfilePageComponent } from './components/Profile/profile-page/profile-page.component'
import { ProfileHeaderComponent } from './components/Profile/profile-header/profile-header.component';
import { PhotoProfileGridComponent } from './components/Profile/photo-profile-grid/photo-profile-grid.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-page/search-bar/search-bar.component';
import { SearchPageGridComponent } from './components/search-page/search-page-grid/search-page-grid.component';
import { ChatMessageVuewComponent } from './components/Chats/chats-preview/chat-message-vuew/chat-message-vuew.component';
import { ChatMessageComponent } from './components/Chats/chats-preview/chat-message-vuew/message-grid/chat-message/chat-message.component';
import { MessageGridComponent } from './components/Chats/chats-preview/chat-message-vuew/message-grid/message-grid.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeadingComponent,
    InfoUserComponent,
    UserIconComponent,
    PostImageComponent,
    PostCarouselComponent,
    DiscoverPageComponent,
    NavBarComponent,
    UploadButtonComponent,
    UploadPageComponent,
    UploadPageButtonComponent,
    UploadDecriptionBarComponent,
    FullSizeImageComponent,
    ChatsPreviewComponent,
    ChatComponent,
    ProfilePageComponent,
    ProfileHeaderComponent,
    PhotoProfileGridComponent,
    SearchPageComponent,
    SearchBarComponent,
    SearchPageGridComponent,
    ChatMessageVuewComponent,
    ChatMessageComponent,
    MessageGridComponent,
    ModalUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
