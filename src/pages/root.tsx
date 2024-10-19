import { Outlet } from "react-router-dom";
import PersistentDrawerLeft from "../components/persistentDrawer";

export const Root = () => {
    return (
        <>
            <PersistentDrawerLeft>
                <Outlet/>
            </PersistentDrawerLeft>
        </>
    );
};
export default  Root;