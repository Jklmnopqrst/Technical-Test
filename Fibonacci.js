//Write a program to generate the Fibonacci sequence up to 100. 


          let n1 = 0, n2 = 1, nextSeq;

console.log('Fibonacci Series up to 100:');

while (n1 <= 100) {
    console.log(n1);
    nextSeq = n1 + n2;
    n1 = n2;
    n2 = nextSeq;
}