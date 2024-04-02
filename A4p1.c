#include <stdio.h>
struct student {
    char name[21]; 
    char sex; 
    int credits;
};

int main()
{
    int x;
    printf("how many students do you want to input? ");
    scanf("%d", &x);
    struct student arr[x];
    for(int i = 0; i < x; i++){
        printf("Please input information for student %d:", i + 1);
        printf("\nName? ");
        scanf("%20s", arr[i].name);
        printf("Sex('M' or 'F')? ");
        scanf(" %c", &arr[i].sex);
        printf("Credits? ");
        scanf("%d", &arr[i].credits);
    }
    
    printf("Which of the following four groups do you want to print? (1) male students (2) female students (3) odd credits (4) even credits");
    int y;
    scanf("%d", &y);

    for(int i = 0; i < x; i++){
        if(y == 1){
            if(arr[i].sex == 'M')
            printf("\n%s is a %c student with %d credits", arr[i].name, arr[i].sex, arr[i].credits);
        }
        if(y == 2){
            if(arr[i].sex == 'F')
            printf("\n%s is a %c student with %d credits", arr[i].name, arr[i].sex, arr[i].credits);
        }
        if(y == 3){
            if(arr[i].credits % 2 != 0)
            printf("\n%s is a %c student with %d credits", arr[i].name, arr[i].sex, arr[i].credits);
        }
        if(y == 4){
            if(arr[i].credits % 2 == 0)
            printf("\n%s is a %c student with %d credits", arr[i].name, arr[i].sex, arr[i].credits);
        }
    }
}


