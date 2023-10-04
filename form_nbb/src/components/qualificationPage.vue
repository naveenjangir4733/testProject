<template>

  <!--    Highest level of education -->

  <div>
    <h4 class="my-2">Highest level of education completed:</h4>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-select
            v-model="select"
            :rules="educationalRules"
            :items="graduation"
            variant="outlined"
            density="compact"
            class="mt-6  g"
        ></v-select>
      </v-col>
    </v-row>
  </div>

  <!--    Matric-->


  <div
      v-if="select !== 'Select' "
      class="my-2"
  >
    <h3>Matric</h3>

    <v-row>
      <v-col cols="12" md="4" sm="6">

        <h4 class="my-1">Passing Year:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.matric.passingYear"
            :rules="passingRules"
            variant="outlined"
            density="compact"
            class="style1"
        >
          <VueDatePicker
              v-model="store.EmployeeDetails.EducationDetails.matric.passingYear"
              year-picker
              placeholder="Select your Passing Year"
              variant="outlined"
              required
          />
<!--          <p v-if="store.yearValidate" style="font-size: 12px; color:#bf344d" class="ml-5 mt-1">Passing year is mandatory </p>-->

        </v-text-field>

        <!--        <v-text-field-->
        <!--            v-model="store.EmployeeDetails.EducationDetails.matric.passingYear"-->
        <!--            :rules="passingRules"-->
        <!--            placeholder="Enter your Passing Year"-->
        <!--            variant="outlined"-->
        <!--            density="compact"-->
        <!--            type="number"-->
        <!--            min="0"-->
        <!--            max="4"-->
        <!--        >-->
        <!--        </v-text-field>-->
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <h4 class="my-1"> Percentage %:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.matric. percentage"
            :rules="percentageRules"
            placeholder="Enter your Percentage"
            variant="outlined"
            density="compact"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <h4 class="my-1">Name of Institution:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.matric.institutionName"
            :rules="institutionRules"
            placeholder="Enter your Institution name"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>


  <!--    Intermediate-->


  <div
      class="my-2"
      v-if="select === graduation[1] || select === graduation[2] || select === graduation[3]"
  >
    <h3 class="my-2">Intermediate</h3>

    <v-row>

      <v-col cols="12" md="3" sm="6">

        <h4 class="my-1">Passing Year:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.intermediate.passingYear"

            :rules="passingRules"
            placeholder="Enter your Passing Year"
            variant="outlined"
            density="compact"
            type="number"
            class="style1"
        >
          <VueDatePicker
              v-model="store.EmployeeDetails.EducationDetails.intermediate.passingYear"
              year-picker
              placeholder="Select your Passing Year"
              variant="outlined"
              required
          />
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1"> Stream :</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.intermediate.stream"
            :rules="StreamRules"
            placeholder="Enter your Educational Background"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1"> Percentage %:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.intermediate. percentage"
            :rules="percentageRules"
            placeholder="Enter your Percentage"
            variant="outlined"
            type="number"
            density="compact"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1">Name of Institution:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.intermediate.institutionName"
            :rules="institutionRules"
            placeholder="Enter your Institution name"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>

  <!--    Graduation-->


  <div
      class="my-2"
      v-if="select === graduation[2] || select === graduation[3]"
  >
    <h3 class="my-2">Graduation</h3>

    <v-row>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1">Passing Year:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.graduation.passingYear"
            :rules="passingRules"
            placeholder="Enter your Passing Year"
            variant="outlined"
            density="compact"
            type="number"
            class="style1"
        >
          <VueDatePicker
              v-model="store.EmployeeDetails.EducationDetails.graduation.passingYear"
              year-picker
              placeholder="Select your Passing Year"
              variant="outlined"
              required
          />
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">

        <h4 class="my-1">Stream:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.graduation.stream"
            :rules="StreamRules"
            placeholder="Enter your Educational Background"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1"> Percentage %:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.graduation.percentage"
            :rules="percentageRules"
            placeholder="Enter your Percentage"
            variant="outlined"
            density="compact"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1"> Name of Institution:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.graduation.institutionName"
            :rules="institutionRules"
            placeholder="Enter your Institution name"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>


  <!--    Post Graduation -->


  <div
      class="my-2"
      v-if="select === graduation[3]"
  >
    <h3 class="my-2">Post Graduation</h3>

    <v-row>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1">Passing Year:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.postGraduation.passingYear"
            :rules="passingRules"
            placeholder="Enter your Passing Year"
            variant="outlined"
            density="compact"
            type="number"
            class="style1"
        >
          <VueDatePicker
              v-model="store.EmployeeDetails.EducationDetails.postGraduation.passingYear"
              year-picker
              placeholder="Select your Passing Year"
              variant="outlined"
              required
          />
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">

        <h4 class="my-1">Stream :</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.postGraduation.stream"
            :rules="StreamRules"
            placeholder="Enter your Educational Background"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1"> Percentage %:</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.postGraduation.percentage"
            :rules="percentageRules"
            placeholder="Enter your Percentage"
            type="number"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <h4 class="my-1">Name of Institution :</h4>
        <v-text-field
            v-model="store.EmployeeDetails.EducationDetails.postGraduation.institutionName"
            :rules="institutionRules"
            placeholder="Enter your Institution name"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">

import {useCounterStore} from "@/store/store";

const store = useCounterStore()


import {inject, ref} from "vue";

const select = ref('Select')

const graduation = ['Matric', 'Intermediate', 'Graduation', 'Post-Graduation']


const educationalRules = [
  (v: string) => {
    if (v === 'Select') {
      return 'Please select your qualification'
    } return  true
  }
];

const institutionRules = [
  (v: string) => !!v || 'Name of Institution is required',
];

const passingRules = [
  // (v: string) => !!v || 'Passing Year is required',
  (v: string) => {
    if (v.length === 0){
      return 'File is mandatory'
    } return true
  }
];

const percentageRules = [
  (v: string) => !!v || 'Percentage is required',
];
const StreamRules = [
  (v: string) => !!v || 'Stream is required',
];


</script>

<style scoped>


</style>