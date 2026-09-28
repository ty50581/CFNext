@echo off
title CFNext 配置写入工具
setlocal

echo ============================================
echo    CFNext 配置写入工具
echo    将本工具同目录下的 CFNext JSON 配置
echo    写入 GUI.for.SingBox 的配置文件
echo ============================================
echo.

rem ---- 第 1 步：输入 GUI.for.SingBox 安装目录 ----
:input_dir
set "GUIFS_DIR="
set /p "GUIFS_DIR=请输入 GUI.for.SingBox 安装目录（例如 D:\GUI.for.SingBox）: "
if not defined GUIFS_DIR goto input_dir
set "GUIFS_DIR=%GUIFS_DIR:"=%"
if not exist "%GUIFS_DIR%" (
  echo [错误] 目录不存在：%GUIFS_DIR%
  echo.
  goto input_dir
)

rem ---- 第 2 步：输入配置文件名称 ----
:input_cfg
set "CFG_NAME="
set /p "CFG_NAME=请输入要修改的配置文件名称（默认 config.json，位于 data\sing-box\ 下）: "
if not defined CFG_NAME set "CFG_NAME=config.json"
set "CFG_NAME=%CFG_NAME:"=%"

set "TARGET=%GUIFS_DIR%\data\sing-box\%CFG_NAME%"
if not exist "%TARGET%" (
  echo [错误] 目标文件不存在：%TARGET%
  echo.
  goto input_cfg
)

rem ---- 第 3 步：定位同目录下的 CFNext 源配置 ----
set "SRC="
for %%f in ("%~dp0*.json") do set "SRC=%%~f"
if not defined SRC (
  echo [错误] 未找到同目录下的 JSON 源配置。
  echo 请将本工具与 CFNext JSON 配置文件放在同一目录。
  pause
  exit /b 1
)

echo.
echo   源配置  : %SRC%
echo   目标文件: %TARGET%
echo.
set /p "CONFIRM=确认写入？输入 y 继续，其他取消: "
if /i not "%CONFIRM%"=="y" (
  echo 已取消。
  pause
  exit /b 0
)

rem ---- 第 4 步：备份并写入 ----
copy /y "%TARGET%" "%TARGET%.bak" >nul
copy /y "%SRC%" "%TARGET%" >nul
if errorlevel 1 (
  echo [错误] 写入失败，请检查文件是否被占用（关闭 GUI.for.SingBox 后重试）。
  pause
  exit /b 1
)

echo.
echo 完成！已写入：%TARGET%
echo 原配置已备份为：%TARGET%.bak
echo 请重启 GUI.for.SingBox 生效。
echo.
pause
