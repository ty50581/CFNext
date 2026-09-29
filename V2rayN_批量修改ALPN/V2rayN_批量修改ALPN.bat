@echo off
setlocal enabledelayedexpansion
title V2rayN 节点 ALPN 批量修改工具（免 Python 版）

echo ============================================================
echo     V2rayN 节点 ALPN 参数批量修改工具（v6/v7 数据库版）
echo ============================================================
echo.
echo 适用版本：V2rayN v6/v7（节点列表存放在 guiConfigs 目录的
echo           guiNDB.db 数据库中，本工具直接修改数据库的 Alpn
echo           字段，不再依赖 JSON 配置文件）。
echo 前置条件：无需安装 Python。
echo       本脚本优先使用本机 Python（体验最好）；未安装 Python
echo       时自动改用随附的 sqlite3.exe（SQLite 官方命令行工具），
echo       两种方式都不需要联网。
echo 使用说明：
echo   1. 先完全退出 V2rayN 程序，否则修改结果可能被覆盖。
echo   2. 输入 V2rayN 安装目录（如你安装 V2rayN 的文件夹）。
echo   3. 输入订阅分组：
echo      - Python 模式：直接输入分组名称（可留空=修改全部节点）；
echo      - sqlite3 模式：先显示分组列表，按序号选择（回车=全部）。
echo   4. 输入 ALPN 参数（修复 XHTTP 延迟 -1 请填 h2,http/1.1）。
echo   5. 脚本自动备份数据库后批量修改。
echo.
pause

echo.
set "V2RAYN_DIR="
set /p "V2RAYN_DIR=请输入 V2rayN 安装目录（例如你安装 V2rayN 的文件夹）: "

set "V2RAYN_ALPN="
set /p "V2RAYN_ALPN=请输入要设置的 ALPN 参数（例如 h2,http/1.1）: "
if "%V2RAYN_ALPN%"=="" (
    echo.
    echo [错误] ALPN 参数不能为空，请重新运行脚本。
    pause
    exit /b 1
)

echo.
echo 确认信息：
if "%V2RAYN_DIR%"=="" (
    echo   V2rayN 目录：未填写（自动搜索 AppData 等位置）
) else (
    echo   V2rayN 目录：%V2RAYN_DIR%
)
echo   写入的 ALPN ：%V2RAYN_ALPN%
echo.

set "USE_PY=1"
if defined V2RAYN_FORCE_SQLITE3 set "USE_PY=0"
if "%USE_PY%"=="1" (
    where python >nul 2>nul
    if errorlevel 1 set "USE_PY=0"
)
if "%USE_PY%"=="1" (
    if not exist "%~dp0v2rayn_alpn.py" set "USE_PY=0"
)

if "%USE_PY%"=="1" (
    echo [模式] 已检测到 Python，使用 Python 方式（可输入分组名称）。
    set "V2RAYN_GROUP="
    set /p "V2RAYN_GROUP=请输入订阅分组名称（可留空=修改全部节点，例如 CFNEXT）: "
    if "%V2RAYN_GROUP%"=="" (
        echo   分组范围：全部节点
    ) else (
        echo   分组范围：%V2RAYN_GROUP%
    )
    echo.
    python "%~dp0v2rayn_alpn.py"
    set "EXIT=%ERRORLEVEL%"
    goto :done
)

if not exist "%~dp0sqlite3.exe" (
    echo [错误] 未检测到 Python，也找不到随附的 sqlite3.exe。
    echo 请安装 Python，或确认 sqlite3.exe 与本批处理文件在同一文件夹。
    set "EXIT=1"
    goto :done
)

echo [模式] 未检测到 Python，使用随附 sqlite3.exe 方式（按序号选择分组）。
call :sqlite3_mode
set "EXIT=%ERRORLEVEL%"

:done
echo.
if "%EXIT%"=="0" (
    echo 修改完成！请重新打开 V2rayN 测试节点延迟。
) else (
    echo 执行过程中出现问题，请根据上方提示检查。
)
pause
exit /b %EXIT%

:sqlite3_mode
set "DBF="
if "%V2RAYN_DIR%" neq "" (
    if exist "%V2RAYN_DIR%\guiConfigs\guiNDB.db" set "DBF=%V2RAYN_DIR%\guiConfigs\guiNDB.db"
    if not defined DBF for /f "delims=" %%d in ('dir /s /b "%V2RAYN_DIR%\guiNDB.db" 2^>nul') do if not defined DBF set "DBF=%%d"
)
if not defined DBF (
    for %%b in ("%APPDATA%\v2rayN\guiConfigs\guiNDB.db" "%LOCALAPPDATA%\v2rayN\guiConfigs\guiNDB.db" "%PROGRAMDATA%\v2rayN\guiConfigs\guiNDB.db") do (
        if not defined DBF if exist "%%~b" set "DBF=%%~b"
    )
)
if not defined DBF (
    echo [错误] 未找到 guiNDB.db 数据库。
    if "%V2RAYN_DIR%"=="" (
        echo 未填写安装目录，且系统 AppData 等位置未找到。
    ) else (
        echo 已搜索：%V2RAYN_DIR% 及其子目录。
    )
    exit /b 1
)
echo 使用数据库：%DBF%

tasklist /FI "IMAGENAME eq v2rayN.exe" 2>nul | findstr /i "v2rayN.exe" >nul
if not errorlevel 1 (
    set /p "CONFIRM=检测到 v2rayN.exe 正在运行，修改结果可能被覆盖。继续？(Y/N): "
    if /i not "!CONFIRM!"=="Y" (
        echo 已取消。请先完全退出 V2rayN 再运行。
        exit /b 1
    )
)

echo.
echo 订阅分组列表（若中文显示乱码不影响使用，请按序号选择）：
set "n=0"
for /f "delims=" %%g in ('call "%~dp0sqlite3.exe" -separator " - " "%DBF%" "select s.Remarks, count(p.IndexId) from SubItem s left join ProfileItem p on p.Subid = s.Id group by s.Id order by s.Sort"') do (
    set /a n+=1
    echo   [!n!] %%g
)

set "GIDX="
set /p "GIDX=请输入分组序号（直接回车=修改全部节点）: "

set "SUBID="
if "%GIDX%" neq "" (
    echo %GIDX%| findstr /r "^[0-9][0-9]*$" >nul
    if errorlevel 1 (
        echo [错误] 序号必须是数字，已取消。
        exit /b 1
    )
    set /a OFF=%GIDX%-1
    for /f "delims=" %%i in ('call "%~dp0sqlite3.exe" "%DBF%" "select Id from SubItem where Remarks is not null order by Sort limit 1 offset !OFF!"') do set "SUBID=%%i"
    if not defined SUBID (
        echo [错误] 序号超出范围，已取消。
        exit /b 1
    )
)

set "TSTAMP="
for /f "tokens=1-3 delims=/- " %%a in ("%date%") do set "TSTAMP=%%a%%b%%c"
set "TT="
for /f "tokens=1-2 delims=:. " %%a in ("%time%") do set "TT=%%a%%b"
if "%TT:~0,1%"==" " set "TT=0%TT:~1%"
copy /y "%DBF%" "%DBF%.bak_%TSTAMP%_%TT%" >nul
echo 已备份原数据库：%DBF%.bak_%TSTAMP%_%TT%

if defined SUBID (
    "%~dp0sqlite3.exe" "%DBF%" "update ProfileItem set Alpn='%V2RAYN_ALPN%' where Subid='%SUBID%'; select changes();"
) else (
    "%~dp0sqlite3.exe" "%DBF%" "update ProfileItem set Alpn='%V2RAYN_ALPN%'; select changes();"
)
if errorlevel 1 (
    echo [错误] 数据库更新失败，请检查后重试。
    exit /b 1
)
echo.
echo 上方 changes() 的数字 = 本次修改的节点数。
echo 如果数字为 0，说明该分组当前没有节点（例如订阅更新失败的空分组）。
exit /b 0
