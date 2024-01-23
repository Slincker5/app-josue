<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const router = useRouter();

const username = ref("");
const pass = ref("");
const process = ref(false);

const login = async () => {
  try {
    if (!username.value || !pass.value) {
      toast.error("Debes llenar ambos campos.", {
        theme: "colored",
        autoClose: 1500,
        position: toast.POSITION.BOTTOM_LEFT,
        transition: toast.TRANSITIONS.ZOOM,
      });
    } else {
      process.value = true;
      const param = {
        username: username.value,
        pass: pass.value,
      };
      const { data } = await axios.post(
        "https://api.mxclick.site/api/auth/login",
        param
      );
      if (data.status === "OK") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_uuid", data.user_uuid);
        localStorage.setItem("username", data.username);
        router.push("/");
      } else {
        toast.error(data.message, {
          theme: "colored",
          autoClose: 1500,
          position: toast.POSITION.BOTTOM_LEFT,
          transition: toast.TRANSITIONS.ZOOM,
        });
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    process.value = false;
  }
};
const statusPass = ref(false);
let showPass;
onMounted(() => {
  const inputPass = document.getElementById("inputPass");
  showPass = () => {
    statusPass.value = !statusPass.value;
    if (statusPass.value) {
      inputPass.type = "text";
    } else {
      inputPass.type = "password";
    }
  };
});
</script>

<template>
  <div class="p-4shadow-lg">
    <form class="p-4" @submit.prevent="login">
      <h1 class="mb-1 text-lg font-medium text-black">Inicio de sesion</h1>
      <p class="mb-4 text-sm font-light text-gray-400">
        Panel de administracion
      </p>
      <div
        class="flex items-center justify-between border border-solid border-[#ddd] mb-6"
      >
        <input
          type="text"
          placeholder="Usuario"
          class="flex-1 py-2 pl-4 rounded-sm outline-0"
          v-model="username"
        />
        <font-awesome-icon
          :icon="['fas', 'user']"
          class="py-2 pr-4 text-gray-500"
        />
      </div>
      <div
        class="flex items-center justify-between border border-solid border-[#ddd] mb-6"
      >
        <input
          type="password"
          placeholder="Contraseña"
          id="inputPass"
          class="flex-1 py-2 pl-4 rounded-sm outline-0"
          v-model="pass"
        />
        <a href="#" @click.prevent="showPass">
          <font-awesome-icon
            :icon="['fas', 'eye-slash']"
            class="py-2 pr-4 text-gray-500"
            v-if="statusPass"
          />
          <font-awesome-icon
            :icon="['fas', 'eye']"
            class="py-2 pr-4 text-gray-500"
            v-else
          />
        </a>
      </div>
      <input
        type="submit"
        class="mb-4 inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-[#1e272e] rounded-sm hover:bg-[#0e1216] focus:shadow-outline focus:outline-none w-full"
        value="Entrar"
      />
    </form>
    <div class="p-4">
      <span class="block pb-4 text-gray-600">¿Aun no tienes cuenta?</span>
      <router-link
        to="/register"
        class="block w-full px-4 py-2 text-center text-gray-700 bg-transparent border border-gray-500 rounded hover:bg-gray-100 hover:text-black hover:border-black"
      >
        Crear Cuenta
      </router-link>
    </div>
  </div>

  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full text-lg text-black bg-white/90"
    v-if="process"
  >
    <font-awesome-icon :icon="['fas', 'circle-notch']" spin class="mr-2" />
    Procesando ...
  </div>
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
