"use client";
import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isParentActive = (menus) =>
    menus.some((menu) =>
      menu.submenu
        ? menu.submenu.some((item) =>
            item.submenu
              ? item.submenu.some(
                  (item) => item.href.split("/")[1] === pathname.split("/")[1]
                )
              : item.href.split("/")[1] === pathname.split("/")[1]
          )
        : menu.href.split("/")[1] === pathname.split("/")[1]
    );
  return (
    <>
      <li className={"/" == pathname ? "current-menu" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={"/about" == pathname ? "current-menu" : ""}>
        <Link href="/about">About Us</Link>
      </li>
      <li
        className={`has-child  ${
          isParentActive(otherPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Projects</a>
        <ul className="submenu">
          {otherPages.map((menu, index) => (
            <li
              key={index}
              className={`${menu.className || ""}  ${
                isParentActive(menu.submenu || []) ? "current-item" : ""
              }   ${
                menu.href?.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              } `}
            >
              {menu.submenu ? (
                <>
                  <a href="#">{menu.title}</a>
                  <ul className="submenu">
                    {menu.submenu.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className={
                          item.href?.split("/")[1] == pathname.split("/")[1]
                            ? "current-item"
                            : ""
                        }
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={menu.href}>{menu.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child ${
          isParentActive(blogMenu) ? "current-menu" : ""
        } `}
      >
        <a href="#">Partners</a>
        <ul className="submenu">
          {blogMenu.map((item, index) => (
            <li
              key={index}
              className={
                item.href.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={"/contact" == pathname ? "current-menu" : ""}>
        <Link href={`/`}>NRI</Link>
      </li>
      <li className={"/contact" == pathname ? "current-menu" : ""}>
        <Link href={`/`}>iREFER</Link>
      </li>
      <li
        className={`has-child ${
          isParentActive(blogMenu) ? "current-menu" : ""
        } `}
      >
        <a href="#">Customer's Corner</a>
        <ul className="submenu">
          {blogMenu.map((item, index) => (
            <li
              key={index}
              className={
                item.href.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child ${
          isParentActive(blogMenu) ? "current-menu" : ""
        } `}
      >
        <a href="#">Contact Us</a>
        <ul className="submenu">
          {blogMenu.map((item, index) => (
            <li
              key={index}
              className={
                item.href.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
