export default defineEventHandler(async (event) => {
    
    // const token = getCookie(event, 'token');
  
    const queryParams = getQuery(event);
    console.log("queryParams" , queryParams.page);
    

    try {
        const data = await $fetch(`https://api.tomanpay.net/escrow/api/v2/users/me/shops/1oqmlhz7sqtzy/deals/${queryParams.page}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${btoa('1oqmlhz7sqtzy:!uCfNaCTzihOh30rKez85SygJetoDVj08Uf0pmiNI')}`},
            
        });
  
       
        return data;
    } catch (error) {
        return error;
    }
  
  })