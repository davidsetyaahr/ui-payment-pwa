export var baseUrl = 'http://127.0.0.1:8000/api/';

export const getMyPoint = async (data, callback) => {
    const id = data.id
    var url = baseUrl+'myPoint/'+id
    if (data.startDate != '' && data.endDate != '') {
        url = url+'?start='+data.startDate+'&end='+data.endDate;
    }
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ localStorage.getItem("token")
        },
        method: 'GET'
    })
    const result = await res.json()
    callback(result)
    
}

