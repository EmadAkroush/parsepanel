export default defineEventHandler(async (event) => {
    
    const { public: { apiBase } } = useRuntimeConfig();
    // const token = getCookie(event, 'token');
    const query = getQuery(event);

    
    try {
        const data = await $fetch(`${apiBase}/api/copyproduct/${query.id}`, {
            headers: {
                'Accept': 'Multipart/Form-Data',
            },
        });
       console.log("ff" , query);
       

        return data;
    } catch (error) {
        return error;
    }
  
  })