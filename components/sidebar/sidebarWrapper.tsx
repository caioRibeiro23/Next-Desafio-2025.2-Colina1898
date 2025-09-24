"use client";

import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";

export function SidebarWrapper() {
    const pathName = usePathname();
    const hideSidebar = pathName.includes("/gerenciamento/acoes/criar") || pathName.includes("/gerenciamento/acoes/editar") || pathName.includes("/gerenciamento/acoes/visualizar") || pathName.includes("/gerenciamento/acoes/visualizar");
    if (!hideSidebar) {
        return <Sidebar />;
    }
    return null;
}