<template>

  <div class="d-flex justify-space-between">

    <span class="text-h6">Personal Information</span>

  </div>
  <div class="py-4">

    <h4 class="my-2 ">Full Name:</h4>
    <v-text-field
        v-model="store.EmployeeDetails.FullName"
        :rules="nameRules"
        placeholder="Enter your Full Name"

        variant="outlined"
        density="compact"
    ></v-text-field>


    <h4 class="my-2">Date of Birth:</h4>
    <v-text-field
        v-model="store.EmployeeDetails.DOB"
        :rules="dateRules"
        placeholder="Date of Birth"
        variant="outlined"
        density="compact"
    ></v-text-field>


    <h4 class="my-2">Email Address:</h4>
    <v-text-field
        v-model="store.EmployeeDetails.Email"
        :rules="emailRules"
        placeholder="Enter your Email"
        variant="outlined"
        density="compact"></v-text-field>


    <h4 class="my-2">Phone Number:</h4>
    <v-text-field
        v-model="store.EmployeeDetails.Phone"
        :rules="phoneRules"
        placeholder="e.g. +91 xxxx-nnn-nnn"
        variant="outlined"
        density="compact"
        type="number"
    ></v-text-field>


    <h4 class="my-2">Current Address:</h4>
    <v-text-field
        v-model="store.EmployeeDetails.CurrentAddress"
        :rules="addressRules"
        placeholder="Enter your Current Address"
        variant="outlined"
        density="compact">

    </v-text-field>
    <QualificationPage/>
    <!--  photo upload-->

    <v-row>
      <v-col cols="12" md="6" sm="12">
        <h4 class="my-2 "> Image</h4>

<!--        <div class="pa-2 w-25 ma-4">-->
<!--          <div class="reverseAnimation"-->
<!--               v-if="show">-->
<!--          </div>-->
<!--          <p  v-if="show">file uploaded</p>-->
<!--        </div>-->

        <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Uploaded image"
            height="100"
            class="pb-4 pl-10"
        >

        <v-file-input
            variant="outlined"
            density="compact"
            prepend-icon=""
            label="Upload your Image"
            :rules="imageRules"
            @change="onFileSelected"
        >
        </v-file-input>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <h4 class="my-2 ">Signature</h4>

<!--        <div class="pa-2 w-25 ma-4">-->
<!--          <div class="reverseAnimation"-->
<!--               v-if="showSign">-->
<!--          </div>-->
<!--          <p  v-if="showSign">file uploaded</p>-->
<!--        </div>-->


        <img
            v-if="signUrl"
            :src="signUrl"
            alt="Uploaded image"
            height="100"
            width="200"
            class="pb-4 pl-10"
        >
        <v-file-input
            variant="outlined"
            density="compact"
            prepend-icon=""
            accept="image/*"
            :rules="signRules"
            label="Upload your Signature"
            @change="onSelectSign"
        >
        </v-file-input>
      </v-col>
    </v-row>
  </div>

</template>




<script setup lang="ts">
import QualificationPage from "@/components/qualificationPage.vue";
import sweetAlert from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'


import {useCounterStore} from '@/store/store'
const store = useCounterStore()
import { ref} from "vue";


const imageUrl = ref<string | null>(null)
const signUrl = ref<string | null>(null)
const show = ref(false)
const showSign = ref(false)



// image upload


const onFileSelected = (event: any) => {
  show.value = true
  imageUrl.value = URL.createObjectURL(event.target.files[0])
  store.EmployeeDetails.imageUrl = imageUrl.value
  showAlert()
  // console.log(imageUrl.value)
  show.value = true
  // setTimeout(() => {
  //   show.value = false
  // }, 2000)
};


// signature upload

const onSelectSign = (event: any) => {
  signUrl.value = URL.createObjectURL(event.target.files[0])
  store.EmployeeDetails.signatureUrl = signUrl.value
  showAlert()
  showSign.value = true
  // setTimeout(() => {
  //   showSign.value = false
  // }, 2000)
};

const showAlert = () => {
  sweetAlert.fire({
    position: 'center',
    icon: 'success',
    title: 'Image Uploaded',
    width:'400px',
    showConfirmButton: false,
    timer: 1500,
  })
}

const imageRules =[
  (v: string)=>{
  if(v.length=== 0){
    return 'File is mandatory'
  }return true
  }
]
const signRules = [
  (v: string)=>{
  if(v.length === 0){
    return 'File is mandatory'
  }return true
  }
]

const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
];
const dateRules = [
  (v: string) => !!v || 'Date is required',
];


const phoneRules = [
  (value: string) => {
    if (value?.length === 10 && /[0-9-]+/.test(value)) return true
    return 'Phone number needs to be at least 9 digits.'
  },
]

const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

const addressRules = [
  (v: string) => !!v || 'Address is required',
];


</script>

<style scoped>

/*.reverseAnimation {*/
/*  margin-bottom: 10px;*/
/*  height: 5px;*/
/*  background-color: #79e479;*/
/*  animation-name: example;*/
/*  animation-duration: 2s;*/
/*  position: relative;*/
/*}*/

/*@keyframes example {*/
/*  0% {*/
/*    width: 150px;*/
/*  }*/
/*  100% {*/
/*    width: 0;*/
/*  }*/
/*}*/

</style>















