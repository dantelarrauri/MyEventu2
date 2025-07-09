<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

const modules = [
    { id: 'header', name: 'Header' },
    { id: 'carousel', name: 'Carousel' },
    { id: 'event_info', name: 'Event Information' },
    { id: 'dress_code', name: 'Dress Code' },
    { id: 'directions', name: 'Directions' },
    { id: 'event_date', name: 'Event Date' },
    { id: 'countdown', name: 'Countdown' },
    { id: 'rsvp', name: 'RSVP' },
];
</script>

<template>
    <Head title="Design Invitation" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Design Your Invitation</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2">
                                <!-- Preview Area -->
                                <div class="bg-gray-200 h-full min-h-[600px] p-4 rounded">
                                    <h3 class="text-lg font-bold mb-4">Invitation Preview</h3>
                                    <!-- Components will be rendered here -->
                                </div>
                            </div>
                            <div>
                                <!-- Module List -->
                                <div class="bg-gray-100 p-4 rounded">
                                    <h3 class="text-lg font-bold mb-4">Modules</h3>
                                    <ul>
                                        <li v-for="module in modules" :key="module.id" class="p-2 mb-2 bg-white rounded shadow cursor-pointer">
                                            {{ module.name }}
                                            <span v-if="module.id === 'rsvp'" class="text-xs text-red-500">(Required)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
