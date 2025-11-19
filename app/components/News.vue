<script setup>

const { $directus, $readItems } = useNuxtApp();

const News = ref([]);
const NewsTriples = ref([]);

try {
	News.value = await $directus.request($readItems("news", {
		sort: [ '-date' ],
		limit: 9
	}));
	for (let i = 0; i < News.value.length % 3; i++) News.value.push({
		"event_category": '/',
		"title": '/',
		"date": '/',
		"description": '/',
		"image": ''
	})
	for (let i = 0; i < News.value.length; i++) {
		if (i == 0 || i % 3 == 0) NewsTriples.value.push([]);
		NewsTriples.value.at(-1).push(News.value[i]);
	}
} catch(error) {
	console.log(error);
	NewsTriples.value.push([]);
	NewsTriples.value.at(0).push({ title: 'Couldn\'t load news', image: 'no' });
	NewsTriples.value.at(0).push({ title: '/', image: '' });
	NewsTriples.value.at(0).push({ title: '/', image: '' });
}

const blueDot = ref(null);
const current = ref(1);
function moveDot(direction) {
	if (direction == "forward") {
		current.value++;
		if (current.value > NewsTriples.value.length) current.value = NewsTriples.value.length; 
	}
	else if(direction == 'backward') {
		current.value--;
		if (current.value < 1) current.value = 1;
	}
}

</script>
<template>
	<div class="w-full flex flex-col items-center justify-between bg-primary-05 p-10 gap-8 font-mulish">
		<div class="w-5/6 flex justify-between">
			<div class="font-mulish text-[32px]/[44px] font-bold">Novosti</div>
			<div class="flex items-center gap-2 w-[167px]">
				<div class="text-primary-80 text-base font-bold">Vidi sve novosti</div>
				<img class="size-6" src="/assets/icons/triangle_bracket_right_blue.svg"/>
			</div>
		</div>
		<div class="flex items-center gap-[29px] w-full">
			<div @click="() => { moveDot('backward') }" class="w-[130px] hover:opacity-65">
				<img class="size-10" src="/assets/icons/triangle_bracket_left_blue.svg"/>
			</div>
			<NewsCard v-for="item in NewsTriples.at(current-1)" :event_category="item.event_category || ''" :title="item.title" :date="item.date || ''" :description="item.description || ''" :image="item.image || ''" />
			<div @click="() => { moveDot('forward') }" class="w-[130px] hover:opacity-65">
				<img class="size-10" src="/assets/icons/triangle_bracket_right_blue.svg"/>
			</div>
		</div>
		<div class="flex gap-3">
			<img ref="blueDot" src="/assets/icons/dot_blue.svg" :style="`order: ${current}`"/>
			<img v-for="n in (NewsTriples.length-1)" :style="`order: ${n}`" src="/assets/icons/dot_gray.svg"/>
		</div>
	</div>
</template>