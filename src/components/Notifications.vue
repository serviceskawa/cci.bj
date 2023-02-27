<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive"
        class="pointer-events-none fixed bottom-3 right-0 flex items-end px-4 py-6 sm:items-start sm:p-6 w-96">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
            <transition enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div
                    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-primary ring-opacity-5">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <svg v-if="notif.type == 'success'" class="h-8 w-8 text-green"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg v-else-if="notif.type == 'error'" class="h-8 w-8 text-danger"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                        fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="32"
                                        d="M320 320L192 192M192 320l128-128" />
                                </svg>
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-md font-medium text-blue font-bold"
                                    :class="notif.type  ==  'success' ? 'text-green' : 'text-danger'"
                                >
                                    {{notif.title}}
                                </p>
                                <p class="mt-1 text-sm text-gray-500">{{notif.description}}</p>
                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button type="button" @click="$emit('close')"
                                    class="inline-flex rounded-md bg-white focus:outline-none">
                                    <span class="sr-only">Fermer</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        notif: Object
    }
}
</script>