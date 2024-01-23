<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import Chart from "chart.js/auto";
import "vue3-toastify/dist/index.css";

const route = useRoute();
const router = useRouter();
const token = ref(localStorage.getItem("token"));
const total = ref("");
const date = ref(new Date().toISOString().split("T")[0]);
const grafica = ref(false);
const doughnutChartInstance = ref(null);
const pieChartInstance = ref(null);

const fetchData = async (endpoint, params) => {
  const headers = {
    Authorization: "Bearer " + token.value,
    "Content-Type": "application/json",
  };
  return await axios.post(endpoint, params, { headers });
};

const getData = async () => {
  try {
    const param = {
      link_uuid: route.params.uuid,
      date: date.value,
    };
    const { data: info } = await fetchData(
      `https://api.mxclick.site/api/link/view`,
      param
    );
    total.value = info;

    if (info.length > 0) {
      grafica.value = true;
      const data = {
        labels: info[0].origins.map((o) => o.country),
        datasets: [
          {
            //... your dataset details
            data: info[0].origins.map((o) => o.total),
            backgroundColor: [
              "#FF6384", // Rojo
              "#36A2EB", // Azul
              "#FFCE56", // Amarillo
              "#4BC0C0", // Cian
              "#9966FF", // Morado
              "#FF9F40", // Naranja
              "#4D4D4D", // Gris oscuro
              "#77DD77", // Verde claro
              "#FFD700", // Dorado
              "#C71585", // Violeta medio
            ],
            borderColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#4D4D4D",
              "#77DD77",
              "#FFD700",
              "#C71585",
            ],
            borderWidth: 1,
          },
        ],
      };

      if (!doughnutChartInstance.value) {
        const ctxDoughnut = document
          .getElementById("doughnutChart")
          .getContext("2d");
        doughnutChartInstance.value = new Chart(ctxDoughnut, {
          type: "doughnut",
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Clics Por pais",
              },
            },
          },
        });
      } else {
        doughnutChartInstance.value.data = data;
        doughnutChartInstance.value.update();
      }

      const deviceData = {
        labels: info[0].devices.map((o) => o.device),
        datasets: [
          {
            data: info[0].devices.map((o) => o.total),
            backgroundColor: [
              "#FF6384", // Rojo
              "#36A2EB", // Azul
              "#FFCE56", // Amarillo
              "#4BC0C0", // Cian
              "#9966FF", // Morado
              "#FF9F40", // Naranja
              "#4D4D4D", // Gris oscuro
              "#77DD77", // Verde claro
              "#FFD700", // Dorado
              "#C71585", // Violeta medio
            ],
            borderColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#4D4D4D",
              "#77DD77",
              "#FFD700",
              "#C71585",
            ],
            borderWidth: 1,
          },
        ],
      };

      if (!pieChartInstance.value) {
        const ctxPie = document.getElementById("pieChart").getContext("2d");
        pieChartInstance.value = new Chart(ctxPie, {
          type: "doughnut",
          data: deviceData,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Clics por dispositivo",
              },
            },
          },
        });
      } else {
        pieChartInstance.value.data = datados;
        pieChartInstance.value.update();
      }
    }else{
      grafica.value = false
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(getData);

const eliminar = async () => {
  try {
    const params = { link_uuid: route.params.uuid };
    const { data } = await fetchData(
      `https://api.mxclick.site/api/link/remove`,
      params
    );

    if (data.status === "OK") {
      toast.success(data.message, {
        theme: "colored",
        autoClose: 1500,
        position: toast.POSITION.BOTTOM_LEFT,
        transition: toast.TRANSITIONS.ZOOM,
      });
      setTimeout(() => router.push("/"), 1600);
    }
  } catch (error) {
    console.error(error);
  }
};
const deleteItem = ref(false)
const show = async () => {
  deleteItem.value = true
};
const noshow = async () => {
  deleteItem.value = false
};
</script>

<template>
  <div
    class="p-4 text-4xl font-extrabold text-center text-gray-900 bg-gray-200"
  >
    <div v-if="grafica">{{ total[0].clics }} clics</div>
    <div v-else>Sin datos aun</div>
  </div>

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
          <span class="opacity-60"><span>Estadistica</span></span>
        </li>
      </ol>
    </nav>
  </div>

  <div class="flex items-center justify-between gap-4">
    <button class="p-4" @click="show"><font-awesome-icon :icon="['fas', 'trash-can']" /> Eliminar enlace</button>
    <input type="date" v-model="date" @change="getData" />
  </div>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full text-lg text-black z-5 bg-white/90"
    v-if="deleteItem"
  >
    <div class="w-[80%] bg-white shadow-lg"><p class="p-6 pb-0">¿Realmente quieres eliminar el acortador?</p>
      <div class="flex items-center justify-between p-6">
       <button class="px-3 py-1 mt-4 text-sm border border-solid border-slate-900" @click="noshow">Cancelar</button> 
       <button class="px-3 py-1 mt-4 text-sm text-white border border-solid bg-slate-900 border-slate-900" @click="eliminar">Eliminar</button>
      </div>
  </div>
 </div> 
  <canvas id="doughnutChart" width="200" height="200"></canvas><br><br><br>
  <canvas id="pieChart" width="200" height="400"></canvas>
</template>
