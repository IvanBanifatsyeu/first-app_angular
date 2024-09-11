import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { HoustingService } from "../services/housting.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [HousingLocationComponent],
	template: `
		<section>
			<form>
				<input type="text" placeholder="Filter by city" #filter />
				<button
					class="primary"
					type="button"
					(click)="filterResults(filter.value)"
				>
					Search
				</button>
			</form>
		</section>
		<section class="results">
			@for (housingLocation of filteredLocationList; track $index) {
			<app-housing-location
				[housingLocation]="housingLocation"
			></app-housing-location>
			}
		</section>
	`,
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	baseUrl = "/asset";
	housingLocationList: HousingLocation[] = [];
	filteredLocationList: HousingLocation[] = [];
	housingService: HoustingService = inject(HoustingService);
	constructor() {
		this.housingService
			.getAllHousingLocations()
			.then((housingLocationList: HousingLocation[]) => {
				this.housingLocationList = housingLocationList;
				this.filteredLocationList = housingLocationList;
			});
	}

	filterResults(text: string) {
		if (!text) this.filteredLocationList = this.housingLocationList;

		this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
	}
}
