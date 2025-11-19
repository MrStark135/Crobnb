<script setup>
const props = defineProps({
	list: Array<Object>[],
	title: String,
	class: String,
	classCollection: String,
	classImage: String,
	classItem: String,
	classLabel: String
});
</script>
<template>
	<div :class="class">
		<div class="font-mulish text-[32px]/[44px] font-bold">{{ title }}</div>
		<div :class="classCollection">
			<div v-for="item in list" :class="classItem">
				<div v-if="item.imgSrc">
					<img :src="item.imgSrc" :class="classImage"/>
				</div>
				<div v-if="item.label || item.iconSrc" :class="classLabel">
					<div v-if="item.label">{{ item.label }}</div>
					<div class="flex justify-center items-center min-w-6" v-if="item.iconSrc">
						<img :src="item.iconSrc"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>