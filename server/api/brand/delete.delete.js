export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()
    // const token = getCookie(event, 'token');
    // console.log("dddddd" , body);
    const brandId = event.context.params.id;
    try {
        const data = await $fetch(`${apiBase}/api/brands/${brandId}`, {
            method: 'DELETE',
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