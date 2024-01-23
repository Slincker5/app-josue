<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const token = ref(localStorage.getItem("token"));
const link_name = ref("");
const link_short = ref("");
const link_real = ref("");

onMounted(() => {
  link_short.value = generateShortId(7);
});

const generateShortId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const agregarAcortador = async () => {
  try {
    const headers = {
      Authorization: "Bearer " + token.value,
      "Content-Type": "application/json",
    };
    const param = {
      link_name: link_name.value,
      link_short: link_short.value,
      link_real: link_real.value,
    };
    const { data } = await axios.post(
      "https://api.mxclick.site/api/link/create",
      param,
      { headers }
    );
    if (data.status === "OK") {
      toast.success(data.message, {
        theme: "colored",
        autoClose: 1500,
        position: toast.POSITION.TOP_LEFT,
        transition: toast.TRANSITIONS.ZOOM,
      });
    } else {
      toast.error(data.message, {
        theme: "colored",
        autoClose: 1500,
        position: toast.POSITION.TOP_LEFT,
        transition: toast.TRANSITIONS.ZOOM,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <div class="w-1/2 mt-4 text-left">
    <nav aria-label="breadcrumb" class="w-max">
      <ol
        class="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60"
      >
        <li
          class="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-pink-500"
        >
          <router-link to="/" class="opacity-60"> Inicio </router-link>
          <span
            class="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"
            >/</span
          >
        </li>
        <li
          class="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-pink-500"
        >
          <span class="opacity-60">
            <span>Crear acortador</span>
          </span>
        </li>
      </ol>
    </nav>
  </div>

  <h1 class="p-4 text-black">Crear Acortador</h1>
  <form class="p-4 pt-0" @submit.prevent="agregarAcortador">
    <div
      class="flex items-center justify-between border border-solid border-[#ddd] mb-6"
    >
      <input
        type="text"
        placeholder="Titulo del enlace"
        class="flex-1 py-2 pl-4 rounded-sm outline-0"
        required
        v-model="link_name"
      />
      <font-awesome-icon
        :icon="['fas', 'file-signature']"
        class="py-2 pr-4 text-gray-500"
      />
    </div>

    <div
      class="flex items-center justify-between border border-solid border-[#ddd] mb-6"
    >
      <input
        type="text"
        placeholder="URL para acortar"
        class="flex-1 py-2 pl-4 rounded-sm outline-0"
        required
        v-model="link_real"
      />
      <font-awesome-icon
        :icon="['fas', 'link']"
        class="py-2 pr-4 text-gray-500"
      />
    </div>

    <div
      class="flex items-center justify-between border border-solid border-[#ddd] mb-6 w-full overflow-hidden"
    >
      <div class="py-2 pl-4 rounded-sm">
        <span class="text-green-500">https://</span>mxclick.site/
      </div>
      <input
        type="text"
        placeholder="Genera un UUID"
        class="flex-1 py-2 overflow-hidden outline-0"
        v-model="link_short"
        required
      />
      <font-awesome-icon
        :icon="['fas', 'pen']"
        class="py-2 pr-4 text-gray-500"
      />
    </div>
    <input
      type="submit"
      class="mb-4 inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-[#1e272e] rounded-sm hover:bg-[#0e1216] focus:shadow-outline focus:outline-none w-full"
      value="Generar enlace"
    />
  </form>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  font-size: 16px;
  outline: 0;
  text-decoration: none;
}
</style>
