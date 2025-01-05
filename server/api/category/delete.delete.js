export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()
    const query = getQuery(event);
    // const token = getCookie(event, 'token');
    // console.log("dddddd" , body);
    const brandId = event.context.params.id;
    try {
        console.log("jj" , query.url);
        
        const data = await $fetch(`${apiBase}/api/categories/${query.url}`, {
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