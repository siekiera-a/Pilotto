## Generate JNI headers

From src/main directory:

```
javac -h native/ java/pl/pilotto/server/service/media/WindowsMediaKeysService.java
```

Rename generated file to MediaKeys.h

## Create dll

```
gcc -shared -I"%JAVA_HOME%\include" -I"%JAVA_HOME%\include\win32" -o native\MediaKeys.dll native\MediaKeys.c
```
