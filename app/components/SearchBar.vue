<script setup lang="ts">
import SearchBox from './SearchBox.vue';

const Location = reactive({
	onFocus: (event: any) => {
		showDropdown(Location);
	},
	onType: (event: any) => {
		Location.selection = event.target.value;
	},
	list: (() => {
		let regions = new Array();
		regionsCollection.forEach((item) => {
			let newItem = { iconSrc: '' };
			regions.push(Object.assign(newItem, item));
			newItem.iconSrc = "/assets/icons/location_white.svg";
		});
		regions.at(0).iconSrc = "/assets/icons/location_gray.svg";
		return regions;
	})(),
	dropdown: false,
	selection: ""
});
const Accomodation = reactive({
	onFocus: (event: any) => {
		showDropdown(Accomodation);
	},
	list: accomodationTypeCollection,
	dropdown: false,
	selection: ""
});
const Dates = reactive({
	onFocus: (event: any) => {
		Dates.dropdown = true;
	},
	dropdown: false,
	selection: ""
});
const Guest = reactive({
	onFocus: (event: any) => {
		Guest.dropdown = true;
	},
	dropdown: false,
	selection: ""
});

function selectLocation(selection: string) {
	Location.selection = selection;
	for (let item of Location.list) {
		item.iconSrc = "/assets/icons/location_white.svg";
		if (item.label == selection) {
			item.iconSrc = "/assets/icons/location_gray.svg"
		}
	}
}
function select(controller: { selection: string}, selection: string) {
	controller.selection = selection;
}
function showDropdown(controller: { dropdown: boolean} ) {
	setTimeout(() => {
		controller.dropdown = true;
	}, 170);
}

</script>

<template>
	<div class="w-5/6 flex bg-white border border-grayscale-05 rounded-[5px] p-6 gap-3 font-mulish h-32">
		<div class="flex flex-col w-full gap-2">
			<SearchBox label="Lokacija" iconSrc="/assets/icons/location_blue.svg" input="text" placeholder="Odaberi" :controller="Location"/>
			<Dropdown v-if="Location.dropdown" :list="Location.list" @select="(selection: any) => { selectLocation(selection) }" class="relative z-10 top-[-4px] bg-white w-full rounded-[5px] shadow-xl p-2 gap-2 flex flex-col" classItem="cursor-pointer flex gap-[10px]" classLabel="font-mulish font-medium text-sm text-grayscale-60" classIcon="size-4" />
		</div>
		<div class="flex flex-col w-full gap-2">
			<SearchBox label="Tip smještaja" iconSrc="/assets/icons/accomodation.svg" input="button" placeholder="Odaberi tip" :controller="Accomodation"/>
			<Dropdown v-if="Accomodation.dropdown" :list="Accomodation.list" @select="(selection: any) => { select(Accomodation, selection) }" class="relative z-10 top-[-4px] bg-white w-full rounded-[5px] shadow-xl p-2 gap-2 flex flex-col" classItem="cursor-pointer flex" classLabel="font-mulish font-medium text-sm text-grayscale-60" classIcon="size-0"/>
		</div>
		<div class="flex flex-col w-full gap-2">
			<SearchBox label="Datum prijave/odjave" iconSrc="/assets/icons/date.svg" input="button" placeholder="Odaberi datum" :controller="Dates"/>
			<DatePicker v-if="Dates.dropdown" class="relative z-10 top-[-4px] bg-white rounded-[5px]" />
		</div>
		<div class="flex flex-col w-full gap-2">
			<SearchBox label="Broj gostiju" iconSrc="/assets/icons/guest.svg" input="button" placeholder="0 odraslih, 0 djece" :controller="Guest"/>
		</div>
		<!-- search button -->
		<div class="bg-primary-80 flex px-4 py-3 h-12 self-end gap-2 rounded-[5px] w-96">
			<img class="size-6" src="/assets/icons/search.svg"/>
			<div class="text-white text-base font-bold w-full">Traži</div>
		</div>
	</div>
</template>