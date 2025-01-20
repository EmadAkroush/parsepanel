export default defineEventHandler(async (event) => {
    
    const { public: { apiBase } } = useRuntimeConfig();
    // const token = getCookie(event, 'token');
    const query = getQuery(event);


    try {
        const data = await $fetch(`${apiBase}/api/postcategory/${query.url}`, {
            headers: {
                'Accept': 'Multipart/Form-Data',
            },
        });
    
        console.log("ff" , data);

        return data.data;
    } catch (error) {
      
        return error;
   
        
    }
  
  })