#include <stdio.h>
#include <stdlib.h>
int main(int argc, char *argv[]){
    int a = atoi(argv[1]);
    int length;
    while(a > 1){
        if(a % 2 == 0){
            a/=2;
            printf("%d\n", a);
        }
        else{
            a = (3*a + 1)/2;
            printf("%d\n", a);
        }
        length++;
    }
}