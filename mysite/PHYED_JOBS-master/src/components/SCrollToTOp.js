import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    // Auto return to page top controller

    useEffect(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth',    
        });
    }, [pathname])

    return null;
}