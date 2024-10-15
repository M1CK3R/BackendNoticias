import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, ContactsModule],
  controllers: [AppController],
})
export class AppModule {}