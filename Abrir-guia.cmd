@echo off
setlocal
cd /d "%~dp0"
set "VENEZIA_NODE=node"
if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "VENEZIA_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
echo Venezia - vista local, sin publicar
echo Deja esta ventana abierta. Ctrl+C cierra el servidor.
start "" "http://127.0.0.1:4187/"
"%VENEZIA_NODE%" "tools\serve.mjs"
pause
