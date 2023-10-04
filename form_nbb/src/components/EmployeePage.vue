<template>
  <div class="d-flex justify-space-between">
    <span class="text-h6">Employment History (if Applicable)</span>
  </div>
  <div class="py-8">
    <div>
      <h4 class="my-2 ">Current Employer:</h4>
      <v-text-field
          v-model="EmployeeDetails.CurrentEmployer"
          placeholder="Enter your Full Name"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Current Job Title:</h4>
      <v-text-field
          v-model="EmployeeDetails.CurrentJobTitle"
          placeholder="Enter Your Job Title"
          variant="outlined"
          density="compact"

      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Current Length of Employment:</h4>
      <v-text-field
          v-model="EmployeeDetails.CurrentLengthEmp"

          placeholder="Phone Number"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Previous Employer:</h4>
      <v-text-field
          v-model="EmployeeDetails.PrevEmployer"
          placeholder="Current Address"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Previous Job Title:</h4>
      <v-text-field
          v-model="EmployeeDetails.PrevJobTitle"
          placeholder="Enter Your Job Title"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Previous Length of Employment:</h4>
      <v-text-field
          v-model="EmployeeDetails.PrevLengthEmp"

          placeholder="Phone Number"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Software Development Experience:</h4>
      <v-text-field
          v-model="EmployeeDetails.softwareExperience"

          placeholder="Experience"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">Do you have any experience with software development ?</h4>
      <v-radio-group
          v-model="inline"
          small
          inline
      >
        <v-radio
            small
            label="Yes"
            :value=true
            color="indigo"
            density="comfortable"
        ></v-radio>
        <v-radio
            small
            label="No"
            :value=false
            color="indigo"
        ></v-radio>
      </v-radio-group>
    </div>
    <div v-if="inline">
      <h4 class="my-2"> If Yes,Please provide a brief overview of your experience:</h4>
      <v-text-field
          v-model="EmployeeDetails.briefExperience"
          placeholder="Experience Overview"
          variant="outlined"
          density="compact"

      ></v-text-field>
    </div>
    <h4 class="my-6">Motivation for joining the training center:</h4>
    <div>
      <h4 class="my-2">Why are you interested joining NBB ?</h4>
      <v-text-field
          v-model="EmployeeDetails.Interest"
          placeholder="Reason"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
    <div>
      <h4 class="my-2">What are your career goals in the software development industry ?</h4>
      <v-text-field
          v-model="EmployeeDetails.Goals"
          placeholder="Goals"
          variant="outlined"
          density="compact"
      ></v-text-field>
    </div>
  </div>



</template>

<script setup lang="ts">

import {useCounterStore} from '@/store/store'
import {ref} from "vue";

const {EmployeeDetails} = useCounterStore()

const inline = ref(null)



</script>

<style scoped>

</style>