# -*- coding: utf-8 -*-
# V2rayN 节点 ALPN 批量修改助手（v6/v7 数据库版）
# 依赖：Python 3（自带 sqlite3 模块）
# 通过环境变量 V2RAYN_DIR / V2RAYN_GROUP / V2RAYN_ALPN 获取输入
import os, sys, sqlite3, shutil, subprocess
from datetime import datetime


def is_v2rayn_running():
    try:
        out = subprocess.run(
            ["tasklist", "/FI", "IMAGENAME eq v2rayN.exe"],
            capture_output=True, text=True, timeout=15
        ).stdout
        return "v2rayN.exe" in out
    except Exception:
        return False


def find_db(roots):
    cands = []
    for root in roots:
        if not root or not os.path.isdir(root):
            continue
        p = os.path.join(root, "guiConfigs", "guiNDB.db")
        if os.path.isfile(p):
            cands.append(p)
        for base, dirs, files in os.walk(root):
            if "guiNDB.db" in files:
                cands.append(os.path.join(base, "guiNDB.db"))
    seen, out = set(), []
    for p in cands:
        p = os.path.normpath(p)
        if p not in seen:
            seen.add(p)
            out.append(p)
    return sorted(out)


def pick_one(cands):
    if len(cands) == 1:
        return cands[0]
    print("找到 %d 个 guiNDB.db 数据库：" % len(cands))
    for i, p in enumerate(cands):
        print("  [%d] %s" % (i + 1, p))
    for _ in range(3):
        s = input("请输入要修改的数据库序号：").strip()
        if s.isdigit() and 1 <= int(s) <= len(cands):
            return cands[int(s) - 1]
        print("输入无效，请重新输入。")
    print("未选择有效序号，已取消。")
    sys.exit(1)


def main():
    vdir = os.environ.get("V2RAYN_DIR", "").strip()
    group = os.environ.get("V2RAYN_GROUP", "").strip()
    alpn = os.environ.get("V2RAYN_ALPN", "").strip()

    if not alpn:
        print("错误：ALPN 参数不能为空。")
        sys.exit(1)

    if is_v2rayn_running():
        ans = input("检测到 v2rayN.exe 正在运行，修改结果可能被 V2rayN 退出时覆盖。是否仍要继续？(Y/N)：").strip()
        if ans not in ("Y", "y"):
            print("已取消。请先完全退出 V2rayN 再运行。")
            sys.exit(1)

    roots = [vdir]
    for base in (os.environ.get("APPDATA", ""), os.environ.get("LOCALAPPDATA", ""), os.environ.get("PROGRAMDATA", "")):
        for sub in ("v2rayN", "V2rayN"):
            roots.append(os.path.join(base, sub))

    cands = find_db(roots)
    if not cands:
        print("错误：未找到 guiNDB.db 数据库。已搜索位置：")
        for r in roots:
            print("  - " + (r if r else "(未填写安装目录)"))
        print("请确认 V2rayN 安装目录填写正确后重新运行。")
        sys.exit(1)

    db = pick_one(cands)
    print("使用数据库：" + db)

    conn = sqlite3.connect(db)
    cur = conn.cursor()
    try:
        subids = None
        if group:
            rows = cur.execute(
                "select Id from SubItem where Remarks = ? collate nocase", (group,)
            ).fetchall()
            if not rows:
                print("错误：没有找到订阅分组：%s" % group)
                groups = cur.execute(
                    "select Remarks from SubItem where Remarks is not null order by Sort"
                ).fetchall()
                if groups:
                    print("当前数据库中的订阅分组：")
                    for (r,) in groups:
                        print("  - " + str(r))
                sys.exit(1)
            subids = [r[0] for r in rows]

        bak = db + ".bak_" + datetime.now().strftime("%Y%m%d_%H%M%S")
        shutil.copy2(db, bak)
        print("已备份原数据库：" + bak)

        if subids:
            ph = ",".join("?" * len(subids))
            cur.execute("update ProfileItem set Alpn = ? where Subid in (%s)" % ph, [alpn] + subids)
        else:
            cur.execute("update ProfileItem set Alpn = ?", (alpn,))
        conn.commit()
        n = cur.rowcount
        print("成功：已批量修改 %d 个节点的 ALPN 参数为：%s" % (n, alpn))
        if group:
            print("（限定订阅分组：%s）" % group)
    finally:
        conn.close()

    print("提示：现在可以重新打开 V2rayN 测试节点延迟（XHTTP 不再显示 -1）。")
    sys.exit(0)


if __name__ == "__main__":
    main()
