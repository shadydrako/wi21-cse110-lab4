let statistics = {
    redCars: 21,
    blueCars: 45,
    greebCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for(x in statistics){
    if(x.substr(0,1) == "R" || (statistics[x] % 2 == 1 || x.substr(0,1) == "r"  )){
        console.log(x + ":" +statistics[x] );
    }
}