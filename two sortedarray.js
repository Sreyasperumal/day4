var ar1 = [1, 12, 15,16, 26, 38];
var ar2 = [2, 13, 17,18, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
    function getMedian(ar1, ar2, n)
    {
        var i = 0; /* Current index of i/p array ar1[] */
        var j = 0; /* Current index of i/p array ar2[] */
        var count;
        var m1 = -1, m2 = -1;
     
        /* Since there are 2n elements, median will be average
        of elements at index n-1 and n in the array obtained after
        merging ar1 and ar2 */
        for (count = 0; count <= n; count++)
        {
            /*Below is to handle case where all elements of ar1[] are
            smaller than smallest(or first) element of ar2[]*/
            if (i == n)
            {
                m1 = m2;
                m2 = ar2[0];
                break;
            }
     
            /*Below is to handle case where all elements of ar2[] are
            smaller than smallest(or first) element of ar1[]*/
            else if (j == n)
            {
                m1 = m2;
                m2 = ar1[0];
                break;
            }
            /* equals sign because if two
                arrays have some common elements */
            if (ar1[i] <= ar2[j])
            {
                m1 = m2; /* Store the prev median */
                m2 = ar1[i];
                i++;
            }
            else
            {
                m1 = m2; /* Store the prev median */
                m2 = ar2[j];
                j++;
            }
        }
     
        return (m1 + m2)/2;
    }