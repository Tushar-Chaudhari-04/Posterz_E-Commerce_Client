import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { axiosClient } from "../../../axiosClient";

// export const fetchCategories=createAsyncThunk("api/categories",async()=>{
//         try{
//             const response=await axiosClient.get("/categories?populate=image");
//             console.log("response of category",response.data.data);
//             return response.data.data; 
//         }catch(error){
//             console.log("error",error);
//             return Promise.reject(error);
//         }
//     }
// )

export const fetchCategories = createAsyncThunk("api/categories", async () => {
    try {
        const response = await axiosClient.get("/categories");
        if(response){
            console.log("response123",response.data.data);
        }else{
            console.log("res error")
        }
        
        return response.data.data;
    } catch (error) {
        return Promise.reject(error);
    }
});

const categorySlice=createSlice({
    name:"categorySlice",
    initialState:{
        categories:[]
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        });
    },
})

export default categorySlice.reducer;