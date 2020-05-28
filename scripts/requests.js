/*------------------------------API CALL FOR RANDOM WORDS--------------------------------*/
/*USING THE CALLBACK METHOD
    const getPuzzle = function (callback){
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange',function (e) {
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            // console.log(e)
            callback(undefined,data.puzzle)
        }
        else if(e.target.readyState === 4){
            console.log('An error has occured!!')
            callback(`An Error has taken place`,undefined)
        }   
        })

        request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4')
        request.send()
}
*/



/*USING THE PROMISE METHOD
const getPuzzle = () => new Promise((resolve,reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', function (e) {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        }
        else if (e.target.readyState === 4) {
            reject(`An Error has taken place`)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4')
    request.send()
})
*/



/*USING THE FETCH API METHOD WITH PROMISE CHAINING*/
// const getPuzzle = () => {
//     return fetch('http://puzzle.mead.io/puzzle?wordCount=4').then((response) => {
//         if(response.status === 200)
//         {
//             //response.json() returns promise
//             return response.json()
//         } else{
//             throw new Error('Unable to Fetch Puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     }) 
// }



/*USING THE ASYNC AWAIT METHOD*/
const getPuzzle1 = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=2')

    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable To get Puzzle')
    }
}






/*USING CALLBACK METHOD FOR COUNTRY NAME */
// const getCountry = function (myCode,callback) {
//     const r1 = new XMLHttpRequest()
//     r1.addEventListener('readystatechange',function (e) {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const countryData = JSON.parse(e.target.responseText)
//             const ind = countryData.findIndex(function (d) {
//                 return d.alpha2Code === myCode
//             })
//             callback(undefined,countryData[ind].name)
//         }
//         else if(e.target.readyState === 4){
//             callback('Unable to Fetch data',undefined)
//         }
//     })

//     r1.open('GET', 'http://restcountries.eu/rest/v2/all')
//     r1.send()
// }



/* USING PROMISE METHID FOR COUNTRY NAME*/
// const getCountry = (myCode) => new Promise((resolve,reject) => {
//     const r1 = new XMLHttpRequest()
//     r1.addEventListener('readystatechange',function (e) {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const countryData = JSON.parse(e.target.responseText)
//             const ind = countryData.findIndex(function (d) {
//                 return d.alpha2Code === myCode
//             })
//             resolve(countryData[ind].name)
//         }
//         else if(e.target.readyState === 4){
//             reject('Unable to Fetch data')
//         }
//     })

//     r1.open('GET', 'http://restcountries.eu/rest/v2/all')
//     r1.send()
// })


/*USING FETCH API FOR COUNTRY NAMES*/
// const getCountry = (myCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if(response.status === 200)
//         {
//             return response.json()
//         } else{
//             throw new Error('Unable to Fetch Country Name')
//         }
//     }).then((Cname) => {
//         // console.log(Cname)
//         const ind = Cname.findIndex(function (d) {
//             return d.alpha2Code === myCode
//         })
//         return Cname[ind].name
//     })
// }


/*USING THE ASYNC AWAIT METHOD TO GET COUNTRY*/
const getCountry = async (myCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if(response.status === 200){
        const data = await response.json()
        const ind = data.findIndex((d) => {
            return d.alpha2Code === myCode
        })
        return data[ind].name
    }else{
        throw new Error('Unable to Fetch Country Name')
    }
}



// const getGeoLocation = () => {
//     return fetch('http://api.ipapi.com/49.33.150.208?access_key=e9f6c26022b6b35b465ee448881aaa09&format=1').then((response) => {
//         if(response.status === 200)
//         {
//             return response.json()
//         }else {
//             throw new Error('Unable to Fetch Location')
//         }
//     }).then((data) => {
//         let locdata = []
//         locdata.push(data.city)
//         locdata.push(data.region_name)
//         locdata.push(data.country_name)
//         return locdata
//     })
// }

const getGeoLocation = async () => {
    const response = await fetch('http://api.ipapi.com/49.33.150.208?access_key=e9f6c26022b6b35b465ee448881aaa09&format=1')
    
    if(response.status === 200){
        const data = await response.json()
        let locdata = []
        locdata.push(data.city)
        locdata.push(data.region_name)
        locdata.push(data.country_name)
        return locdata
    }
    else{
        throw new Error('Unable to Fetch Location')
    }
}