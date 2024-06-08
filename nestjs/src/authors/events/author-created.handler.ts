import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AuthorCreatedEvent } from './author-created.event';

@EventsHandler(AuthorCreatedEvent)
export class AuthorCreatedHandler implements IEventHandler<AuthorCreatedEvent> {
  handle(event: AuthorCreatedEvent) {
    console.log(`Author Created Event: ${event.authorId}, ${event.authorName}, ${event.userId}`);
    // Aquí puedes agregar el comportamiento que deseas ejecutar cuando se publique el evento
    // Por ejemplo, enviar una notificación, actualizar otro sistema, etc.
  }
}
