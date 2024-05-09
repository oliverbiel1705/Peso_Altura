
export interface ILevels {
    title: string;
    color: string;
    icon: 'down' | 'up'
    imc: number[];
    yourImc?: number;
}

export interface ImcProps {
    height: number;
    weight: number;
}

export const levels: ILevels[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
    //peso dividido pela a raiz quadrada da altura
    const imc = weight / (height * height);

    for (let i in levels) {
        //imc for maior ou igual a levels imc array posição 0 
        //e for menor ou igual array posição 1
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            //retornar a categoria ja com o imc
            let levelCopy = { ...levels[i] }
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
            //retornar o próprio level
        }
    }
    return null;
}