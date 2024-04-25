<template>
    <!-- Konten Sidebar -->
    <div class="flex  w-full h-6 items-center flex-1">
        <div class="ml-4">
            <svg
                class="ham hamRotate ham7"
                viewBox="0 0 100 100"
                width="45"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
            >
                <path class="line top" d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"/>
                <path class="line middle" d="m 70,50 h -40"/>
                <path class="line bottom" d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"/>
            </svg>
        </div>
    </div>
    <!-- Isi atau component dari sidebar -->
    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gradient-to-r from-white to-gray-100 dark:bg-gray-800 text-white"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      ></h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto mt-1">
        <div class="flex items-center py-4 overflow-y-auto mt-0.5 -ml-8">
          <!-- Ini Logo -->
          <img
            src="../assets/images/logohydrate.png"
            alt=""
            width="200"
            height="200"
            class=""
          />
        </div>
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="home"
              >
                <path
                  fill="#5894d3"
                  d="M6.64373233,18.7821107 L6.64373233,15.7152449 C6.64371685,14.9380902 7.27567036,14.3067075 8.05843544,14.3018198 L10.9326107,14.3018198 C11.7188748,14.3018198 12.3562677,14.9346318 12.3562677,15.7152449 L12.3562677,15.7152449 L12.3562677,18.7732212 C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20 L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941 17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541 19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253 18.1046183,5.96350064 L11.4429783,0.674268354 C10.2785132,-0.250877524 8.61537279,-0.22099178 7.48539114,0.745384082 C7.48539114,0.745384082 0.967012253,5.96350064 0.967012253,5.96350064 C0.37274068,6.42082162 0.0175522924,7.11956262 0,7.86584638 L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20 L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734 6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525 6.60791706,18.7821107 L6.64373233,18.7821107 Z"
                  transform="translate(2.5 2)"
                ></path>
              </svg>
              <span class="ms-3">Beranda</span>
            </a>
          </li>
          <li>
            <a
              href="/pertanyaan"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                id="water"
              >
                <path
                  d="M12,22C14.275,22 16.387,20.822 17.582,18.888C18.778,16.953 18.887,14.538 17.87,12.503C15.473,7.71 12.894,2.553 12.894,2.553C12.725,2.214 12.379,2 12,2C11.621,2 11.275,2.214 11.106,2.553C11.106,2.553 8.527,7.71 6.13,12.503C5.113,14.538 5.222,16.953 6.418,18.888C7.613,20.822 9.725,22 12,22L12,22ZM12,5.236L7.919,13.398C7.212,14.812 7.288,16.491 8.119,17.836C8.95,19.181 10.418,20 12,20L12,20C13.582,20 15.05,19.181 15.881,17.836C16.712,16.491 16.788,14.812 16.081,13.398L12,5.236ZM12,18C12.989,18 13.908,17.488 14.428,16.646C14.948,15.805 14.995,14.754 14.553,13.87C14.306,13.376 13.705,13.176 13.211,13.422C12.718,13.669 12.517,14.27 12.764,14.764C12.896,15.029 12.882,15.343 12.727,15.595C12.571,15.847 12.296,16 12,16C11.448,16 11,16.448 11,17C11,17.552 11.448,18 12,18Z"
                  fill="#5894d3"
                ></path>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Pertanyaan</span>
              <span
                class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >!</span
              >
            </a>
          </li>
          <li class="absolute bottom-24">
            <a
              href="/profile"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="profile"
              >
                <g fill="#200E32" transform="translate(3 2)">
                  <ellipse
                    cx="9"
                    cy="5.556"
                    opacity=".4"
                    rx="5.625"
                    ry="5.556"
                  ></ellipse>
                  <path
                    d="M17.9902354,16.6757991 L17.9902354,16.6757991 C17.9953097,16.5967226 17.9953097,16.5174327 17.9902354,16.4383562 C17.9679741,16.1461262 17.885058,15.8607505 17.7461199,15.5981735 C17.1993012,14.5296804 15.6662559,14.0456621 14.3870907,13.7716895 C13.4744565,13.5817014 12.5471782,13.4595545 11.6139387,13.4063927 L10.6374767,13.3333333 L10.1980688,13.3333333 L9.6512501,13.3333333 L8.34279105,13.3333333 L7.79597234,13.3333333 L7.35656445,13.3333333 L6.38010248,13.4063927 C5.44686291,13.4595545 4.51958466,13.5817014 3.60695046,13.7716895 C2.32778527,14.0091324 0.794739971,14.5022831 0.247921264,15.5981735 C0.10898315,15.8607505 0.0260670984,16.1461262 0.00380576968,16.4383562 C-0.00126858989,16.5174327 -0.00126858989,16.5967226 0.00380576968,16.6757991 L0.00380576968,16.6757991 C-0.000879294659,16.7548861 -0.000879294659,16.834155 0.00380576968,16.913242 C0.0303656032,17.2029741 0.116574533,17.4851701 0.257685884,17.7442922 C0.804504591,18.8127854 2.33754989,19.2968037 3.61671508,19.5707763 C4.53104892,19.7518719 5.45762024,19.8739256 6.3898671,19.9360731 L7.36632907,20 L7.60067995,20 L7.80573696,20 L10.2078334,20 L10.4128904,20 L10.6472413,20 L11.6237033,19.9360731 C12.5559501,19.8739256 13.4825215,19.7518719 14.3968553,19.5707763 C15.6760205,19.3242009 17.2090658,18.8401826 17.7558845,17.7442922 C17.890425,17.4769528 17.9730826,17.1893744 18,16.8949772 C18.0012406,16.8218031 17.9979804,16.748623 17.9902354,16.6757991 Z"
                    fill="#5894d3"
                  ></path>
                </g>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </a>
          </li>
          <li class="absolute bottom-10">
            <a
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="logout"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M6.03033 7.96967C5.73744 7.67678 5.26256 7.67678 4.96967 7.96967L1.46967 11.4697C1.17678 11.7626 1.17678 12.2374 1.46967 12.5303L4.96967 16.0303C5.26256 16.3232 5.73744 16.3232 6.03033 16.0303 6.32322 15.7374 6.32322 15.2626 6.03033 14.9697L3.06066 12 6.03033 9.03033C6.32322 8.73744 6.32322 8.26256 6.03033 7.96967zM14.5956 5.25C12.017 5.25 9.77484 6.73848 8.66955 8.9258 8.48274 9.29549 8.0316 9.44375 7.66191 9.25693 7.29221 9.07012 7.14396 8.61898 7.33077 8.24929 8.67788 5.58343 11.422 3.75 14.5956 3.75 19.1083 3.75 22.7502 7.45274 22.7502 12 22.7502 12.7598 22.6485 13.4967 22.4576 14.1972 22.3487 14.5968 21.9364 14.8325 21.5368 14.7236 21.1372 14.6147 20.9015 14.2025 21.0104 13.8028 21.1665 13.2298 21.2502 12.6254 21.2502 12 21.2502 8.26299 18.2618 5.25 14.5956 5.25zM7.66191 14.7431C8.0316 14.5563 8.48274 14.7045 8.66955 15.0742 9.77484 17.2615 12.017 18.75 14.5956 18.75 16.0768 18.75 17.4437 18.26 18.5499 17.4296 18.8812 17.1809 19.3513 17.2479 19.6 17.5791 19.8486 17.9104 19.7817 18.3805 19.4504 18.6292 18.0947 19.6469 16.4141 20.25 14.5956 20.25 11.422 20.25 8.67788 18.4166 7.33077 15.7507 7.14396 15.381 7.29221 14.9299 7.66191 14.7431z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span @click="handleLogout" class="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
document.addEventListener("DOMContentLoaded", function () {
    const showNavigationButton = document.querySelector(
        "[data-drawer-show='drawer-navigation']"
    );
    const drawerNavigation = document.getElementById("drawer-navigation");

    // Tambahkan event listener untuk tombol
    showNavigationButton.addEventListener("click", function () {
        drawerNavigation.classList.add("translate-x-0"); // Menggeser drawer ke posisi terlihat
        drawerNavigation.focus(); // Fokuskan drawer setelah ditampilkan
    });

    // Tambahkan event listener untuk tombol close di dalam drawer
    const closeMenuButton = drawerNavigation.querySelector(
        "[data-drawer-hide='drawer-navigation']"
    );
    closeMenuButton.addEventListener("click", function () {
        drawerNavigation.classList.remove("translate-x-0"); // Menggeser drawer kembali ke posisi semula
        showNavigationButton.focus(); // Fokuskan kembali tombol "Show navigation"
    });

    // Tambahkan event listener untuk menutup drawer saat ESC ditekan
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            drawerNavigation.classList.remove("translate-x-0"); // Menggeser drawer kembali ke posisi semula
            showNavigationButton.focus(); // Fokuskan kembali tombol "Show navigation"
        }
    });

    // Handler klik di luar dropdown untuk menyembunyikannya
    const bellIcon = document.getElementById("notification-bell");
    const dropdown = document.getElementById("notification-dropdown");
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && event.target !== bellIcon) {
            dropdown.style.display = 'none';
        }
    });
});

export default {
  methods: {
   handleLogout() {
      this.$store.dispatch('logout'); // Panggil aksi logout dari Vuex saat tombol logout diklik
      this.$router.push({ name: 'login' }); // Arahkan pengguna ke halaman login setelah logout
    }

  }
}


</script>

  
  <style>
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .ham7 .top {
    stroke-dasharray: 40 82;
  }
  .ham7 .middle {
    stroke-dasharray: 40 111;
  }
  .ham7 .bottom {
    stroke-dasharray: 40 161;
  }
  .ham7.active .top {
    stroke-dasharray: 17 82;
    stroke-dashoffset: -62px;
  }
  .ham7.active .middle {
    stroke-dashoffset: 23px;
  }
  .ham7.active .bottom {
    stroke-dashoffset: -83px;
  }
  #drawer-navigation {
    /*Menambahkan garis tepi */
    border-right: 1px solid #d3d3d3  
  }
  .font-sans {
    font-family: sans-serif;
  }
  .gradient-text {
        background-image: linear-gradient(to right, black, darkblue, lightblue);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
  .dropdown {
        display: none;
        position: absolute;
        top: 40px; /* Sesuaikan dengan jarak dari navbar ke pop-up */
        right: 0; /* Sesuaikan dengan posisi SVG */
        background-color: #ffffff;
        border: 1px solid #ccc;
        padding: 10px;
        z-index: 1000; /* Pastikan lebih tinggi dari elemen lain */
    }

  </style>