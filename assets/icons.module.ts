import { NgModule } from '@angular/core';
import { LucideAngularModule, Menu, House, User, Search } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Menu,
      House,
      User,
      Search,
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
