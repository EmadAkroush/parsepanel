export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig();
    // const token = getCookie(event, 'token');
    const query = getQuery(event);

    
    try {
        const data = await $fetch(`${apiBase}/api/posttags/${query.url}`, {
            method: 'PUT',
            body: body,
            headers: {
                'Accept': 'Multipart/Form-Data',
            },
        });
        console.log("edit" , data);
       

        return data.data;
    } catch (error) {
       console.log("vvv" , error );
       
        return error;
   
        
    }
  
  })