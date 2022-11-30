#!/usr/bin/env node

//roll dice

export function roll(sides, dice, rolls){
    var count = [];
    for (let i = 0; i < rolls; i++){
        let temp = 0;
        for (let j = 0; j < rolls; j++){
            temp = temp + Math.floor(Math.random() * sides) + 1;
        }
        count.push(temp);
    }

    var result = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: count

    };

    return result;


}