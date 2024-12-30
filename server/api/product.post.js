export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()
    // const token = getCookie(event, 'token');
  console.log("ddddddd" , body);
  
    try {
        const posts = await $fetch(`${apiBase}/api/product`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'Multipart/Form-Data',
            }
        })

        return posts;
    } catch (error) {
        console.log("go" , error);
        
        return error
    }
})