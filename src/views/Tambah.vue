<template>
    <div class="w-screen bg-white pt-20">
      <main class="relative mx-auto px-10 md:max-w-screen-md">
        <div class="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-white px-7 py-7 shadow-md lg:absolute lg:w-70">
          <div class="pb-2 text-xl font-medium text-orange-600">Tambah Foto</div>
          <hr class="h-1 w-10 bg-orange-700" />
      <div>
        <form @submit.prevent="uploadPhoto">
          <label for="photo">Upload Foto:</label>
          <input type="file" id="photo" ref="photoInput">
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
       <form class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
        <div class="pb-2 text-xl font-medium text-orange-600">Informasi Umum</div>
        <div class="pb-1 text-xl font-medium text-orange-300">Informasi Umum</div>
            <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your e-mail:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email" /></div>
            <div class="mb-4"><label class="text mb-2 block font-medium" for="subject">Subject:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject"/></div>
            <div class="mb-4"><label class="text mb-2 block font-medium" for="message">Message:</label><textarea class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message"></textarea></div>
            <div class="flex items-center">
              <div class="flex-1"></div>
              <button class="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
            </div>
          </form>

      </main>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    methods: {
        async uploadPhoto() {
            const photoInput = this.$refs.photoInput;
            if (!photoInput.files.length) {
                alert("Silahkan pilih foto terlebih dahulu!");
                return;
            }

            const formData = new FormData();
            formData.append('photo', photoInput.files[0]);

            try {
                const response = await axios.post('YOUR_API_ENDPOINT', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Handle response sesuai kebutuhan
                console.log(response.data);
            } catch (error) {
                console.error("Error uploading photo:", error);
            }
        }
    }
}
</script>