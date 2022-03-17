var coordList = 
[
    [-581,	110,	567,],
    [-485,	104,	600,],
    [-433,	108,	597,],
    [-326,	110,	608,],
    [-205,	67,	560,],
    [-198,	42,	461,],
    [-228,	32,	316,],
    [-73,	67,	568,],
    [-126,	17,	688,],
    [-126,	58,	933,],
    [-405,	33,	694,],
];
var tpList =
['1st warp',
'Victory Monument',
'Intersection 1',
'axe spawn',
'intersection 2',
'nether portal',
'fleece section',
'rumbling cavern 1',
'intersection 3',
'top of black hear citadel',
'end of crypt']


function pasteTele(par){
    let index = tpList.indexOf(par);

    let x = coordList[index][0];
    let y = coordList[index][1];
    let z = coordList[index][2];
    navigator.clipboard.writeText("/tp @p "+ x +" "+ y +" " + z );
    console.log(par);
}




