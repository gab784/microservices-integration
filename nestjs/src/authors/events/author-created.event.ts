export class AuthorCreatedEvent {
    constructor(
      public readonly authorId: number,
      public readonly authorName: string,
      public readonly userId: number,
    ) {}
  }
  