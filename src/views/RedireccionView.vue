<script setup>
import { ref } from 'vue'
import { useRoute } from "vue-router";
import axios from 'axios'

const route = useRoute();
const deviceType = ref(getDeviceType());

function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "Desktop";
}

async function getOriginFromIPAPI() {
    try {
        const { data } = await axios.get('https://ipapi.co/json/');
        return data.country_name || 'unknown';
    } catch (error) {
        console.error("Error obteniendo el origin desde IPAPI:", error);
        return 'unknown';
    }
}

const validar = ref(false)

const validarLink = async () => {
    const claveLocalStorage = 'ultimaVezRegistrado_' + route.params.uuid;
    const ultimaVezRegistrado = localStorage.getItem(claveLocalStorage);
    const ahora = new Date().getTime();

    try {
        const params = {
            "link_short": route.params.uuid
        }
        const { data } = await axios.post(`https://api.mxclick.site/api/view/validate`, params)

        if (data.length > 0) {
            if (ultimaVezRegistrado === null || (ahora - ultimaVezRegistrado > 24 * 60 * 60 * 1000)) {
                const origin = await getOriginFromIPAPI();

                const enviarParams = {
                    "link_uuid": data[0].link_uuid,
                    "device": deviceType.value,
                    "origin": origin
                }

                const { data: enviarData } = await axios.post(`https://api.mxclick.site/api/view/logger`, enviarParams)
                if (enviarData.status === "OK") {
                    localStorage.setItem(claveLocalStorage, ahora.toString());
                }
            }
            // La redirección siempre ocurre, independientemente del registro del clic
            window.location = data[0].link_real
        } else {
            validar.value = true
        }
    } catch (error) {
        console.error(error)
    }
}

validarLink()
</script>

<template>
    <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full text-lg text-black bg-white z-5"
    v-if="validar">El link no existe</div>
    <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full text-lg text-black bg-white z-5"
    v-else></div>
</template>
