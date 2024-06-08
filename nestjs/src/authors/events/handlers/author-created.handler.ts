import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AuthorCreatedEvent } from '../author-created.event';

@EventsHandler(AuthorCreatedEvent)
export class AuthorCreatedHandler implements IEventHandler<AuthorCreatedEvent> {
  handle(event: AuthorCreatedEvent) {
    console.log(`Author Created: ${event.authorName} (ID: ${event.authorId}) for User ID: ${event.userId}`);
    // Aquí puedes agregar lógica adicional, como notificaciones, logging, etc.
  }
}
