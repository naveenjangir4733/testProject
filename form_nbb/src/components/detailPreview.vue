<template>
  <v-row no-gutters>
    <v-col cols="12" md="6" sm="12">
      <v-sheet class="pa-2">
        <div class="d-flex w-100 pa-2 mb-2 border ">
          <h4 class="w-50">FullName:</h4>

          <p>{{ store.EmployeeDetails.FullName }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Date of Birth:</h4>
          <p> {{ store.EmployeeDetails.DOB }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Email Address:</h4>
          <p> {{ store.EmployeeDetails.Email }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Phone Number:</h4>
          <p> {{ store.EmployeeDetails.Phone }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Current Address:</h4>
          <p> {{ store.EmployeeDetails.CurrentAddress }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Educational Background:</h4>
          <p> {{ store.EmployeeDetails.EducationalBackground }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Name of Institution:</h4>
          <p> {{ store.EmployeeDetails.InstitutionName }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Graduation Year:</h4>
          <p> {{ store.EmployeeDetails.GraduationYear }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Highest level of education completed:</h4>
          <p> {{ store.EmployeeDetails.HighEducation }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Current Employer:</h4>
          <p> {{ store.EmployeeDetails.CurrentEmployer }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Current Job Title:</h4>
          <p> {{ store.EmployeeDetails.PrevJobTitle }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Current Length of Employment:</h4>
          <p> {{ store.EmployeeDetails.CurrentLengthEmp }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Previous Employer:</h4>
          <p> {{ store.EmployeeDetails.PrevEmployer }}</p>
        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Previous Job Title:</h4>
          <p> {{ store.EmployeeDetails.PrevJobTitle }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Previous Length of Employment:</h4>
          <p> {{ store.EmployeeDetails.PrevLengthEmp }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Software Development Experience:</h4>
          <p> {{ store.EmployeeDetails.softwareExperience }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Brief overview of your experience:</h4>
          <p> {{ store.EmployeeDetails.briefExperience }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Interest of joining NBB:</h4>
          <p> {{ store.EmployeeDetails.Interest }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Career Goals:</h4>
          <p> {{ store.EmployeeDetails.Goals }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Name-I:</h4>
          <p> {{ store.EmployeeDetails.FirstRelationName }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Relation to Applicant-I:</h4>
          <p> {{ store.EmployeeDetails.FirstRelation }}</p>

        </div>
      </v-sheet>
    </v-col>


    <v-col cols="12" md="6" sm="12">
      <v-sheet class="pa-2">


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Email Address-I:</h4>
          <p> {{ store.EmployeeDetails.FirstRelationEmail }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Phone Number-I:</h4>
          <p> {{ store.EmployeeDetails.FirstRelationPhone }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Name-II:</h4>
          <p> {{ store.EmployeeDetails.SecondRelationName }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Relation to Applicant-II:</h4>
          <p> {{ store.EmployeeDetails.SecondRelation }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Email Address-II:</h4>
          <p> {{ store.EmployeeDetails.SecondRelationEmail }}</p>

        </div>
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Phone Number-II:</h4>
          <p> {{ store.EmployeeDetails.SecondRelationPhone }}</p>
        </div>

<!--        education details-->
<!--matric-->
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Matric Passing Year:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.matric.passingYear }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Matric Percentage :</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.matric.percentage }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Matric Name of  Institution:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.matric.institutionName }}</p>
        </div>


<!--        intermediate-->
        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Intermediate Passing Year:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.intermediate.passingYear }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Intermediate Stream:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.intermediate.stream }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Intermediate Percentage :</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.intermediate.percentage }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Intermediate Name of  Institution:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.intermediate.institutionName }}</p>
        </div>


<!--        Graduation -->


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Graduation Passing Year:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.graduation.passingYear }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Graduation Stream:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.graduation.stream }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Graduation Percentage :</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.graduation.percentage }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Graduation Name of  Institution:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.graduation.institutionName }}</p>
        </div>

<!--post-graduation-->


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Post Graduation Passing Year:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.postGraduation.passingYear }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Post Graduation Stream:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.postGraduation.stream }}</p>
        </div>

        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Post Graduation Percentage :</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.postGraduation.percentage }}</p>
        </div>


        <div class="d-flex w-100 pa-2 mb-2 border">
          <h4 class="w-50">Post Graduation Name of  Institution:</h4>
          <p> {{ store.EmployeeDetails.EducationDetails.postGraduation.institutionName }}</p>
        </div>





      </v-sheet>
    </v-col>
  </v-row>


  <v-checkbox
      v-model="store.check"
      label="I agree that all details mention above is correct."
  >

  </v-checkbox>


</template>

<script setup lang="ts">
import {useCounterStore} from '@/store/store'
const store = useCounterStore()


</script>

<style scoped>

</style>