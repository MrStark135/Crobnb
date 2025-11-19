<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';

// import { VueDatePicker } from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
	class: String
});

const date = ref(new CalendarDate(2026, 1, 1));
</script>
<template>
	<div :class="class">
		<!-- <VueDatePicker class="shadow-xl" v-model="date" range :time-config="{ enableTimePicker: false }" :formats ="{ input: 'dd.MM.yyyy' }" :inline="true" :min-date="new Date()" :auto-apply="true" /> -->
		<UCalendar v-model="date"/>
	</div>
</template>