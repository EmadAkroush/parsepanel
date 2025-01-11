export default defineEventHandler(async (event) => {
    
    const { public: { apiBase } } = useRuntimeConfig();
    // const token = getCookie(event, 'token');
    const query = getQuery(event);

    console.log("ff" , query.url);
    try {
        const data = await $fetch(`${apiBase}/api/brands/${query.url}`, {
            headers: {
                'Accept': 'Multipart/Form-Data',
            },
        });
    
       

        return data.data;
    } catch (error) {
        
        return error;
   
        
    }
  
  })