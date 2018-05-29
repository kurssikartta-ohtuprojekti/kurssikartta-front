
// Tools for setting up matrices

const cssGridStringify = ({sideLength, matrice}) => {
    if (matrice === undefined) {
        matrice = defaultMatrix()
    }
    if (sideLength === undefined) {
        sideLength = 38
    }
    let gridString = '';
    // console.log(sideLength)
    // console.log(matrice[0][0])
    for (let i = 0; i < sideLength; i++) {
        gridString += "'"
        for (let j = 0; j < sideLength; j++) {
            // console.log(matrice[i][j])

            // if (matrice[i][j] === '.') {
            //     // gridString += matrice[i][j]
            //     gridString += '.         ' 
            // }
            // else if (matrice[i][j].length === 8) {
            //     gridString += matrice[i][j]
            //     gridString += '  '
            // }  
            // else if (matrice[i][j].length === 9) {
            //     gridString += matrice[i][j]
            //     gridString += ' '
            // }    
            // else {
            //     gridString += matrice[i][j] 
            // }
            gridString += matrice[i][j]
            gridString += ' '
        }
        // console.log(gridString)
        gridString += "'"
        gridString += '\n'
    
    }
    // gridString += '"'
    // console.log(gridString)
    return gridString
}

const cssTestString = () => {
    return "' . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . TKT10001' '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . TKT10002 . . . ' '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '"
}

// Default Matrice
const defaultMatrix = () => {
    const matrix = [];
        for(let i=0; i < 38; i++) {
            matrix[i] = [];
            for(let j=0; j < 38; j++) {
                matrix[i][j] = '.';
            }
        }
        matrix[18][19] = 'TKT10001'
    

    matrix[6][5] = 'CSM14106'
    matrix[8][7] = 'CSM14103'
    matrix[10][7] = 'CSM14104'
    matrix[15][7] = 'CSM13402'
    matrix[2][9] = 'CSM14205'
    matrix[9][9] = 'CSM14105'
    matrix[11][9] = 'CSM14102'
    matrix[15][9] = 'CSM13401'
    matrix[4][10] = 'CSM14204'
    matrix[22][10] = 'CSM13104'
    matrix[28][10] = 'CSM13302'
    matrix[6][11] = 'CSM14203'
    matrix[12][11] = 'CSM14101'
    matrix[26][11] = 'CSM13301'
    matrix[23][12] = 'CSM13103'
    matrix[21][12] = 'CSM13102'
    matrix[18][13] = 'CSM13501'
    matrix[11][13] = 'TKT21002'
    matrix[7][14] = 'TKT21005'
    matrix[16][14] = 'TKT21008'
    matrix[22][14] = 'CSM13001'
    matrix[26][14] = 'CSM13202'
    matrix[13][15] = 'TKT21001'
    matrix[15][16] = 'TKT20011'
    matrix[19][16] = 'TKT21004'
    matrix[21][16] = 'TKT20003'
    matrix[5][17] = 'CSM14201'
    matrix[25][17] = 'TKT20009'
    matrix[27][17] = 'CSM13204'
    matrix[8][18] = 'TKT21015'
    matrix[16][18] = 'TKT10002'
    matrix[20][18] = 'TKT10004'
    matrix[23][18] = 'TKT20004'
    matrix[6][19] = 'TKT20007'
    matrix[10][19] = 'TKT20006'
    matrix[14][19] = 'TKT20002'
    matrix[25][19] = 'CSM13101'
    matrix[23][20] = 'TKT20012'
    matrix[16][20] = 'TKT10003'
    matrix[13][21] = 'TKT21013'
    matrix[18][22] = 'TKT20001'
    matrix[24][23] = 'TKT20005'
    matrix[16][23] = 'TKT20010'
    matrix[10][23] = 'TKT21007'
    matrix[8][23] = 'TKT21009'
    matrix[26][24] = 'TKT21019'
    matrix[7][25] = 'TKT21010'
    matrix[12][25] = 'TKT21003'
    matrix[22][25] = 'TKT20008'
    matrix[15][26] = 'TKT21014'
    matrix[26][26] = 'DATA11001'
    matrix[11][27] = 'TKT21016'
    matrix[23][27] = 'TKT21018'
    matrix[14][29] = 'TKT21012'
    matrix[18][29] = 'CSM12101'
    matrix[28][29] = 'DATA11002'
    matrix[26][30] = 'DATA14002'
    matrix[30][30] = 'DATA12001'
    matrix[14][31] = 'TKT21017'
    matrix[17][31] = 'CSM12104'
    matrix[20][31] = 'CSM12103'
    matrix[26][32] = 'DATA15003'
    matrix[12][33] = 'LSI31003'
    matrix[14][33] = 'CSM12108'
    matrix[17][33] = 'CSM12105'

    return matrix;
}

const emptyMatrix = () => {
    const matrix = [];
        for(let i=0; i < 38; i++) {
            matrix[i] = [];
            for(let j=0; j < 38; j++) {
                matrix[i][j] = '.';
            }
        }
        matrix[36][36] = 'TKT10001'
    return matrix
}
export {defaultMatrix, emptyMatrix, cssGridStringify, cssTestString}