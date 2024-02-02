export const diceLayoutVariants = [
    [
        -15, -70, 65,
        -80, 30, 60,
        40, 30, 30,
        -45, 100, 40
    ],
    [
        5, 95, 80,
        -60, 35, 7,
        85, 45, 45,
        -25, -65, 35
    ],
    [
        -95, -40, 5,
        0, 0, 80,
        35, 70, 10,
        85, -30, 20
    ]
];

export const diceColorVariants = {
   1: { 
    A: [ 'red', 'white', 'white', 'white' ],
    B: [ 'white', 'red', 'white', 'white' ],
    C: [ 'white', 'white', 'white', 'red' ],
    },
   2: { 
    A: [ 'red', 'red', 'white', 'white' ],
    B: [ 'white', 'red', 'red', 'white' ],
    C: [ 'white', 'white', 'red', 'red' ],
    },
   3: { 
    A: [ 'red', 'red', 'red', 'white' ],
    B: [ 'white', 'red', 'red', 'red' ],
    C: [ 'red', 'white', 'red', 'red' ],
    },
   4: { A: [ 'red', 'red', 'red', 'red' ] },
   5: { A: [ 'white', 'white', 'white', 'white' ] }
}