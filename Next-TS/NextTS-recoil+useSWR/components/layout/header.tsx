import React, { useState } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Drawer } from "antd";

const Header = () => {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMobileBar, setIsOpenMobileBar] = useState(false);

  const handleOpenOrCloseMobileBar = () => {
    setIsOpenMobileBar(true);
  };

  const handleCloseNavBar = () => {
    setIsOpenMobileBar(false);
  };

  return (
    <header className={`${classes.main_header} `}>
      <div
        className={`${classes.main_header_container}  ${
          isScroll ? classes.main_header_scroll : ""
        }`}
      >
        <div className={classes.navbar}>
          <div>
            <Link href={"/"}>
              <a
                className={`${classes.navigation_link} ${
                  router.pathname == "/" ? classes.active : classes.in_active
                }`}
              >
                LOGO
              </a>
            </Link>
          </div>
          <nav>
            <ul className={classes.navigation}>
              <li>
                <Link
                  href={{
                    pathname: "/users",
                    query: { page: "1" },
                  }}
                >
                  <a
                    className={`${classes.navigation_link} ${
                      router.pathname == "/users"
                        ? classes.active
                        : classes.in_active
                    }`}
                  >
                    Users
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/todos",
                  }}
                >
                  <a
                    className={`${classes.navigation_link} ${
                      router.pathname == "/todos"
                        ? classes.active
                        : classes.in_active
                    }`}
                  >
                    Todos
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/recoil",
                  }}
                >
                  <a
                    className={`${classes.navigation_link} ${
                      router.pathname == "/recoil"
                        ? classes.active
                        : classes.in_active
                    }`}
                  >
                    Recoil
                  </a>
                </Link>
              </li>

              <li>
                <Button
                  className="barsMenu"
                  type="primary"
                  onClick={handleOpenOrCloseMobileBar}
                >
                  open
                </Button>
                <Button
                  className="barsMenu"
                  type="primary"
                  onClick={handleCloseNavBar}
                >
                  close
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={handleCloseNavBar}
          visible={isOpenMobileBar}
        >
          {/*<RightMenu />*/}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
