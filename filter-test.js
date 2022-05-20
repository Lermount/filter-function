//Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

//Ценовые фильтры
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//Создаем функцию фильтрации которая принимает в качестве аргумента ценовой фильтр
function filter(requiredRange) {
    return courses.filter(function(course){
        //Прописываем условия если нет подвала или потолка цен
        if(course.prices[0] === null && requiredRange[0] === null) {
            return course.prices[1] <= requiredRange[1]
        };
        if(course.prices[1] === null && requiredRange[1] === null) {
            return course.prices[0] >= requiredRange[0]
        };
        if(course.prices[0] === null && requiredRange[1] === null) {
            return course.prices[1] <= requiredRange[0]
        };
        if(course.prices[1] === null && requiredRange[0] === null) {
            return course.prices[0] <= requiredRange[1]
        }else{
            //Если в ценовом диапазоне есть цены от и до
            return course.prices[0] <= requiredRange[0] && course.prices[1] <= requiredRange[1]
        }
        
    });
};

//Выводим в консоль курсы с различными фильтрами
console.log(filter(requiredRange1));
console.log(filter(requiredRange2));
console.log(filter(requiredRange3));
    


