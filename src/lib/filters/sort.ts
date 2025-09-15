// Sort an array of numbers
export function sortNum(x: number[]): number[] {
    // let xs = x ;
    // if (x.length > 0)
    // {   
    //     let lowestNum = x.at(0);
    //     for (let i = 0; i < x.length; i++)
    //     {
    //         if (lowestNum < x.at(i))
    //         {

    //         }
    //     }
    // }

    x.sort((n1, n2) => n1 - n2);

    return x;
}