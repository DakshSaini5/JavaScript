// for Each loop

// const countries = ["INDIA ","UAE","SWITZERLAND"]

// countries.forEach(function(country){
//     console.log(country)
//     }
// )

// countries.forEach(  (country,index,arr) => {
//     console.log(country,index,arr)
//     }
// )

const objects = [
    {
        languageName: "javascript",
        languageFile : "js"
    },
    {
        languageName: "Python",
        languageFile : "py"
    }, 
    {
        languageName: "javascript",
        languageFile : "js"
    }
]

objects.forEach((items) => {
    console.log(items.languageName)
    }
)