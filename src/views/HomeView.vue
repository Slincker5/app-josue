<script setup>
import { ref } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref(localStorage.getItem("username"));
const token = ref(localStorage.getItem("token"));
const total_clics = ref("");
const clics = async () => {
  try {
    const headers = {
      Authorization: "Bearer " + token.value,
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(
      "https://api.mxclick.site/api/link/clics",
      { headers }
    );
    total_clics.value = data[0].total_clics;
  } catch (error) {
    console.error(error);
  }
};
clics();

const list = ref([]);
const acortadores = async () => {
  try {
    const headers = {
      Authorization: "Bearer " + token.value,
      "Content-Type": "application/json",
    };
    const { data } = await axios.get("https://api.mxclick.site/api/link/list", {
      headers,
    });
    list.value = data;
  } catch (error) {
    console.error(error);
  }
};
acortadores();

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Enlace copiado al portapapeles.", {
      theme: "colored",
      autoClose: 1500,
      position: toast.POSITION.TOP_LEFT,
      transition: toast.TRANSITIONS.ZOOM,
    });
  } catch (err) {
    console.error("No se pudo copiar el texto:", err);
  }
}

function shareLink(
  url,
  title = "Compartir enlace",
  text = "Mira este enlace!"
) {
  if (navigator.share) {
    // Usar la API Web Share
    navigator
      .share({
        title: title,
        text: text,
        url: url,
      })
      .then(() => {
        console.log("Enlace compartido exitosamente!");
      })
      .catch((error) => {
        console.log("Ocurrió un error al compartir:", error);
      });
  } else {
    console.log("La API Web Share no está disponible en este navegador.");
  }
}

const cerrarSesion = () => {
  localStorage.clear();
  router.push('/login')
};
</script>

<template>
  <main>
    <div
      class="border border-solid border-[#e6e4e4] shadow-md w-[95%] mx-auto mt-2"
    >
      <div class="flex items-center gap-2 p-4">
        <img src="../../public/usuario.png" class="w-[40px] h-[40px] block" />
        <div>
          <span class="block text-xs font-light leading-3 text-gray-400"
            >Bienvenido de nuevo,</span
          >
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            {{ username }}
          </h2>
        </div>
      </div>
      <div class="flex items-center justify-between bg-gray-100">
        <div
          class="px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"
        >
          {{ list.length }} enlaces
        </div>
        <div
          class="px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"
        >
          {{ total_clics }} vistas
        </div>
        <button class="px-4 py-3 text-sm text-center" @click="cerrarSesion">Cerrar sesion</button>
      </div>
    </div>
    <div class="p-4">
      <router-link
        to="/crear-enlace"
        class="block px-4 py-2 text-center text-white bg-slate-800 hover:bg-slate-700"
        >Crear acortador</router-link
      >
    </div>

    <h2 class="p-4 pt-0 font-medium text-gray-900">
      Ultimos acortadores creados
    </h2>
    <div
      class="p-4 border-b border-solid border-[#ddd]"
      v-for="(link, index) in list"
      :key="link.id"
    >
      <div>
        <b class="font-medium text-black">#{{ index }}</b>
        https://mxclick.site/{{ link.link_short }}
      </div>
      <div class="flex items-center gap-4">
        <button
          class="px-3 py-1 mt-4 text-sm border border-solid border-slate-900"
          @click="copyToClipboard(`https://mxclick.site/${link.link_short}`)"
        >
          Copiar
        </button>
        <button
          class="px-3 py-1 mt-4 text-sm border border-solid border-slate-900"
          @click="shareLink(`https://mxclick.site/${link.link_short}`)"
        >
          Compartir
        </button>
        <router-link :to="`/enlace/${link.link_uuid}`"
          class="px-3 py-1 mt-4 text-sm border border-solid border-slate-900"
        >
          Stats
        </router-link>
      </div>
    </div>
  </main>
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
