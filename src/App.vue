<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
    >
      <div
        class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
      >
        <a
          href="#"
          class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >Components UI</a
        >
      </div>
      <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <router-link
          to="/"
          class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          Home
        </router-link>
        <router-link
          to="/FormInputsControls"
          class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          Form inputs & controls
        </router-link>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
