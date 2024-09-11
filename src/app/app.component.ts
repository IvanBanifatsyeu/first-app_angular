import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [HomeComponent, RouterModule],
	template: `
		<main>
			<header class="brand-name">
				<a [routerLink]='[""]'>

					<img
						src="../assets/logo.svg"
						alt="logo"
						class="brand-logo"
						aria-hidden="true"
					/>
				</a>
			</header>
      <section class="content">
        <!-- <app-home></app-home> -->
		 <router-outlet></router-outlet>
      </section>
		</main>
	`,
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "default";
}
