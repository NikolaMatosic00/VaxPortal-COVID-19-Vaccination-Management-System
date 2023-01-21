export class LoginDTO {
  email: string;
  lozinka: string;

  constructor(email: string, lozinka: string) {
    this.email = email;
    this.lozinka = lozinka;
  }
}
