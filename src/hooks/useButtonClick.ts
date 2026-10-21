import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export const scrollToElementWithRetry = (
  sectionId: string,
  lenis?: any,
  maxAttempts: number = 30,
  interval: number = 100
): (() => void) => {
  const cleanId = sectionId.replace(/^#/, "");
  if (!cleanId) return () => {};

  let attempts = 0;
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const tryScroll = () => {
    const element = document.getElementById(cleanId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: 0 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    attempts++;
    if (attempts < maxAttempts) {
      timerId = setTimeout(tryScroll, interval);
    }
  };

  tryScroll();

  return () => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
  };
};

export const useButtonClick = (href?: string, onClick?: () => void) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  const scrollToElement = (sectionId: string, delay: number = 0) => {
    if (delay > 0) {
      let cancelRetry: (() => void) | null = null;
      const initialTimer = setTimeout(() => {
        cancelRetry = scrollToElementWithRetry(sectionId, lenis);
      }, delay);
      return () => {
        clearTimeout(initialTimer);
        if (cancelRetry) cancelRetry();
      };
    } else {
      return scrollToElementWithRetry(sectionId, lenis);
    }
  };

  const handleClick = (e?: React.MouseEvent) => {
    if (href) {
      const isExternalLink = /^(https?:\/\/|www\.)/.test(href);
      const isEmailOrPhone = /^(mailto:|tel:)/.test(href);

      if (isExternalLink) {
        // preventDefault so an <a href="external"> doesn't ALSO navigate the
        // current tab — the link opens only in a new tab.
        e?.preventDefault();
        window.open(
          href.startsWith("www.") ? `https://${href}` : href,
          "_blank",
          "noopener,noreferrer"
        );
      } else if (isEmailOrPhone) {
        // Let browser handle mailto:/tel: naturally
        onClick?.();
        return;
      } else if (href.startsWith("/")) {
        e?.preventDefault();
        const [path, hash] = href.split("#");

        if (path !== location.pathname) {
          navigate(path);
          if (hash) {
            scrollToElement(hash, 100);
          }
        } else if (hash) {
          scrollToElement(hash, 0);
        }
      } else if (href.startsWith("#")) {
        e?.preventDefault();
        scrollToElement(href.slice(1), 0);
      } else {
        e?.preventDefault();
        scrollToElement(href, 0);
      }
    }
    onClick?.();
  };

  return handleClick;
};
