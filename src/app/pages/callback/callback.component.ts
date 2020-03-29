import { AuthService } from "./../../auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.scss"]
})
export class CallbackComponent implements OnInit {
  constructor(private auth: AuthService) {
    // Check for authentication and handle if hash present
    auth.handleAuth();
  }

  ngOnInit(): void {}
}
