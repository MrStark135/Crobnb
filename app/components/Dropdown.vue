<script setup>
const props = defineProps({
	list: Array<Object>[],
	class: String,
	classItem: String,
	classLabel: String,
	classIcon: String
});
const emit = defineEmits(["select"]);
</script>
<template>
	<div :class="class">
		<div v-for="item in list" :class="classItem" :id="item.label" @click="() => { emit('select', item.label) }">
			<div v-if="item.iconSrc">
				<img :src="item.iconSrc" :class="classIcon"/>
			</div>
			<div v-if="item.label" :class="classLabel">{{ item.label }}</div>
		</div>
	</div>
</template>