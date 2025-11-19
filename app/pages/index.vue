<script setup lang="ts">
import Collection from '~/components/Collection.vue';
import { accomodationTypeCollection, regionsCollection } from '~/utils/common';

</script>

<template>
	<div>
		<UApp>
			<NuxtLayout name="desktop">
				<div class="min-h-[600px] h-[2900px]">
					<Hero />
					<div class="relative top-[388px] flex flex-col gap-[74px] items-center">
						<SearchBar />
						<Collection :list="accomodationTypeCollection" title="Tipovi smještaja" class="w-5/6 flex flex-col gap-[27px]" classCollection="flex gap-8" classItem="grow flex flex-col gap-[6px] p-4 items-center border border-grayscale-10 rounded-[5px] items-center hover:border-primary-50 group" classLabel="flex justify-center gap-1 p-2 w-full font-mulish text-base" classImage="group-hover:opacity-65"/>
						<Collection :list="regionsCollection" title="Regije" class="w-5/6 flex flex-col gap-[34px]" classCollection="grid grid-cols-4 gap-[34px]" classItem="rounded-[5px] h-[190px] group" classLabel="relative flex justify-between items-center p-2 bg-black/30 top-[-48px] text-white font-bold font-mulish text-[22px]/[32px] rounded-b-[5px] whitespace-nowrap group-hover:text-primary-20" classImage="object-cover h-[190px] w-full rounded-[5px]"/>
						<News />
						<div class="flex px-28 relative top-[-32px] justify-between gap-44 items-center">
							<div class="flex flex-col gap-[22px] w-5/6">
								<div class="font-mulish text-[32px]/[44px] font-bold">O nama</div>
								<div class="flex flex-col gap-[22px] text-grayscale-80 font-mulish text-base">
									<div>
										Crobnb je platforma za iznajmljivanje smještaja koja omogućava putnicima da brzo i jednostavno pronađu savršeni smještaj
										za svoj sljedeći put. Uz širok apartmana, vila i hotela diljem Hrvatske,
										naša platforma nudi putnicima mogućnost da pronađu idealan smještaj za svoje potrebe i proračun.
									</div>
									<div>
										Korisničko iskustvo je naš prioritet, stoga smo dizajnirali platformu koja je jednostavna za upotrebu i
										koja nudi detaljne informacije o smještaju, uključujući slike, informacije o lokaciji, cijene i dostupnost.
									</div>
									<div>
										Naš cilj je omogućiti putnicima da jednostavno i brzo pronađu smještaj po svojoj mjeri te da se osjećaju
										sigurno i pouzdano prilikom rezerviranja smještaja putem naše platforme.
									</div>
								</div>
							</div>
							<div class="w-2/3">
								<img class="w-full max-w-[425px]" src="/assets/images/about_us.png"/>
							</div>
						</div>
					</div>
				</div>
			</NuxtLayout>
		</UApp>
	</div>
</template>
