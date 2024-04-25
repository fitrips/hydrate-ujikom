<template>
<div
    class="flex w-full h-16 shadow-sm fixed z-50 bg-white p-5 px-14 justify-between font-pop font-semibold"
  >
    <div><Navbar></Navbar></div>
    <div>Hydrate Hero</div>
  <div class="notification">
<svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,21h4a2,2,0,0,1-4,0ZM3.076,18.383a1,1,0,0,1,.217-1.09L5,15.586V10a7.006,7.006,0,0,1,6-6.92V2a1,1,0,0,1,2,0V3.08A7.006,7.006,0,0,1,19,10v5.586l1.707,1.707A1,1,0,0,1,20,19H4A1,1,0,0,1,3.076,18.383ZM6.414,17H17.586l-.293-.293A1,1,0,0,1,17,16V10A5,5,0,0,0,7,10v6a1,1,0,0,1-.293.707Z"/></svg>
<span v-if="showReminder">Jangan lupa minum air!</span>
</div>
</div>
  <div class="flex flex-col relative items-center py-32 lg:items-end lg:px-32 show-shape">
    <img
      class="absolute w-32 lg:w-56 z-10 wind-up"
      src="../assets/images/hero.png"
      alt=""
    />
    <img
      class="absolute w-56 lg:w-96 lg:right-14 z-1 wind-mill"
      src="../assets/images/behind.png"
      alt=""
    />
  </div>

  <section class="lg:w-full lg:h-[500px]" >
  <div class="lg:absolute lg:top-0 h-[800px]">
    <div class="flex justify-between px-14 font-pop">
      <div class="flex flex-col space-y-13 pt-64">
        <div class="text-4xl font-bold space-y-4 lg:text-6xl show-text">
          <h1>
            Kelola hidrasi <br class="md:hidden lg:block" />
            air anda <br class="sm:hidden d" />di &nbsp;<span
              class="text-blue-800 text-4xl"
              >Hydrate Hero</span
            >
          </h1>
          <p class="text-lg font-light">
            Penuhi kebutuhan air anda, scroll untuk melihat detail anda
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section class="lg:w-full lg:h-[800px] lg:bg-gray-100">
  <div v-for="get in getUser" :key="get.id">
  <div
    class="md:grid md:grid-cols-2 md:grid-rows-2 px-10 -mt-40 md:-mt-56 lg:mt-[450px]"
  >
    <div class="flex items-center justify-center py-10">
      <div
        class="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md show-left"
      >
        <div class="bg-white py-10">
          <svg
            class="box-icon mx-auto"
            fill="none"
            width="50"
            heigth="50"
            viewBox="0 0 77 77"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#E6EFFE" height="77" rx="15" width="77"></rect>
            <path
              d="M43.1439 58.8334H32.8564C28.6543 58.8334 25.1085 55.7042 24.5877 51.5334L21.9189 28.1001C21.6085 25.6126 23.5481 23.4167 26.0543 23.4167H49.9481C52.4543 23.4167 54.3939 25.6126 54.0835 28.1001L51.4148 51.5334C50.8918 55.7042 47.346 58.8334 43.1439 58.8334Z"
              fill="#3981D3"
              opacity="0.35"
            ></path>
            <path
              d="M46.8188 35.5855C43.948 37.5126 40.2771 37.6626 36.9917 36.5855C35.3376 36.0438 33.5438 35.8126 31.6771 35.9626C28.4396 36.223 25.4855 37.6938 23.2646 39.9022L24.5896 51.5334C25.1084 55.7042 28.6542 58.8334 32.8563 58.8334H43.1438C47.3459 58.8334 50.8917 55.7042 51.4126 51.5334L53.4188 33.9188C50.9688 33.7292 48.6751 34.3376 46.8188 35.5855ZM31.7501 54.6667C30.6001 54.6667 29.6667 53.7334 29.6667 52.5834C29.6667 51.4334 30.6001 50.5001 31.7501 50.5001C32.9001 50.5001 33.8334 51.4334 33.8334 52.5834C33.8334 53.7334 32.9001 54.6667 31.7501 54.6667ZM31.7501 44.2501C30.6001 44.2501 29.6667 43.3167 29.6667 42.1667C29.6667 41.0167 30.6001 40.0834 31.7501 40.0834C32.9001 40.0834 33.8334 41.0167 33.8334 42.1667C33.8334 43.3167 32.9001 44.2501 31.7501 44.2501ZM39.0417 50.5001C37.3167 50.5001 35.9167 49.1001 35.9167 47.3751C35.9167 45.6501 37.3167 44.2501 39.0417 44.2501C40.7667 44.2501 42.1667 45.6501 42.1667 47.3751C42.1667 49.1001 40.7667 50.5001 39.0417 50.5001Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 31.7499C39.1504 31.7499 40.0832 30.8172 40.0832 29.6666C40.0832 28.516 39.1504 27.5833 37.9998 27.5833C36.8492 27.5833 35.9165 28.516 35.9165 29.6666C35.9165 30.8172 36.8492 31.7499 37.9998 31.7499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 19.2499C39.1504 19.2499 40.0832 18.3172 40.0832 17.1666C40.0832 16.016 39.1504 15.0833 37.9998 15.0833C36.8492 15.0833 35.9165 16.016 35.9165 17.1666C35.9165 18.3172 36.8492 19.2499 37.9998 19.2499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M45.2915 25.5C47.0174 25.5 48.4165 24.1009 48.4165 22.375C48.4165 20.6491 47.0174 19.25 45.2915 19.25C43.5656 19.25 42.1665 20.6491 42.1665 22.375C42.1665 24.1009 43.5656 25.5 45.2915 25.5Z"
              fill="#3981D3"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col items-center bg-white px-4 py-10">
          <h2 class="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Kebutuhan Air
          </h2>
          <br />
          <div class="w-full px-10">
            <div class="flex items-center rounded-xl bg-gray-900 p-4">
              <div class="flex items-center justify-center w-56">
                <p class="font-bold text-white">{{ get.kebutuhanAir}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center py-10">
      <div
        class="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md show-right"
      >
        <div class="bg-white py-10">
          <svg
            class="box-icon mx-auto"
            fill="none"
            width="50"
            heigth="50"
            viewBox="0 0 77 77"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#E6EFFE" height="77" rx="15" width="77"></rect>
            <path
              d="M43.1439 58.8334H32.8564C28.6543 58.8334 25.1085 55.7042 24.5877 51.5334L21.9189 28.1001C21.6085 25.6126 23.5481 23.4167 26.0543 23.4167H49.9481C52.4543 23.4167 54.3939 25.6126 54.0835 28.1001L51.4148 51.5334C50.8918 55.7042 47.346 58.8334 43.1439 58.8334Z"
              fill="#3981D3"
              opacity="0.35"
            ></path>
            <path
              d="M46.8188 35.5855C43.948 37.5126 40.2771 37.6626 36.9917 36.5855C35.3376 36.0438 33.5438 35.8126 31.6771 35.9626C28.4396 36.223 25.4855 37.6938 23.2646 39.9022L24.5896 51.5334C25.1084 55.7042 28.6542 58.8334 32.8563 58.8334H43.1438C47.3459 58.8334 50.8917 55.7042 51.4126 51.5334L53.4188 33.9188C50.9688 33.7292 48.6751 34.3376 46.8188 35.5855ZM31.7501 54.6667C30.6001 54.6667 29.6667 53.7334 29.6667 52.5834C29.6667 51.4334 30.6001 50.5001 31.7501 50.5001C32.9001 50.5001 33.8334 51.4334 33.8334 52.5834C33.8334 53.7334 32.9001 54.6667 31.7501 54.6667ZM31.7501 44.2501C30.6001 44.2501 29.6667 43.3167 29.6667 42.1667C29.6667 41.0167 30.6001 40.0834 31.7501 40.0834C32.9001 40.0834 33.8334 41.0167 33.8334 42.1667C33.8334 43.3167 32.9001 44.2501 31.7501 44.2501ZM39.0417 50.5001C37.3167 50.5001 35.9167 49.1001 35.9167 47.3751C35.9167 45.6501 37.3167 44.2501 39.0417 44.2501C40.7667 44.2501 42.1667 45.6501 42.1667 47.3751C42.1667 49.1001 40.7667 50.5001 39.0417 50.5001Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 31.7499C39.1504 31.7499 40.0832 30.8172 40.0832 29.6666C40.0832 28.516 39.1504 27.5833 37.9998 27.5833C36.8492 27.5833 35.9165 28.516 35.9165 29.6666C35.9165 30.8172 36.8492 31.7499 37.9998 31.7499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 19.2499C39.1504 19.2499 40.0832 18.3172 40.0832 17.1666C40.0832 16.016 39.1504 15.0833 37.9998 15.0833C36.8492 15.0833 35.9165 16.016 35.9165 17.1666C35.9165 18.3172 36.8492 19.2499 37.9998 19.2499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M45.2915 25.5C47.0174 25.5 48.4165 24.1009 48.4165 22.375C48.4165 20.6491 47.0174 19.25 45.2915 19.25C43.5656 19.25 42.1665 20.6491 42.1665 22.375C42.1665 24.1009 43.5656 25.5 45.2915 25.5Z"
              fill="#3981D3"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col items-center bg-white px-4 py-10">
          <h2 class="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Jenis Kelamin
          </h2>
          <br />
          <div class="w-full px-10">
            <div class="flex items-center rounded-xl bg-gray-900 p-4">
              <div class="flex items-center justify-center w-56">
                <p class="font-bold text-white">{{ get.jenis_kelamin }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center py-10">
      <div
        class="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md show-left"
      >
        <div class="bg-white py-10">
          <svg
            class="box-icon mx-auto"
            fill="none"
            width="50"
            heigth="50"
            viewBox="0 0 77 77"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#E6EFFE" height="77" rx="15" width="77"></rect>
            <path
              d="M43.1439 58.8334H32.8564C28.6543 58.8334 25.1085 55.7042 24.5877 51.5334L21.9189 28.1001C21.6085 25.6126 23.5481 23.4167 26.0543 23.4167H49.9481C52.4543 23.4167 54.3939 25.6126 54.0835 28.1001L51.4148 51.5334C50.8918 55.7042 47.346 58.8334 43.1439 58.8334Z"
              fill="#3981D3"
              opacity="0.35"
            ></path>
            <path
              d="M46.8188 35.5855C43.948 37.5126 40.2771 37.6626 36.9917 36.5855C35.3376 36.0438 33.5438 35.8126 31.6771 35.9626C28.4396 36.223 25.4855 37.6938 23.2646 39.9022L24.5896 51.5334C25.1084 55.7042 28.6542 58.8334 32.8563 58.8334H43.1438C47.3459 58.8334 50.8917 55.7042 51.4126 51.5334L53.4188 33.9188C50.9688 33.7292 48.6751 34.3376 46.8188 35.5855ZM31.7501 54.6667C30.6001 54.6667 29.6667 53.7334 29.6667 52.5834C29.6667 51.4334 30.6001 50.5001 31.7501 50.5001C32.9001 50.5001 33.8334 51.4334 33.8334 52.5834C33.8334 53.7334 32.9001 54.6667 31.7501 54.6667ZM31.7501 44.2501C30.6001 44.2501 29.6667 43.3167 29.6667 42.1667C29.6667 41.0167 30.6001 40.0834 31.7501 40.0834C32.9001 40.0834 33.8334 41.0167 33.8334 42.1667C33.8334 43.3167 32.9001 44.2501 31.7501 44.2501ZM39.0417 50.5001C37.3167 50.5001 35.9167 49.1001 35.9167 47.3751C35.9167 45.6501 37.3167 44.2501 39.0417 44.2501C40.7667 44.2501 42.1667 45.6501 42.1667 47.3751C42.1667 49.1001 40.7667 50.5001 39.0417 50.5001Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 31.7499C39.1504 31.7499 40.0832 30.8172 40.0832 29.6666C40.0832 28.516 39.1504 27.5833 37.9998 27.5833C36.8492 27.5833 35.9165 28.516 35.9165 29.6666C35.9165 30.8172 36.8492 31.7499 37.9998 31.7499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 19.2499C39.1504 19.2499 40.0832 18.3172 40.0832 17.1666C40.0832 16.016 39.1504 15.0833 37.9998 15.0833C36.8492 15.0833 35.9165 16.016 35.9165 17.1666C35.9165 18.3172 36.8492 19.2499 37.9998 19.2499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M45.2915 25.5C47.0174 25.5 48.4165 24.1009 48.4165 22.375C48.4165 20.6491 47.0174 19.25 45.2915 19.25C43.5656 19.25 42.1665 20.6491 42.1665 22.375C42.1665 24.1009 43.5656 25.5 45.2915 25.5Z"
              fill="#3981D3"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col items-center bg-white px-4 py-10">
          <h2 class="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Berat Badan
          </h2>
          <br />
          <div class="w-full px-10">
            <div class="flex items-center rounded-xl bg-gray-900 p-4">
              <div class="flex items-center justify-center w-56">
                <p class="font-bold text-white">{{ get.berat_badan }} Kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center py-10">
      <div
        class="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md show-right"
      >
        <div class="bg-white py-10">
          <svg
            class="box-icon mx-auto"
            fill="none"
            width="50"
            heigth="50"
            viewBox="0 0 77 77"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#E6EFFE" height="77" rx="15" width="77"></rect>
            <path
              d="M43.1439 58.8334H32.8564C28.6543 58.8334 25.1085 55.7042 24.5877 51.5334L21.9189 28.1001C21.6085 25.6126 23.5481 23.4167 26.0543 23.4167H49.9481C52.4543 23.4167 54.3939 25.6126 54.0835 28.1001L51.4148 51.5334C50.8918 55.7042 47.346 58.8334 43.1439 58.8334Z"
              fill="#3981D3"
              opacity="0.35"
            ></path>
            <path
              d="M46.8188 35.5855C43.948 37.5126 40.2771 37.6626 36.9917 36.5855C35.3376 36.0438 33.5438 35.8126 31.6771 35.9626C28.4396 36.223 25.4855 37.6938 23.2646 39.9022L24.5896 51.5334C25.1084 55.7042 28.6542 58.8334 32.8563 58.8334H43.1438C47.3459 58.8334 50.8917 55.7042 51.4126 51.5334L53.4188 33.9188C50.9688 33.7292 48.6751 34.3376 46.8188 35.5855ZM31.7501 54.6667C30.6001 54.6667 29.6667 53.7334 29.6667 52.5834C29.6667 51.4334 30.6001 50.5001 31.7501 50.5001C32.9001 50.5001 33.8334 51.4334 33.8334 52.5834C33.8334 53.7334 32.9001 54.6667 31.7501 54.6667ZM31.7501 44.2501C30.6001 44.2501 29.6667 43.3167 29.6667 42.1667C29.6667 41.0167 30.6001 40.0834 31.7501 40.0834C32.9001 40.0834 33.8334 41.0167 33.8334 42.1667C33.8334 43.3167 32.9001 44.2501 31.7501 44.2501ZM39.0417 50.5001C37.3167 50.5001 35.9167 49.1001 35.9167 47.3751C35.9167 45.6501 37.3167 44.2501 39.0417 44.2501C40.7667 44.2501 42.1667 45.6501 42.1667 47.3751C42.1667 49.1001 40.7667 50.5001 39.0417 50.5001Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 31.7499C39.1504 31.7499 40.0832 30.8172 40.0832 29.6666C40.0832 28.516 39.1504 27.5833 37.9998 27.5833C36.8492 27.5833 35.9165 28.516 35.9165 29.6666C35.9165 30.8172 36.8492 31.7499 37.9998 31.7499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M37.9998 19.2499C39.1504 19.2499 40.0832 18.3172 40.0832 17.1666C40.0832 16.016 39.1504 15.0833 37.9998 15.0833C36.8492 15.0833 35.9165 16.016 35.9165 17.1666C35.9165 18.3172 36.8492 19.2499 37.9998 19.2499Z"
              fill="#3981D3"
            ></path>
            <path
              d="M45.2915 25.5C47.0174 25.5 48.4165 24.1009 48.4165 22.375C48.4165 20.6491 47.0174 19.25 45.2915 19.25C43.5656 19.25 42.1665 20.6491 42.1665 22.375C42.1665 24.1009 43.5656 25.5 45.2915 25.5Z"
              fill="#3981D3"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col items-center bg-white px-4 py-10">
          <h2 class="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Cuaca
          </h2>
          <br />
          <div class="w-full px-10">
            <div class="flex items-center rounded-xl bg-gray-900 p-4">
              <div class="flex items-center justify-center w-56">
                <p class="font-bold text-white">{{get.cuaca}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </section>


  <div class="flex flex-col items-center justify-center space-y-10 show-bounce">
    <div class="text-6xl text-blue-800 font-bold pt-28" v-if="amount"> 
      <span class="delete" v-for="get in amount" :key="get.id"> {{ get.amount }}</span>
    </div>
    <div v-else>
      <h1>Memuat...</h1>
    </div>
    <div>
      <BottomBar/>
    </div>
     <div v-if="isExceedingLimit" class="exceeds-limit-alert">
  Peringatan: Hidrasi Anda melebihi batas!
</div>
<div v-else class="exceeds-limit-message">
  Hidrasi Anda terpenuhi.
</div>
  </div>

  <div
    class="mt-20 flex flex-col items-center h-[1600px] md:h-[1300px] lg:h-[800px] bg-[#F3F4F6]"
  >
    <div
      class="mt-10 text-2xl lg:text-3xl lg:mt-20 lg:mb-20 md:mt-20 md:mb-20 font-bold"
    >
      <span>Artikel</span>
    </div>
    <div
      class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows md:gap-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10"
    >
      <div
        class="flex flex-col w-[350px] h-[450px] mt-10 border border-gray-400"
        v-for="art in artikel"
        :key="art.id"
        @click="showReadMore(art)"
      >
        <img class="w-full h-full object-cover" :src="art.image_url" alt="pict" />
        <span class="m-3 font-semibold text-base">{{ art.judul }}</span>
        <span class="m-3 font-thin text-base">{{ art.konten.length > 100 ? art.konten.slice(0, 100) + '...' : art.konten }}</span>
        <span class="m-3 font-light text-gray-500 text-base">{{ art.created_at }}</span>
      </div>
    </div>
  </div>

  <div></div>

  <div class="h-screen w-screen flex items-center justify-center">
    <h1 class="absolute text-3xl font-extrabold text-center">
      Kesehatan di ujung <br />
      jari anda
    </h1>
    <svg
      id="svg"
      class="inline-block fill-current w-full h-auto text-blue-800/40"
      viewBox="0 0 1440 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path"
        d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"
      ></path>
    </svg>
  </div>

  <div class="flex flex-col items-center justify-center space-y-10">
    <div class="flex space-x-10">
      <h1>Home</h1>
      <h1>Detail</h1>
      <h1>Artikel</h1>
    </div>
    <div class="font-bold">
      <h1>Fitri Puspitasari</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BottomBar from "@/components/BottomBar.vue";
import gsap from "gsap";
import { TweenMax, Power0 } from "gsap";
import Navbar from "../components/Navbar.vue";


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
  components: {
    BottomBar,
    Navbar,
  },
  computed: {
    ...mapGetters(["getArtikelData"]),
    ...mapGetters(["getUserDetail"]),
    ...mapGetters(["getAmountData"]),
    ...mapGetters(["isExceedingLimit"]),

    showNotification() {
      // Gantikan logika ini dengan kondisi yang sesuai untuk menampilkan notifikasi
      // Di sini, Anda bisa menggunakan properti "showNotification" untuk menguji notifikasi
      return true; // Ubah menjadi false jika Anda tidak ingin menampilkan notifikasi
    },
    artikel() {
      return this.getArtikelData;
    },
    getUser() {
      return this.getUserDetail;
    },
    amount() {
      return this.getAmountData;
    }
  },
  created() {
    // Set interval untuk memeriksa setiap 2 jam
    setInterval(() => {
      if (this.showReminder) {
        // Tampilkan notifikasi atau lakukan tindakan lainnya
        console.log("Jangan lupa minum air!");
      }
    }, 2 * 60 * 60 * 1000);
  },
  methods: {
    showReadMore(art) {
      this.$router.push(`/detail-artikel/${art.id}`);
    },
     ...mapActions(["logout"]),
     async handleLogout() {
      try {
        await this.logout(); // Memanggil aksi logout dari store Vuex
        // Set state atau variabel untuk menunjukkan bahwa logout berhasil
        // Misalnya, untuk menampilkan pop-up logout berhasil
        this.logoutSuccess = true; 
        // Redirect ke halaman login setelah logout berhasil
        setTimeout(() => {
          this.$router.push('/'); // Mengarahkan pengguna kembali ke halaman utama
        }, 3000); // Misalnya, sembunyikan pop-up setelah 3 detik
      } catch (error) {
        console.error("Error during logout:", error);
        // Tangani kesalahan jika logout gagal
        // Misalnya, menampilkan pesan kesalahan kepada pengguna
      }
    }
  },
  mounted() {
    this.$store.dispatch('getDetail');
    this.$store.dispatch('getArtikel');
    this.$store.dispatch('getAmount');
  },
};
</script>

<style scoped>
body {
  margin: 0;
  height: 200vh; /* agar scroll bisa terjadi */
}
.exceeds-limit-message  {
  color: red;
  font-weight: bold;
}
</style>