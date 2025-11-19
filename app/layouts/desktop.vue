<script setup>

function scrollToTop() {
	window.scrollTo({
		top: 0, // Scroll to the top of the page
		behavior: 'smooth' // For smooth scrolling animation
	});
}
</script>
<template>
	<div>
		<!-- nav bar -->
		<nav class="bg-white sticky top-0 z-[9999] flex items-center justify-between px-28 py-2 h-21 text-2xl border-b border-grayscale-10">
			<div class="flex items-center h-10 gap-1 p-2">
				<div class="p-0.5"><img class="size-5" src="/assets/icons/house_search.svg"/></div>
				<div class="text-inherit font-museomoderno">Crobnb</div>
			</div>
			<div class="flex items-center gap-8 justify-between font-mulish">
				<div>Tipovi smještaja</div>
				<div>Regije</div>
				<div>Novosti</div>
			</div>
			<div class="flex items-center gap-[27px]">
				<img src="/assets/icons/heart.svg" class="p-3"/>
				<div class="flex items-center gap-1">
					<div class="flex flex-col items-center gap-1 p-1">
						<img src="/assets/icons/flag_croatia.svg"/>
						<div class="text-xs text-grayscale-80">HRV</div>
					</div>
					<img src="/assets/icons/triangle_bracket_down.svg"/>
				</div>
			</div>
		</nav>
		<!-- here comes the page, in the slot element -->
		<slot />
		<!-- footer -->
		<div class="flex flex-col pt-10 bg-primary-10 border-t border-grayscale-40">
			<div class="flex flex-row justify-between px-28 py-6">
				<div class="font-mulish flex gap-11">
					<div class="flex flex-col justify-start gap-3">
						<div class="font-bold">Crobnb.hr</div>
						<div>info@crobnb.hr</div>
						<div>01 2377 654</div>
					</div>
					<div class="flex flex-col justify-start gap-3">
						<div class="font-bold">Tipovi smještaja</div>
						<div>Hoteli</div>
						<div>Apartmani</div>
						<div>Mobilne kućice</div>
						<div>Ville</div>
						<div>Turistička naselja</div>
						<div>Skijališta</div>
					</div>
					<div class="flex flex-col justify-start gap-3">
						<div class="font-bold">Regije</div>
						<div>Istočna Hrvatska</div>
						<div>Središnja Hrvatska</div>
						<div>Gorska Hrvatska</div>
						<div>Sjeverna Hrvatska</div>
						<div>Središnja Dalmacija</div>
						<div>Južna Dalmacija</div>
					</div>
					<div class="flex flex-col justify-start gap-3">
						<div class="font-bold">Prati nas</div>
						<div><img src="/assets/icons/facebook.svg"/></div>
						<div><img src="/assets/icons/twitter.svg"/></div>
						<div><img src="/assets/icons/instagram.svg"/></div>
					</div>
				</div>
				<!-- Scroll to top -->
				<div>
					<button class="border rounded-[5px] border-primary-80 p-3 hover:opacity-65">
						<div @click="scrollToTop()" ><img src="/assets/icons/arrow_up.svg"/></div>
					</button>
				</div>
			</div>
			<div class="flex items-center justify-between px-12 py-4 bg-primary-05 border-t border-grayscale-40">
				<div class="font-ttnorms text-base">© Crobnb 2023. All rights reserved</div>
				<div class="p-1"><img class="size-8" src="/assets/icons/house_search.svg"/></div>
			</div>
		</div>
	</div>
</template>