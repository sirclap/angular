export class User {
  sub: number;
  email: string;

  constructor(object: any) {
    this.sub = object.sub ? object.sub : null;
    this.email = object.email ? object.email : null;
  }
}
