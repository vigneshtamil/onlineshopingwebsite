import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistComponent } from './account/wishlist/wishlist.component';

import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ContactComponent } from './account/contact/contact.component';
import { CheckoutComponent } from './account/checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchComponent } from './search/search.component';
import { TypographyComponent } from './typography/typography.component';
import { ReviewComponent } from './review/review.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CompareOneComponent } from './compare/compare-one/compare-one.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';
import { CollectionComponent } from './collection/collection.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { ErrorComponent } from './error/error.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FaqComponent } from './faq/faq.component';
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { BlogNoSidebarComponent } from './blog/blog-no-sidebar/blog-no-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { GridTwoComponent } from './portfolio/grid-two/grid-two.component';
import { GridThreeComponent } from './portfolio/grid-three/grid-three.component';
import { GridFourComponent } from './portfolio/grid-four/grid-four.component';
import { MasonryGridTwoComponent } from './portfolio/masonry-grid-two/masonry-grid-two.component';
import { MasonryGridThreeComponent } from './portfolio/masonry-grid-three/masonry-grid-three.component';
import { MasonryGridFourComponent } from './portfolio/masonry-grid-four/masonry-grid-four.component';
import { MasonryFullWidthComponent } from './portfolio/masonry-full-width/masonry-full-width.component';
import { AddressbookComponent } from './account/addressbook/addressbook.component';
import { AddresslistComponent } from './account/addresslist/addresslist.component';
import { ProfilecartComponent } from './account/profilecart/profilecart.component';
import { ProfilewishlistComponent } from './account/profilewishlist/profilewishlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RevieworderComponent } from './revieworder/revieworder.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';


const routes: Routes = [
  //ProfilecartComponent
  {
    path: 'profilewishlist',
    component: ProfilewishlistComponent
  },
  {
    path: 'profilecart',
    component: ProfilecartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  // {
  //   path: 'cart',
  //   component: CartComponent
  // },
  {
    path: 'addresslist',
    component: AddresslistComponent
  },
  //AddresslistComponent
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'addressbook',
    component: AddressbookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'changepassword',
    component: ForgetPasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'order/success',
    component: OrderSuccessComponent
  },
  {
    path: 'compare/one',
    component: CompareOneComponent
  },
  {
    path: 'compare/two',
    component: CompareTwoComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'lookbook',
    component: LookbookComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'comingsoon',
    component: ComingSoonComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'blog/left/sidebar',
    component: BlogLeftSidebarComponent
  },
  {
    path: 'blog/right/sidebar',
    component: BlogRightSidebarComponent
  },
  {
    path: 'blog/no/sidebar',
    component: BlogNoSidebarComponent
  },
  {
    path: 'blog/details',
    component: BlogDetailsComponent
  },
  {
    path: 'portfolio/grid/two',
    component: GridTwoComponent
  },
  {
    path: 'portfolio/grid/three',
    component: GridThreeComponent
  },
  {
    path: 'portfolio/grid/four',
    component: GridFourComponent
  },
  {
    path: 'portfolio/masonry/grid/two',
    component: MasonryGridTwoComponent
  },
  {
    path: 'portfolio/masonry/grid/three',
    component: MasonryGridThreeComponent
  },
  {
    path: 'portfolio/masonry/grid/four',
    component: MasonryGridFourComponent
  },
  {
    path: 'portfolio/masonry/full-width',
    component: MasonryFullWidthComponent
  },
  {
    path: 'orderlist',
    component: OrderlistComponent
  },
  {
    path: 'orderdetail',
    component: OrderdetailComponent
  },
  {
    path: 'revieworder',
    component: RevieworderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
