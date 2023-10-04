import {defineStore} from 'pinia'
import { ref} from "vue";


interface Item {
    passingYear: string
    stream?: string
    percentage: string
    institutionName: string
}

interface Qualification {
    matric: Item
    intermediate: Item
    graduation: Item
    postGraduation: Item
}


interface IDetails {
    imageUrl: any
    signatureUrl: any
    FullName: string
    DOB: string
    Email: string
    Phone: string
    CurrentAddress: string

    CurrentEmployer: string
    CurrentJobTitle: string
    CurrentLengthEmp: string
    PrevEmployer: string
    PrevJobTitle: string
    PrevLengthEmp: string
    Interest: string
    Goals: string
    softwareExperience: string
    briefExperience: string

    FirstRelationName: string
    FirstRelation: string
    FirstRelationEmail: string
    FirstRelationPhone: string

    SecondRelationName: string
    SecondRelation: string
    SecondRelationEmail: string
    SecondRelationPhone: string

    EducationDetails: Qualification

}


export const useCounterStore = defineStore('counter', () => {

    const dialog = ref<boolean>(false)
    const show = ref<boolean>(false)
    const step = ref(1)
    const check = ref<boolean>(false)


    // const EducationDetails : Qualification =
    //         {
    //             matric: {
    //                 passingYear: '',
    //                 percentage: '',
    //                 institutionName: ''
    //             },
    //             intermediate: {
    //                 passingYear: '',
    //                 stream: '',
    //                 percentage: '',
    //                 institutionName: ''
    //             },
    //             graduation: {
    //                 passingYear: '',
    //                 stream: '',
    //                 percentage: '',
    //                 institutionName: ''
    //             },
    //             postGraduation: {
    //                 passingYear: '',
    //                 stream: '',
    //                 percentage: '',
    //                 institutionName: ''
    //             },
    //         }

    const Details: IDetails = {
        imageUrl: "",
        signatureUrl: '',
        FullName: '',
        DOB: '',
        Email: '',
        Phone: '',
        CurrentAddress: '',


        CurrentEmployer: '',
        CurrentJobTitle: '',
        CurrentLengthEmp: '',
        PrevEmployer: '',
        PrevJobTitle: '',
        PrevLengthEmp: '',
        Interest: '',
        Goals: '',
        softwareExperience: '',
        briefExperience: '',


        FirstRelationName: '',
        FirstRelation: '',
        FirstRelationEmail: '',
        FirstRelationPhone: '',
        SecondRelationName: '',
        SecondRelation: '',
        SecondRelationEmail: '',
        SecondRelationPhone: '',

        EducationDetails: {
            matric: {
                passingYear: '',
                percentage: '',
                institutionName: ''
            },
            intermediate: {
                passingYear: '',
                stream: '',
                percentage: '',
                institutionName: ''
            },
            graduation: {
                passingYear: '',
                stream: '',
                percentage: '',
                institutionName: ''
            },
            postGraduation: {
                passingYear: '',
                stream: '',
                percentage: '',
                institutionName: ''
            },
        }

    }


    const EmployeeDetails = ref(JSON.parse(JSON.stringify(Details)))

    const EmployeeArray: IDetails[] = []




    const Submit = () => {
        EmployeeArray.push(EmployeeDetails.value)
        dialog.value = false
        step.value = 1
        check.value = false
        console.log(EmployeeDetails.value)
        EmployeeDetails.value = JSON.parse(JSON.stringify(Details))
        console.log(EmployeeDetails.value)
        console.log(EmployeeArray)
    }


    return {
        Submit,
        show,
        EmployeeDetails,
        step,
        dialog,
        check,
        Details,
    }
})