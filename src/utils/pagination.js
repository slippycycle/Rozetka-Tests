 export function getPages(limit, totalElements) {

    const pahesArray = []
    const count = Math.ceil(totalElements / limit)
    
    for (let i =1; i <= count; i++) {
        pahesArray.push(i)
    }

    return pahesArray
    
}