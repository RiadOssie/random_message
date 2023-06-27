const netNumb = [30, 350, 50, 75, 0, 5]
const unitNumb = ["Million", "Billion", "Trillion", "Thousand", "Hundred"]
const currNumb =["usd", "euro", "pound", "dirhams", "Zimbabwean dollar", "Peso", "Lira"]

const randomMessage = (age, income, netWorth) =>{
    let returnedNetNumb = "" ;
    let returnedUnitNumb = "" ;
    let returnedCurrNumb = "" ;
 // picking random netNumb

    for (let i =0; i<netNumb.length; i++){
        if (age <30){
            returnedNetNumb = netNumb[i]
        } else if (age >30){
            returnedNetNumb = Math.floor(Math.random() * netNumb.length)
        }
    };

// picking random unitNumb
     for (let i =0; i<unitNumb.length; i++){
       if (income<50){
        returnedUnitNumb = unitNumb[3]
       } else if (income >100 && income <300){
        returnedUnitNumb = unitNumb[i]
       } else if(income>500){
        returnedUnitNumb = unitNumb[1]
       }

     };
// picking random currNumb
    for (let i =0; i<currNumb.length; i++){
        if (netWorth >1000){
            returnedCurrNumb = currNumb[0]

        } else if(netWorth > 500){
            returnedCurrNumb = currNumb[2]
        } else if (netWorth>100)
        returnedCurrNumb = currNumb[1]

    }

    console.log(`Your net worth will be ${returnedNetNumb} ${returnedUnitNumb} ${returnedCurrNumb}`)
 

}
randomMessage (age, income, netWorth)



