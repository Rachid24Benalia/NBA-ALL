import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseError } from '@firebase/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router // Inject Firebase auth service
  ) {}
  public check(){
    return this.afAuth.authState.subscribe(user => {
        if (!user) {
          // Redirect to login page
          this.router.navigate(['/login']);
        }
  });
}
async signUp(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await userCredential.user?.sendEmailVerification();
      await this.router.navigate(['/login']);
    } catch (error: unknown) {
      window.alert("Error in sign up");
    }
  }
  public logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
  public signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            if (!user.emailVerified) {
              window.alert('Please verify your email address.');
              this.afAuth.signOut().then(() => {
                this.router.navigate(['/login']);
              });
            }
            this.router.navigate(['']);
          }
        });
      })
      .catch((error: FirebaseError) => {
        window.alert(error.message);
      });
  }
  
  
}