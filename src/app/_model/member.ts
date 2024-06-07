import { FileHandle } from "./file-handle";


export interface Member{

    id: number,
    memberName: String,
    gender: String,
    dob: Date,
    issueDate: Date,
    expiryDate: Date,
    image: FileHandle[]

}