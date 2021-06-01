
#include "memory_handle.h"

void c_safty_free(char *stringpointer) {
    if(stringpointer) {
        free(stringpointer);
        stringpointer = NULL;
    }
}