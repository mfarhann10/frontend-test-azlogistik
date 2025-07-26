import supabase from "./supabase";

export async function getProducts(){
    const {data, error} = await supabase
    .from("products")
    .select("*")
    .order('created_at', { ascending: true });

    if(error){
        throw new Error("Products can't be fetched")
    }

    return data
}

export async function createEditProducts(newProduct, id){
    let query = supabase.from("products")

    //create
    if(!id) query = query.insert([{...newProduct}])

    //edit
    if(id) query = query.update({...newProduct}).eq('id', id)

    const {data, error} = await query.select().single()

    if(error){
        console.log(error)
        throw new Error("Medical Instance could not be created")
    }

    return data
}

export async function deleteProduct(id){
    const {data, error} = await supabase.from("products").delete().eq("id", id)

    if(error){
        throw new Error("Products can't be deleted")
    }

    return data
}