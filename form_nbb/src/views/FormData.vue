<template>
  <div class="d-flex justify-center">
    <v-btn
        color="primary"
        class="mt-12"
        @click="store.dialog=true"
    >
      Open Form
    </v-btn>
  </div>
  <v-dialog
      persistent
      scrollable
      v-model="store.dialog"
      style=" z-index: 1"
  >

    <div class="d-flex align-center justify-center ma-0">
      <v-card
          elevation="12"
          height="550"
          class="card_width"
      >
        <div class="d-flex justify-center py-6 text-h6">
          Employee Details
        </div>
        <v-form @submit.prevent
                ref="form"
        >

          <v-main scrollable
                  class="py-16 px-8"
          >
            <v-window v-model="store.step">

              <v-window-item :value="1">

                <PersonalPage/>

              </v-window-item>


              <v-window-item :value="2">

                <EmployeePage/>

              </v-window-item>


              <v-window-item :value="3">

                <GuardianPage/>

              </v-window-item>

              <v-window-item :value="4">

                <DetailPreview/>

              </v-window-item>

            </v-window>
          </v-main>
        </v-form>


        <div class="footer_container">

          <v-card-actions class="px-6 px-xs-8">

            <v-btn
                v-if="store.step <= 1"
                color="primary"
                variant="plain"
                @click="store.dialog = false"
            >
              <v-icon
                  icon="mdi-close"
              ></v-icon>
              Close
            </v-btn>

            <v-btn
                v-if="store.step > 1"
                variant="plain"
                color="primary"
                @click="store.step--"
            >
              <v-icon
                  start
                  icon="mdi-arrow-left"
              ></v-icon>
              Back

            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                v-if="store.step < 4"
                color="primary"
                variant="plain"
                type=""
                @click="next"
            >
              Next
              <v-icon
                  end
                  icon="mdi-arrow-right"
              ></v-icon>
            </v-btn>

            <v-btn
                v-if="store.step >= 4"
                color="primary"
                variant="plain"
                :disabled="!store.check"
                @click="Submit"
            >
              Submit
            </v-btn>


          </v-card-actions>
        </div>

      </v-card>

    </div>
  </v-dialog>

</template>


<script setup lang="ts">

import PersonalPage from "@/components/personalPage.vue";
import EmployeePage from "@/components/EmployeePage.vue";
import GuardianPage from "@/components/GuardianPage.vue";
import DetailPreview from "@/components/detailPreview.vue";
import {useCounterStore} from '@/store/store'
import {ref} from "vue";


const store = useCounterStore()
const {Submit} = useCounterStore()

const form = ref()

const next = async () => {
  const {valid} = await form.value?.validate()
  if (valid) {
    store.step++
  }
}

</script>

<style scoped>

.footer_container {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.card_width {
  width: 75%;

}

@media (max-width: 600px) {
  .card_width {
    width: 100%;
  }
}


</style>