<script setup>

const { $directus } = useNuxtApp();
const props = defineProps({
	event_category: String,
	title: String,
	date: String,
	description: String,
	image: String
})

// shrink the text if too long
let validDescription = ref('');
validDescription.value = props.description;
if (props.description.length > 170) validDescription.value = props.description.slice(0, 170) + '...';

</script>
<template>
	<div v-if="image == '' && title == '/'" class="w-full self-stretch"></div>
	<div v-if="image != '' && title != '/'" class="bg-white w-full self-stretch border rounded-[5px] border-grayscale-10 flex flex-col overflow-clip min-h-[560px] group hover:border-primary-50">
		<NuxtImg provider="directus" :src="image" alt=""/>
		<div class="flex flex-col grow">
			<div class="flex flex-col p-4 gap-4 grow">
				<div class="text-xs text-grayscale-60 flex justify-between">
					<div v-if="event_category" class="font-bold">{{ event_category }}</div>
					<div v-if="date">{{ date }}</div>
				</div>
				<div class="text-[22px]/[32px] font-mulish font-medium group-hover:text-primary-80">{{ title }}</div>
				<div v-if="description" class="text-base text-grayscale-60">
					{{ validDescription }}
				</div>
			</div>
			<div v-if="title != 'Couldn\'t load news'" class="flex gap-2 p-3 group-hover:opacity-65">
				<div class="text-primary-80 text-base font-bold">Vidi više</div>
				<img class="size-6" src="/assets/icons/triangle_bracket_right_blue.svg"/>
			</div>
		</div>
	</div>
</template>