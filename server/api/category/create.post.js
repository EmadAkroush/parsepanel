export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()

     console.log("dddddd" , body);
  
    try {
        const data = await $fetch(`${apiBase}/api/categories`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'Multipart/Form-Data',
            }
        })
        
        return data;
    } catch (error) {
        console.log("go" , error);
        
        return error
    }
})