<template>
  <body class="flex bg-gray-100 min-h-screen">
  <aside class="hidden sm:flex sm:flex-col">
    <a href="#" class="inline-flex items-center justify-center h-20 w-20 bg-white hover:bg-white focus:bg-black">
  <!-- Ganti '../assets/images/logohydrate.png' dengan lokasi dan nama file gambar yang ingin Anda gunakan -->
  <img src="../assets/images/logohydrate.png" alt="Company logo" class="h-auto w-auto text-white" style="max-height: 100px; max-width: 100px;">
</a>
    <div
      class="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800"
    >
      <nav class="flex flex-col mx-4 my-6 space-y-4">
        <a
          href="#"
          class="inline-flex items-center justify-center py-3 text-blue-700 bg-grey rounded-lg"
        >
          <span class="sr-only">Dashboard</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span class="sr-only">Documents</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </a>
      </nav>
      <div
        class="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700"
      >
        <button
          class="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span class="sr-only">Settings</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </aside>
  <div class="flex-grow text-gray-800">
    <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
      <button
        class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full"
      >
        <span class="sr-only">Menu</span>
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <div class="flex flex-shrink-0 items-center ml-auto">
        <button
          class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
        >
          <span class="sr-only">User Menu</span>
          <div
            class="hidden md:flex md:flex-col md:items-end md:leading-tight"
          >
            <span class="font-semibold">Fitri</span>
            <span class="text-sm text-gray-600">Admins</span>
          </div>
          <span
            class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden"
          >
            <img
              src="https://bytewebster.com/img/logo.png"
              alt="user profile photo"
              class="h-full w-full object-cover"
            />
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="hidden sm:block h-6 w-6 text-gray-300"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="border-l pl-3 ml-3 space-x-1">
          <button
            class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
          >
            <span class="sr-only">Notifications</span>
            <span
              class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"
            ></span>
            <span
              class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"
            ></span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button
            class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
          >
            <span class="sr-only">Log out</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main class="p-6 sm:p-10 space-y-6">
      <div
        class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between"
      >
        <div class="mr-6">
          <h1 class="text-4xl font-bold mb-2">Selamat datang Admin</h1>
          <h2 class="text-gray-600 ml-0.5">Kinerja situs web</h2>
        </div>
        <div class="flex flex-wrap items-start justify-end -mb-3"></div>
      </div>
      <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6"
          >
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">1</span>
            <span class="block text-gray-500">User</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-700 bg-blue-100 rounded-full mr-6"
          >
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">1</span>
            <span class="block text-gray-500">New User</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 8.467 8.467"
              id="article"
            >
              <path
                d="M5.816.792a.265.265 0 0 0-.038.004h-4.72a.265.265 0 0 0-.265.266v5.555c0 .581.477 1.057 1.059 1.057h4.763a.265.265 0 0 0 .095-.01c.537-.05.964-.498.964-1.047V4.5a.265.265 0 0 0-.266-.264H6.086V1.062a.265.265 0 0 0-.27-.27Zm-4.494.534h4.235V4.45a.265.265 0 0 0 0 .092v2.074c0 .193.056.373.148.529H1.852a.522.522 0 0 1-.53-.53zm.768 1.059a.265.265 0 0 0 .027.529h2.644a.265.265 0 1 0 0-.53H2.117a.265.265 0 0 0-.027 0zm0 1.058a.265.265 0 0 0 .027.53h2.644a.265.265 0 1 0 0-.53H2.117a.265.265 0 0 0-.027 0zM2.117 4.5a.265.265 0 1 0 0 .529h2.644a.265.265 0 1 0 0-.53zm3.969.265h1.059v1.852c0 .296-.23.528-.527.529a.265.265 0 0 0-.003 0 .522.522 0 0 1-.53-.53zm-3.995.793a.265.265 0 0 0-.001 0 .265.265 0 0 0 .027.53h2.644a.265.265 0 1 0 0-.53H2.117a.265.265 0 0 0-.026 0z"
                fill="blue"
                font-family="sans-serif"
                font-weight="200"
                overflow="visible"
                style="
                  line-height: normal;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000;
                  text-transform: none;
                  text-orientation: mixed;
                  isolation: auto;
                  mix-blend-mode: normal;
                "
              ></path>
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">3</span>
            <span class="block text-gray-500">Article </span>
          </div>
        </div>
      </section>
      <section
        class="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col gap-6"
      >
        <div
          class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
        >
          <div
            class="flex items-center place-content-between px-6 py-5 font-semibold border-b border-gray-100"
          >
          <div>Manage Articles</div>
        <!-- Tambahkan event @click untuk menampilkan pop-up form -->
        <div class="cursor-pointer" @click="showAddArticleForm = true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" width="30" height="30" id="add">
            <path
              d="M50.5 16.4c-18.8 0-34.1 15.3-34.1 34.1s15.3 34.1 34.1 34.1 34.1-15.3 34.1-34.1-15.3-34.1-34.1-34.1zm0 63.4c-16.1 0-29.3-13.1-29.3-29.3s13.1-29.3 29.3-29.3c16.1 0 29.3 13.1 29.3 29.3S66.6 79.8 50.5 79.8z"
              fill="darkgrey"
            ></path>
            <path
              d="M66.2 47.8H52.9V34.5c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4v13.3H34.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h13.3v13.3c0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4V52.6h13.3c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4z"
              fill="darkgrey"
            ></path>
          </svg>
        </div>
          <!-- Pop-up form -->
<div v-if="showAddArticleForm" class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
  <div class="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg">
    <!-- Isi pop-up form -->
    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tambahkan Artikel Terbaru</h2>
    <form @submit.prevent="addArticle">
      <!-- Isi formulir di sini -->
      <!-- URL Gambar -->
      <div>
        <label for="img-url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tautan Gambar</label>
        <input type="url" v-model="newArticle.image_url" id="img-url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan URL gambar" required>
      </div>
      <!-- Judul Artikel -->
      <div>
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
        <input type="text" v-model="newArticle.title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan judul artikel" required>
      </div>
      <!-- Poin-poin -->
      <div>
        <label for="points" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poin-poin</label>
        <textarea v-model="newArticle.poin" id="points" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan poin-poin kunci, setiap poin dipisahkan dengan baris baru" required style="resize: none;"></textarea>
      </div>
      <!-- Konten Artikel -->
      <div>
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konten</label>
        <textarea v-model="newArticle.konten" id="content" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukkan konten artikel" required></textarea>
      </div>
      <div class="flex justify-between mt-4"> <!-- Tambahkan div untuk menempatkan dua tombol dalam satu baris -->
        <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          Tambah Artikel
        </button>
      </div>
    </form>
  </div>
</div>
          </div>

          <div class="p-4 flex-grow">
            <div
              v-for="(artikel, index) in artikel" :key="index"
              class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8"
            >
               <img class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16" :src="artikel.image_url" alt="Profile Picture" />
              <div class="w-full text-left">
                <div
                  class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row"
                >
                  <h3 class="font-bold">{{ artikel.title }}</h3>
                   <!-- <time class="text-xs" :datetime="artikel.timestamp">July 18, 2022 at 10:36 AM</time> -->
                </div>
                 <p class="text-sm">{{ artikel.konten }}</p>
                <div
                  class="mt-5 flex items-center justify-between text-gray-600"
                >
                  <div class="flex items-center">
                    <div class="cursor-pointer mr-2" @click="showEditForm(artikel)">
                                          <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        id="edit"
                      >
                        <path
                          d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"
                        ></path>
                        <path
                          d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"
                        ></path>
                      </svg>
                    </div>
                    <!-- Pop-up form edit -->
<div v-if="showEditArticleForm" class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
  <div class="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg">
    <!-- Isi pop-up form edit di sini -->
    <!-- Tautan Gambar -->
    <div>
      <label for="edit-img-url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tautan Gambar</label>
      <input type="url" v-model="editedArticle.image_url" id="edit-img-url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
    </div>
    <!-- Judul Artikel -->
    <div>
      <label for="edit-title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
      <input type="text" v-model="editedArticle.title" id="edit-title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
    </div>
    <!-- Poin-poin -->
    <div>
      <label for="edit-points" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poin-poin</label>
      <textarea v-model="editedArticle.poin" id="edit-points" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required style="resize: none;"></textarea>
    </div>
    <!-- Konten Artikel -->
    <div>
      <label for="edit-content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konten</label>
      <textarea v-model="editedArticle.konten" id="edit-content" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required></textarea>
    </div>
    <div class="flex justify-between mt-4"> <!-- Tambahkan div untuk menempatkan dua tombol dalam satu baris -->
      <button @click="closeEditForm()" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-black bg-gray-300 rounded-lg focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-900 hover:bg-gray-400">
        simpan
      </button>
    </div>
  </div>
</div>
                    <div class="cursor-pointer" @click="deleteData(index)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        id="delete"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                          d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                          fill="red"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div></div>
                  <a
                    title="Likes"
                    href="#"
                    class="group flex cursor-pointer items-center justify-around"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-1 bg-white shadow rounded-lg overflow-y-auto">
    <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
      <span>Login Recently</span>
      <button
        type="button"
        class="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        USERS
        <svg
          class="-mr-1 ml-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="overflow-y-auto" style="max-height: 24rem">
      <ul class="p-6 space-y-6">
        <li v-for="user in users" :key="user.id" class="flex items-center">
          <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
            <!-- You can add any default user icon or leave it empty -->
          </div>
          <span class="text-gray-600">{{ user.name }}</span>
        </li>
      </ul>
    </div>
  </div>
        <div class="flex flex-col row-span-1 bg-white shadow rounded-lg">
          <div class="px-6 py-5 font-semibold border-b border-gray-100">
            FEATURED HYDRATION ARTICLES:
          </div>
          <div class="p-4 flex-grow">
            <div
              class="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md"
            >
              Chart
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</body>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      showAddArticleForm: false,
      newArticle: {
        image_url: '',
        title: '',
        poin: '',
        konten: ''
      },
      editedArticle: {}, // tambahkan objek untuk menyimpan artikel yang akan diedit
      showEditArticleForm: false // tambahkan properti untuk mengontrol tampilan formulir edit
    };
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["getArtikelData"]),
    artikel() {
      return this.getArtikelData;
    },
    selectedArtikel() {
      return this.getArtikelById(this.$route.params.articleId);
    },

  },
  mounted() {
    this.$store.dispatch("getArtikel");
    this.$store.dispatch("getUser");
  },
  methods: {
    ...mapActions(["getUser"]),
    getArtikelById(id) {
      return this.artikel.find((art) => art.id === id);
    },
    // Metode untuk menampilkan formulir edit artikel
    showEditForm(artikel) {
      this.showEditArticleForm = true;
      // Mengisi data artikel yang akan diedit ke dalam objek editedArticle
      this.editedArticle = artikel;
    },
    // Metode untuk menutup formulir edit artikel
    closeEditForm() {
      this.showEditArticleForm = false;
    },
    // Metode untuk menyimpan perubahan data artikel yang diedit
   // Metode untuk menyimpan perubahan data artikel yang diedit
updateArticle() {
  // Temukan indeks artikel yang akan diedit dalam array artikel
  const index = this.artikel.findIndex(art => art.id === this.editedArticle.id);
  // Perbarui data artikel yang sesuai dengan data yang diedit
  this.$set(this.artikel, index, this.editedArticle);
  // Menyembunyikan formulir setelah perubahan disimpan
  this.showEditArticleForm = false;
},
  // Metode untuk menghapus data
  deleteData(index) {
    this.artikel.splice(index, 1); // Menghapus data dari array artikel
  },
    addArticle() {
      // Tambahkan artikel baru ke dalam array artikel secara manual
      this.artikel.push({
        image_url: this.newArticle.image_url,
        title: this.newArticle.title,
        poin: this.newArticle.poin,
        konten: this.newArticle.konten
      });

      // Setelah itu, atur ulang formulir dan sembunyikan pop-up form
      this.newArticle.image_url = '';
      this.newArticle.title = '';
      this.newArticle.poin = '';
      this.newArticle.konten = '';
      this.showAddArticleForm = false;
    },
  },
  created() {
    this.getUser();
  },
};
</script>