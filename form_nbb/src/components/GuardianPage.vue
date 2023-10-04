<template>
  <div class="d-flex justify-md-space-between">
    <span class="text-h6">Guardian Details</span>
  </div>
  <h4 class="pt-6">Please provide the contact information for two members:</h4>
  <div class="py-6 d-flex ">
    <v-row>
      <v-col cols="12" md="6" sm="12">

          <div>
            <p class="my-2">Guardian-I</p>

            <h4 >Name:</h4>
            <v-text-field
                v-model="EmployeeDetails.FirstRelationName"
                placeholder="Enter your Full Name"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>

          <div>
            <h4 >Relation to Applicant:</h4>
            <v-text-field
                v-model="EmployeeDetails.FirstRelation"

                placeholder="Date of Birth"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
          <div>
            <h4>Email Address:</h4>
            <v-text-field
                v-model="EmployeeDetails.FirstRelationEmail"
                placeholder="Enter your Email"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
          <div>
            <h4 >Phone Number:</h4>
            <v-text-field
                v-model="EmployeeDetails.FirstRelationPhone"
                placeholder="Phone Number"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">

      <div>
        <p class="my-2">Guardian-II</p>

        <h4 >Name:</h4>
            <v-text-field
                v-model="EmployeeDetails.SecondRelationName"
                placeholder="Enter your Full Name"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
          <div>
            <h4 >Relation to Applicant:</h4>
            <v-text-field
                v-model="EmployeeDetails.SecondRelation"

                placeholder="Date of Birth"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
          <div>
            <h4 >Email Address:</h4>
            <v-text-field
                v-model="EmployeeDetails.SecondRelationEmail"
                placeholder="Enter your Email"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
          <div>
            <h4 class>Phone Number:</h4>
            <v-text-field
                v-model="EmployeeDetails.SecondRelationPhone"
                placeholder="Phone Number"
                variant="outlined"
                density="compact"
            ></v-text-field>
          </div>
      </v-col>
    </v-row>
  </div>


</template>

<script setup lang="ts">

import {useCounterStore} from '@/store/store'
// const store = useCounterStore()

const { EmployeeDetails } = useCounterStore()


</script>

<style scoped>

</style>