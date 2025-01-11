export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig();
    // const token = getCookie(event, 'token');
    const query = getQuery(event);

    console.log("edit" , query.url);
    try {
        const data = await $fetch(`${apiBase}/api/cars/${query.url}`, {
            method: 'PUT',
            body: body,
            headers: {
                'Accept': 'Multipart/Form-Data',
            },
        });
    
       

        return data.data;
    } catch (error) {
       console.log("vvv" , error );
       
        return error;
   
        
    }
  
  })