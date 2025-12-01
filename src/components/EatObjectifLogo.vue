<template>

    <span class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg" v-if="_k == 0">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
        >
            <!-- Three small shops / MPME -->
            <!-- Left shop -->
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10l1-3h4l1 3v6H3v-6z"
            />
            <path d="M4 7h4" stroke="white" stroke-width="1.5" stroke-linecap="round" />

            <!-- Middle shop -->
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.5 10l1-3h4l1 3v6h-6v-6z"
            />
            <path d="M10.5 7h4" stroke="white" stroke-width="1.5" stroke-linecap="round" />

            <!-- Right shop -->
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 10l1-3h4l1 3v6h-6v-6z"
            />
            <path d="M17 7h4" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>



    </span>

    <span class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg" v-if="_k == 1">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <!-- Person -->
            <circle cx="12" cy="8" r="2.5" stroke="white" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke="white" stroke-width="1.5" d="M9 14c0-1.5 6-1.5 6 0v3H9v-3z"/>

            <!-- Document / Regulation -->
            <rect x="15" y="10" width="6" height="8" rx="1" stroke="white" stroke-width="1.5"/>
            <line x1="16" y1="12" x2="20" y2="12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="16" y1="14" x2="20" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="16" y1="16" x2="20" y2="16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

    </span>

    <span class="inline-flex items-start justify-start text-left rounded-md p-3 bg-primary shadow-lg" v-if="_k == 2">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <!-- Left building (CCI Bénin) -->
            <rect x="2.5" y="9" width="5" height="7" rx="0.75" stroke="white" stroke-width="1.5"/>
            <line x1="3" y1="11" x2="6" y2="11" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="3" y1="13" x2="6" y2="13" stroke="white" stroke-width="1.5" stroke-linecap="round"/>

            <!-- Right building (NACCIMA) -->
            <rect x="16.5" y="9" width="5" height="7" rx="0.75" stroke="white" stroke-width="1.5"/>
            <line x1="17" y1="11" x2="20" y2="11" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="17" y1="13" x2="20" y2="13" stroke="white" stroke-width="1.5" stroke-linecap="round"/>

            <!-- Bidirectional arrows (cooperation) -->
            <path d="M7 12h10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M10 9l-3 3 3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 15l3-3-3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Megaphone (marketing) -->
            <path d="M9 18l6-3v6l-6-3z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>

    </span>

    <span class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg" v-if="_k == 3">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <!-- Person (beneficiary) -->
            <circle cx="12" cy="6" r="2" stroke="white" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke="white" stroke-width="1.5" d="M10 10c0-1 4-1 4 0v3h-4v-3z"/>

            <!-- Megaphone (communication) -->
            <path d="M5 13l5-3v6l-5-3z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <line x1="10" y1="10" x2="14" y2="8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="10" y1="16" x2="14" y2="18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>

            <!-- Public building -->
            <rect x="16" y="12" width="5" height="6" rx="1" stroke="white" stroke-width="1.5"/>
            <line x1="17" y1="14" x2="20" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="17" y1="16" x2="20" y2="16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>

            <!-- Private briefcase -->
            <rect x="2" y="12" width="5" height="4" rx="1" stroke="white" stroke-width="1.5"/>
            <line x1="3" y1="12" x2="6" y2="12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>


    </span>

</template>


<script>

export default {
  name: 'EatObjectifLogo',
  props: {
    _k: {
      type: Number,
      default: 0
    }
  }
};

</script>